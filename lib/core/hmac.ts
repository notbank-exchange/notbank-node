export async function sign(
  apiPublicKey: string,
  apiSecretKey: string,
  userId: string,
  nonce: string,
): Promise<string> {
  const message = nonce + userId + apiPublicKey;
  const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
  if (isNode) {
    // Node.js: use built-in crypto
    const crypto = require('crypto');
    const hmac256 = crypto.createHmac("sha256", apiSecretKey);
    hmac256.update(message);
    return hmac256.digest("hex");
  } else if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    // Browser: use Web Crypto API
    const enc = new TextEncoder();
    const key = await window.crypto.subtle.importKey(
      "raw",
      enc.encode(apiSecretKey),
      { name: "HMAC", hash: { name: "SHA-256" } },
      false,
      ["sign"]
    );
    const signature = await window.crypto.subtle.sign(
      "HMAC",
      key,
      enc.encode(message)
    );
    return Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  } else {
    throw new Error("No suitable crypto implementation found");
  }
}

export function getNonce(): string {
  return getRandomInt(1_000_000).toString();
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

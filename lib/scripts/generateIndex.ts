/**
 * To use, change tsconfig.json ES6 to CommonJS -> "module": "CommonJS".
 * Run: npm run generate-index -- <path>
 * or Run: node lib/scripts/generateIndex.js <<path>>
 */

import * as fs from "fs";
import * as path from "path";

// Nombre del archivo index a generar
const indexFileName = "index.ts";

// Obtener el directorio objetivo desde los argumentos o usar el actual
const targetDir: string = path.resolve(process.argv[2] || ".");

// Ruta completa del archivo index.ts
const indexPath: string = path.join(targetDir, indexFileName);

/**
 * Genera un archivo index.ts que exporta todos los archivos .ts del directorio dado.
 * También crea un backup si el archivo index.ts ya existe.
 * @param dir Ruta del directorio donde generar el index
 */
function generateBarrelFile(dir: string): void {
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
    console.error("❌ El directorio especificado no existe o no es válido.");
    process.exit(1);
  }

  const files: string[] = fs.readdirSync(dir);

  const exportStatements: string[] = files
    .filter((file: string): boolean => {
      const ext: string = path.extname(file);
      const base: string = path.basename(file);
      const fileName: string = `${base}.${ext}`;
      return (
        ext === ".ts" && !base.endsWith(".d.ts") && fileName != indexFileName
      );
    })
    .map((file: string): string => {
      const nameWithoutExt: string = "./" + path.basename(file, ".ts");
      return `export * from "${nameWithoutExt}";`;
    });

  const output: string = exportStatements.join("\n") + "\n";

  // Si index.ts ya existe, crear backup
  if (fs.existsSync(indexPath)) {
    const backupPath: string = indexPath + ".bak";
    fs.copyFileSync(indexPath, backupPath);
    console.log(`📦 Backup creado: ${path.basename(backupPath)}`);
  }

  fs.writeFileSync(indexPath, output);
  console.log(`✅ Archivo ${indexFileName} generado en ${dir}`);
}

generateBarrelFile(targetDir);

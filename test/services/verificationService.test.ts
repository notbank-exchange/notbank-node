import assert from "assert";
import "mocha";

import { fileFromSync } from 'node-fetch';
import { DocumentAdressType, Gender } from "../../lib/models/enums";
import { NotbankClient } from "../../lib/services/notbankClient";

describe("verification service", () => {
  const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");

  describe("verifyBasic", () => {
    it("should verify an user to basic level", async () => {
      const response = await client.getVerificationService().verifyBasic({
  
        is_business: false,
        profession: "woodcutter",
        gender: Gender.MAN,
        city: "Novosibirsk",
        street: "1",
        country: "Russia"
      });
      console.log("basic user verification:", response);
      assert.ok(response, "Response should not be null");
    });
  });

  it("should verify an user to trader level", async () => {
    const image = fileFromSync("./image.png");
    const response = await client.getVerificationService().verifyTrader({
      pep: false,
      subject_comply: false,
      is_public_servant: false,
      document_address_file: image,
      document_address_type: DocumentAdressType.CREDIT_CARD_BILL
    });
    console.log("trader user verification:", response);
    assert.ok(response, "Response should not be null");
  });

  it("should verify an user to trader plus level", async () => {
    const image = fileFromSync("./image.png");
    await client.getVerificationService().verifyTraderPlus({
      user_id: "123abc123bcd",
      declaration: {
      },
      files: [["an_image", image]],
    });
  });

  it.only("should fetch the schemas for trader plus verification", async () => {
    const response = await client.getVerificationService().getTraderPlusVerificationSchemes({
      user_id: "123abc123bcd",
    });
    console.log("trader plus verification schemas:", response);
    assert.ok(response, "Response should not be null");
  });

  it("should fetch the schemas for institutional verification", async () => {
    const response = await client.getVerificationService().getInstitutionalCompanySchemes({
      country: "123abc123bcd",
    });
    console.log("institutional company schemes:", response);
    assert.ok(response, "Response should not be null");
  });

  it("should verify an institutional company", async () => {
    const image = fileFromSync("./image.png");
    const response = await client.getVerificationService().verifyInstitutionalCompany({
      country: "123abc123bcd",
      declaration_template_id: "",
      document_type: "",
      user_id: "",
      files: [["an_image", image]],
    });
    console.log("institutional company verification:", response);
    assert.ok(response, "Response should not be null");
  });

  it("should fetch the institutional company verification status", async () => {
    const response = await client.getVerificationService().getInstitutionalCompanyVerificationStatus();
    console.log("institutional company verification:", response);
    assert.ok(response, "Response should not be null");
  });

  it("should fetch the institutional member types", async () => {
    const response = await client.getVerificationService().getInstitutionalMemberTypes();
    console.log("member types:", response);
    assert.ok(response, "Response should not be null");
  });

  it("should fetch the schemas for institutional members", async () => {
    const response = await client.getVerificationService().getInstitutionalMemberSchemes({
      member_type: 1
    });
    console.log("institutional members:", response);
    assert.ok(response, "Response should not be null");
  });

  it("should verify an institutional member", async () => {
    const image = fileFromSync("./image.png");
    const response = await client.getVerificationService().verifyInstitutionalMember({
      member_template_id: 3,
      files: [["an_image", image]],
    });
    console.log("instituional member verification:", response);
    assert.ok(response, "Response should not be null");
  });

  it("should fetch the schemas for member verification status", async () => {
    const response = await client.getVerificationService().getInstitutionalMemberVerificationStatus();
    console.log("institutional member verification status list:", response);
    assert.ok(response, "Response should not be null");
  });

  it("should fetch the schemas for institutional document types", async () => {
    const response = await client.getVerificationService().getInstitutionalDocumentTypes();
    console.log("institutional document types:", response);
    assert.ok(response, "Response should not be null");
  });

  it("should verify an institutional document", async () => {
    const image = fileFromSync("./image.png");
    await client.getVerificationService().verifyInstitutionalDocument({
      type: 2,
      file: image
    });
  });

  it("should fetch the instituional document verification status", async () => {
    const response = await client.getVerificationService().getInstitutionalDocumentVerificationStatus();
    console.log("institutional document verification status list:", response);
    assert.ok(response, "Response should not be null");
  });

  it("should fetch the user current verification level and status", async () => {
    const response = await client.getVerificationService().getVerificationStatus({
      user_id: "123"
    });
    console.log("user verification level and state:", response);
    assert.ok(response, "Response should not be null");
  });
});

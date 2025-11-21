import assert from "assert";
import "mocha";

import { NotbankClient } from "../../lib/services/notbankClient";
import { DocumentAdressType, Gender, VerificationOrigin } from "../../lib/models/enums";
// ! TODO: should we re-import it from our own file?
import { fileFromSync } from 'node-fetch';

describe("account service", () => {
  const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");

  describe("verifyBasic", () => {
    it("should verify an user to basic level", async () => {
      const response = await client.getVerificationService().verifyBasic({
        origin: VerificationOrigin.USER,
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
    const response = await client.getVerificationService().verifyTrader({
      pep: false,
      subject_comply: false,
      is_public_servant: false,
      document_address_file: new File([], ""),
      document_address_type: DocumentAdressType.CREDIT_CARD_BILL

    });
    console.log("basic user verification:", response);
    assert.ok(response, "Response should not be null");
  });


  it("should verify an user to trader plus level", async () => {
    const image = fileFromSync("./image.png");
    const response = await client.getVerificationService().verifyTraderPlus({
      user_id: "123abc123bcd",
      declaration: {

      },
      files: [["an_image", image]],
    });
    console.log("basic user verification:", response);
    assert.ok(response, "Response should not be null");
  });


});

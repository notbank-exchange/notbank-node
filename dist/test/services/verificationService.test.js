var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import assert from "assert";
import "mocha";
import { fileFromSync } from 'node-fetch';
import { DocumentAdressType, Gender, Profession } from "../../lib/models/enums/index.js";
import { NotbankClient } from "../../lib/services/notbankClient.js";
describe("verification service", () => {
    const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
    describe("verifyBasic", () => {
        it("should verify an user to basic level", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield client.getVerificationService().verifyBasic({
                is_business: false,
                profession: Profession.ACCOUNTANT,
                gender: Gender.MAN,
                city: "Novosibirsk",
                street: "1",
                country: "Russia"
            });
            console.log("basic user verification:", response);
            assert.ok(response, "Response should not be null");
        }));
    });
    it("should verify an user to trader level", () => __awaiter(void 0, void 0, void 0, function* () {
        const image = fileFromSync("./image.png");
        const response = yield client.getVerificationService().verifyTrader({
            pep: false,
            subject_comply: false,
            is_public_servant: false,
            document_address_file: image,
            document_address_type: DocumentAdressType.CREDIT_CARD_BILL
        });
        console.log("trader user verification:", response);
        assert.ok(response, "Response should not be null");
    }));
    it("should verify an user to trader plus level", () => __awaiter(void 0, void 0, void 0, function* () {
        const image_1 = fileFromSync("./image_1.png");
        const image_2 = fileFromSync("./image_2.png");
        yield client.getVerificationService().verifyTraderPlus({
            country: "AR",
            declaration_template_id: 95,
            declaration_id: 98,
            fields: [
                ["asset_11_435_amount", 10.000],
                ["asset_11_435_currency", "ARS"],
                ["asset_11_435_company_name", "notbank"],
                ["asset_11_435_work_longevity", "less_than_a_year"]
            ],
            files: [
                ["asset_11_435_file[]", image_1],
                ["asset_11_435_file[]", image_2]
            ],
        });
    }));
    it("should fetch the schemas for trader plus verification", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getVerificationService().getTraderPlusVerificationSchemes({
            country: "AR",
            user_id: "5005dec0-31e5-49f5-a441-71bc862210d7",
        });
        console.log("trader plus verification schemas:", response);
        assert.ok(response, "Response should not be null");
    }));
    it("should fetch the schemas for institutional verification", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getVerificationService().getInstitutionalCompanySchemes({
            country: "123abc123bcd",
        });
        console.log("institutional company schemes:", response);
        assert.ok(response, "Response should not be null");
    }));
    it("should verify an institutional company", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getVerificationService().verifyInstitutionalCompany({
            declaration_template_id: 95,
            declaration_id: 95,
            country: "PE",
            fields: [
                ["asset_14_456_company_city", "cusco"],
                ["asset_14_456_company_name", "corceles corsarios"],
                ["asset_14_456_company_field", "transporte terrestre"],
                ["asset_14_456_company_address", "Freire 123"],
                ["asset_14_456_company_identity", "123123"],
                ["asset_14_456_company_province", "cusco"],
            ]
        });
        console.log("institutional company verification:", response);
        assert.ok(response, "Response should not be null");
    }));
    it("should fetch the institutional company verification status", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getVerificationService().getInstitutionalCompanyVerificationStatus();
        console.log("institutional company verification:", response);
        assert.ok(response, "Response should not be null");
    }));
    it("should fetch the institutional member types", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getVerificationService().getInstitutionalMemberTypes();
        console.log("member types:", response);
        assert.ok(response, "Response should not be null");
    }));
    it("should fetch the schemas for institutional members", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getVerificationService().getInstitutionalMemberSchemes({
            member_type: 1
        });
        console.log("institutional members:", response);
        assert.ok(response, "Response should not be null");
    }));
    it("should verify an institutional member", () => __awaiter(void 0, void 0, void 0, function* () {
        const image_1 = fileFromSync("./image_1.png");
        const image_2 = fileFromSync("./image_2.png");
        const response = yield client.getVerificationService().verifyInstitutionalMember({
            member_type: 1,
            member_template_id: 65,
            fields: [
                ["member_type", 1],
                ["member_template_id", 65],
                ["member_name", "Almendra"],
                ["member_lastname", "Jorquera"],
                ["member_identity", "1231234"],
                ["member_invoice", "222333"],
                ["member_country", "PE"],
                ["member_address", "Freire 123"],
                ["member_city", "cusco"],
                ["member_province", "cusco"],
                ["member_profession", "trader"],
                ["member_ispep", false],
                ["member_issubjectcomply", false],
                ["member_ispublicservant", false],
            ],
            files: [
                ["member_front_documents", image_1],
                ["member_back_documents", image_2]
            ],
        });
        console.log("instituional member verification:", response);
        assert.ok(response, "Response should not be null");
    }));
    it("should fetch the schemas for member verification status", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getVerificationService().getInstitutionalMemberVerificationStatus();
        console.log("institutional member verification status list:", response);
        assert.ok(response, "Response should not be null");
    }));
    it("should fetch the schemas for institutional document types", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getVerificationService().getInstitutionalDocumentTypes();
        console.log("institutional document types:", response);
        assert.ok(response, "Response should not be null");
    }));
    it("should verify an institutional document", () => __awaiter(void 0, void 0, void 0, function* () {
        const image = fileFromSync("./image.png");
        yield client.getVerificationService().verifyInstitutionalDocument({
            type: 2,
            file: image
        });
    }));
    it("should fetch the instituional document verification status", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getVerificationService().getInstitutionalDocumentVerificationStatus();
        console.log("institutional document verification status list:", response);
        assert.ok(response, "Response should not be null");
    }));
    it("should fetch the user current verification level and status", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getVerificationService().getVerificationStatus({
            user_id: "123"
        });
        console.log("user verification level and state:", response);
        assert.ok(response, "Response should not be null");
    }));
});

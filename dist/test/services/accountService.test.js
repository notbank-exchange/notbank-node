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
import { NotbankClient } from "../../lib/services/notbankClient.js";
describe("account service", () => {
    const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.authenticateUser({
            ApiPublicKey: "aada11a919d9102f61fc1ca5a97ea578",
            ApiSecretKey: "f2647a3c19fd8431be971d1d7b2101f9",
            UserId: "9",
        });
    }));
    const accountService = client.getAccountService();
    describe("getAccountTransactions", () => {
        it("should return transactions with valid AccountId", () => __awaiter(void 0, void 0, void 0, function* () {
            const params = {
                AccountId: 99,
            };
            const response = yield accountService.getAccountTransactions(params);
            console.log("Transactions:", response);
            assert.ok(Array.isArray(response), "Response should be an array");
        }));
    });
    describe("get account positions", () => {
        it("fetches positions successfully (IncludePending = true)", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield accountService.getAccountPositions({
                    AccountId: 13,
                    IncludePending: true,
                });
                assert.ok(Array.isArray(response), "Positions should be an array");
                if (response.length > 0) {
                    assert.ok(response[0].ProductId != null, "Each position should have a ProductId");
                }
            });
        });
        it("fails or returns error for invalid AccountId (e.g. -1)", function () {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield accountService.getAccountPositions({
                        AccountId: -1,
                        IncludePending: false,
                    });
                    assert.fail("The call should have thrown an error for invalid AccountId");
                }
                catch (error) {
                    console.log("Expected error for invalid AccountId:", error.message);
                    assert.ok(error, "Should throw an error for invalid AccountId");
                }
            });
        });
    });
    describe("getAccountInstrumentStatistics", () => {
        it("should return instrument stats with valid AccountId", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield accountService.getAccountInstrumentStatistics({
                AccountId: 99,
            });
            console.log("Instrument stats:", response);
            assert.ok(Array.isArray(response), "Response should be an array");
        }));
        it("should throw if AccountId is missing", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield accountService.getAccountInstrumentStatistics({});
                assert.fail("Should throw an error for missing AccountId");
            }
            catch (error) {
                assert.match(error.message, /AccountId is required field/);
            }
        }));
    });
    describe("getAccountInfo", () => {
        it("should return account info for valid AccountId", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield accountService.getAccountInfo({
                AccountId: 99,
            });
            console.log("Account info:", response);
            assert.ok(response, "Response should not be null");
            assert.strictEqual(typeof response.AccountId, "number");
        }));
    });
});

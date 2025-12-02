var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "mocha";
import { NotbankClient } from "../../lib/services/notbankClient.js";
import assert from "assert";
describe.only("quote service", () => {
    const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.authenticateUser({
            ApiPublicKey: "aada11a919d9102f61fc1ca5a97ea578",
            ApiSecretKey: "f2647a3c19fd8431be971d1d7b2101f9",
            UserId: "9",
        });
    }));
    it.only("should make an inverse quote", () => __awaiter(void 0, void 0, void 0, function* () {
        const defaultAccount = yield client.getAccountService().getAccountInfo();
        const positions = yield client.getAccountService().getAccountPositions({ AccountId: defaultAccount.AccountId });
        console.log("hallo");
        positions.forEach(position => {
            if (position.Amount > 0) {
                console.log(position);
            }
        });
        console.log('positions:', positions.length);
        assert.ok(positions);
        // const response = await client.getQuoteService().createInverseQuote({
        //   account_id: 235,
        //   from_currency: "",
        //   to_currency: "",
        //   to_amount: "",
        // });
    }));
});

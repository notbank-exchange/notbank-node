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
describe("auth service", () => {
    const client = NotbankClient.Factory.createWebsocketClient({ domain: "stgapi.notbank.exchange" });
    describe("auth user", () => {
        it("should authenticate the user", () => __awaiter(void 0, void 0, void 0, function* () {
            yield client.connect();
            const id = "312487f2-8d56-4a90-ae59-76acd5d1534a";
            const response = yield client.getAuthService().webAuthenticateUser({
                JWTToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY0ODU4MTc4LCJqdGkiOiJiYTgxMzRiNzYyZTY0NTAwOTRkZWFhMGE3YjIwY2M4NCIsInVpZCI6IjMxMjQ4N2YyLThkNTYtNGE5MC1hZTU5LTc2YWNkNWQxNTM0YSIsInNjb3BlIjoiYXBfdXNlcnMiLCJlbWFpbCI6ImlzbWFlbCsxM0BkeXNvcHNpcy5jb20iLCJnaWQiOltdLCJhdWQiOiJjcnlwdG9tYXJrZXQtY2xpZW50LWlkIiwiaXNzIjoiaHR0cHM6Ly93d3cuY3J5cHRvbWt0LmNvbSJ9.CMVkRCp1_zDpsUaMfm2JGqmZ503X2yBbvkUhm2aE88PxyNxxBvkea9IJ-B4ZlqM6Q499-tMuJz_W2zEUFTiJIFpID3LltaUIanTj9KDUKMVM6EC-X63XuGy3qGK19QUS7pogE0pelR8sl-rjYLCWoU1Oy3GCGMI3oTs5WMyuOuVLXTqHKkMgJ5te5k1KYEsQ4j5ucGkN9yWrFLqw8UQLggfPaPwQY6otoWFC76rkTku2nqj131oW2eV-ncwRGshvBXlPce7RE6phNF2JNTo5du4TZ811oeImCKFCaMIFgASJaMJvC4cgWTsw9mmXVCbgSDCvWX-6cSiyJjZWRobbKQ"
            });
            console.log("authentication response:", response);
            var defaultAccount = yield client.getAccountService().getAccountInfo();
            var positions = yield client.getAccountService().getAccountPositions({ AccountId: defaultAccount.AccountId });
            positions.map(position => {
                if (position.Amount > 0) {
                    console.log(position);
                }
            });
            yield client.close();
        }));
    });
});

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
    describe("registerUser", () => {
        it("should authenticate the user", () => __awaiter(void 0, void 0, void 0, function* () {
            yield client.connect();
            const id = "5005dec0-31e5-49f5-a441-71bc862210d7";
            console.log(yield client.getSystemService().ping());
            const response = yield client.getAuthService().webAuthenticateUser({
                JWTToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY0NDIxMjQzLCJqdGkiOiJhNGMzMTRkY2Y0YTA0ZjE2YTIxOGFkOWQyZjkyYjIxZCIsInVpZCI6IjUwMDVkZWMwLTMxZTUtNDlmNS1hNDQxLTcxYmM4NjIyMTBkNyIsInNjb3BlIjoiYXBfdXNlcnMiLCJlbWFpbCI6ImlzbWFlbCsxMEBkeXNvcHNpcy5jb20iLCJnaWQiOltdLCJhdWQiOiJjcnlwdG9tYXJrZXQtY2xpZW50LWlkIiwiaXNzIjoiaHR0cHM6Ly93d3cuY3J5cHRvbWt0LmNvbSJ9.SLoBhvKrUoSJA05F4QlEIM-Dl_BDRW2bDoj83h_qoVqaalfhPekWwgPcEHPLoDCzyrYytYnalkaWWgwX45xkfDKuzJ_IgLgCzdwR3Hk_W4HGX9xhLo9mjXtaAiSI2qt6rkfyiRtRmgt0i32osi6L-RDbe6m7NkaVJXg5_epGI5OhOSC4sLRQNz5Ls7euuVR2Ti7mRCXUXqNvJ-pieV5JqVGFMQOgFKgjPZBJIvEDF_DuwFgVD6nxgTVfPm6z_czufg2Ya8mc9DD7is-hEFxsgghGZcvd7o2hGovyftB1TkICkqLEguurMQPL3balpSRwmpKfTApA-SI6neM4rWSSvw"
            });
            console.log("authentication response:", response);
            const accounts = yield client.getUserService().getUserAccounts({});
            console.log("accounts: " + JSON.stringify(accounts));
            // const positions = await client.getAccountService().getAccountPositions({ AccountId: accounts.AccountId })
            // console.log("accounts: " + JSON.stringify(positions))
            // assert.ok(response, "Response should not be null");
        }));
        it("should authenticate the user", () => __awaiter(void 0, void 0, void 0, function* () {
            // await client.connect()
            // const id = "379b27c6-c62f-464c-a632-3f3059b47578"
            // const response = await client.getAuthService().webAuthenticateUser({
            //   JWTToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY0MzM0OTQ0LCJqdGkiOiJjMTUzYzhlZTY1N2I0OTE3ODliMDNhMjhhN2U3ZjM2MyIsInVpZCI6IjM3OWIyN2M2LWM2MmYtNDY0Yy1hNjMyLTNmMzA1OWI0NzU3OCIsInNjb3BlIjoiYXBfdXNlcnMiLCJlbWFpbCI6ImlzbWFlbCs5QGR5c29wc2lzLmNvbSIsImdpZCI6W10sImF1ZCI6ImNyeXB0b21hcmtldC1jbGllbnQtaWQiLCJpc3MiOiJodHRwczovL3d3dy5jcnlwdG9ta3QuY29tIn0.r1juIwq9NdNlIr2ChvBAPGTkAzgh8nT5BN63qrqlLJzKHjspjv_vooNHN-yL_ouzHqUEflHhBiAKkkRL_Ll3UzVNTozwWr59mUiZTiyo51AlUVk9Z3xmAOUqc1bcgjwaT_dnKqbvBuVwPO6C17TMzyZfdIwKf62v9w1IvcxRdYAmV2KWPhSVws3THeNCpbDO9OA_tRh-PPwrgS-EEIU4I01NMcmOS3kHR0dtxLLeK6BkMfH03ie41c-fgWaL8f4v2CrgKcIvLUguiuehBiXNIOMQWEbm_tNfb4z3X9og_DyRPHV_lKg0B9v6ZMYaNF-v9_wBIiETfnKip1Rd4xavyw"
            // })
        }));
    });
});

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _NbResponseHandler_getData, _NbResponseHandler_getTextData;
import { NotbankError } from "../../models/notbankError.js";
export class NbResponseHandler {
    static handle(response, paged) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var jsonResponse = yield __classPrivateFieldGet(_a, _a, "m", _NbResponseHandler_getData).call(_a, response);
                if (!jsonResponse) {
                    throw new NotbankError("http error. (status=" + response.status + ")", -1);
                }
                var nbResponse = jsonResponse;
                if ((nbResponse === null || nbResponse === void 0 ? void 0 : nbResponse.status) === 'success') {
                    return paged ? jsonResponse : nbResponse.data;
                }
                const error = NotbankError.Factory.createFromNbResponse(nbResponse, response.status);
                throw error;
            }
            catch (error) {
                throw error; // Re-lanza el error
            }
        });
    }
}
_a = NbResponseHandler, _NbResponseHandler_getData = function _NbResponseHandler_getData(response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield response.json();
            return data;
        }
        catch (err) {
            return null;
        }
    });
}, _NbResponseHandler_getTextData = function _NbResponseHandler_getTextData(response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield response.text();
        }
        catch (err) {
            return null;
        }
    });
};

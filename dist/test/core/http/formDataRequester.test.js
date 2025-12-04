var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { File, fileFromSync } from 'node-fetch';
import "mocha";
import { FormDataBuilder } from '../../../lib/core/http/formDataBuilder.js';
import { FormDataRequester } from '../../../lib/core/http/formDataRequester.js';
describe("form data", () => {
    it("", () => __awaiter(void 0, void 0, void 0, function* () {
        let file = new File(["some text"], "file.txt");
        let file2 = fileFromSync("image.png");
        const formData = FormDataBuilder.build({
            fields: [["aKey", "a value"]],
            files: [["file[]", file], ["file[]", file2]],
            message: { anotherField: false }
        });
        var response = yield FormDataRequester.post({
            url: "http://localhost:8000",
            formData: formData
        });
    }));
});

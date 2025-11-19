
import * as fs from 'fs';
import { FormDataRequester } from "../../../lib/core/http/formDataRequester";
import { JsonRequester } from "../../../lib/core/http/jsonRequester";
import { RequestType } from "../../../lib/core/serviceClient";
// import { File, FormData } from "formdata-node"
import fetch, {
  Blob,
  blobFrom,
  blobFromSync,
  FormData,
  File,
  fileFrom,
  fileFromSync
} from 'node-fetch'

test.only('form data test', () => {
  // let file = new File(["some text"], "file.txt")
  let file2 = fs.readFileSync('example.pdf', { encoding: 'utf-8' });

  let formData = new FormData();
  formData.append("aKey", "a value")
  // formData.append("file", file2)
  return fetch("http://localhost:8000", {
    method: "POST",
    body: formData
  });
   expect(true).toBe(false);
});


import fetch, {
  File,
  FormData,
  fileFromSync
} from 'node-fetch';

import "mocha";

describe("form data", () => {
  let file = new File(["some text"], "file.txt")
  let file2 = fileFromSync("LICENSE")

  let formData = new FormData();
  formData.append("aKey", "a value")
  formData.append("file[]", file)
  formData.append("file[]", file2)
  return fetch("http://localhost:8000", {
    method: "POST",
    body: formData
  });
});
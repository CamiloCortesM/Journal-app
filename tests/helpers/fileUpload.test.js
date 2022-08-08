import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: "dnba3kkh6",
  api_key: "433541926371224",
  api_secret: "WqCE9dP3-D9T4D-q1Lf_mfPNj7g",
  secure: true,
});

describe("test in fileUpload", () => {
  test("must upload the file correctly in cloudinary ", async () => {
    const imageUrl =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cuesta_del_obispo_01.jpg/640px-Cuesta_del_obispo_01.jpg";

    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");

    // console.log(imageId);
    const cloudResp = await cloudinary.api.delete_resources(
      ["journal/" + imageId],
      {
        resource_type: "image",
      }
    );

    console.log(cloudResp);
  });

  test("debe de retornar null", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});

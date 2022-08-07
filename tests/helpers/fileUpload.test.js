import { fileUpload } from "../../src/helpers/fileUpload";

describe("test in fileUpload", () => {
  test("must upload the file correctly in cloudinary ", async () => {
    const imageUrl =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cuesta_del_obispo_01.jpg/640px-Cuesta_del_obispo_01.jpg";

    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob],'foto.jpg')

    const url = await fileUpload(file);
    expect(typeof url).toBe('string')
  });
});

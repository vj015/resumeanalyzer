import * as PDFJS from "pdfjs-dist/build/pdf.min.mjs";
export default defineEventHandler(async (event) => {
  try {
    const file = await readMultipartFormData(event);
    const pdffile = file.find((e) => e.name == "resume");
    const uint8ArrayData = new Uint8Array(pdffile.data);
    if (uint8ArrayData.byteLength == 0) {
      return createError({
        statusCode: 404,
        statusMessage: "Resume not found",
      });
    }
    let text = "";
    await import("pdfjs-dist/build/pdf.worker.mjs");
    await PDFJS.getDocument(uint8ArrayData).promise.then(async (res) => {
      const numPages = res.numPages;
      for (let i = 1; i <= numPages; i++) {
        const page = await res.getPage(i);
        const pageText = await page.getTextContent();
        text += pageText.items.map((item) => item.str).join(" ") + "\n";
      }
    });
    return text;
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: `Something went wrong ${error}`,
    });
  }
});

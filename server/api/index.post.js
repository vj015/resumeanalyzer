export default defineEventHandler(async (event) => {
  const file = await readMultipartFormData(event);
  const pdffile = file.find((e) => e.name == "resume");
  return pdffile;
});

import { getPromptCompleteForCode } from "../utils/ai";
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.code) {
      return createError({
        statusCode: 404,
        statusMessage: "Code not found",
      });
    }
    const res = await getPromptCompleteForCode(body.code);
    return res;
  } catch (error) {
    console.log("inside post call");
    console.log(error);
    return createError({
      statusCode: 500,
      statusMessage: `Something went wrong ${error}`,
    });
  }
});

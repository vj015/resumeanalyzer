import { getPromptComplete } from "../utils/ai";
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.code) {
      return createError({
        statusCode: 404,
        statusMessage: "Resume not found",
      });
    }
    const res = await getPromptComplete(body.code);
    return res;
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: `Something went wrong ${error}`,
    });
  }
});
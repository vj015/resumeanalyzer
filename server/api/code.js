import { getPromptComplete } from "../utils/ai";
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.code) {
      return createError({
        statusCode: 404,
        statusMessage: "Code not found",
      });
    }
    const res = await getPromptComplete(
      body.code,
      "You are an efficient coder designed to optimize code. Provide only optimize, clean and bug fixed code in response to inputted code.Please provide optimization and bug fixing for code provided by user: Please only provide code as result and skip its explanation"
    );
    return res;
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: `Something went wrong ${error}`,
    });
  }
});

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
    const resPositives = await getPromptComplete(
      body.code,
      "You are an analytical tool designed to produce a comprehensive assessment of strength of potential hires. Provide a response comprising : a brief overview of the positives observed in their resume. Please provide raw text only with no styling. Please provide analysis for resume provided by user:"
    );
    const resNegatives = await getPromptComplete(
      body.code,
      "You are an analytical tool designed to produce a comprehensive assessment of negatives of potential hires. Provide a response comprising : a brief overview of the negatives observed in their resume. Please provide raw text only with no styling. Please provide analysis for resume provided by user:"
    );
    const resSuggestions = await getPromptComplete(
      body.code,
      "You are an analytical tool designed to produce a comprehensive assessment of improvements of potential hires. Provide a response comprising : a brief overview of the suggestions or improvements for their resume. Please provide raw text only with no styling. Please provide analysis for resume provided by user:"
    );
    return Promise.all([resPositives, resNegatives, resSuggestions]);
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: `Something went wrong ${error}`,
    });
  }
});

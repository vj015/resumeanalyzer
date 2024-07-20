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
    const res = await getPromptComplete(
      body.code,
      "You are an analytical tool designed to produce a comprehensive assessment of potential hires, including their strengths, weaknesses, and recommendations. Provide a response comprising four sub-results: a brief overview of the individual under subheading overview, positives observed in their resume under subheading positives, negatives identified in their resume under subheading negatives, and suggestions for enhancing their resume under subheading enhancements. Please style these four sections with tailwind css classes, ensure no color class of tailwind is used in font and background both and also make them responsive, which I will directly render your output in a div in javascript. Please provide analysis for resume provided by user:"
    );
    return res;
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: `Something went wrong ${error}`,
    });
  }
});

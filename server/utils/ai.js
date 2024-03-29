import { OpenAI } from "openai";
const openai = new OpenAI({
  apiKey: process.env.NUXT_OPEN_AI_SECRET_KEY,
});

export const getPromptComplete = async (msg) => {
  try {
    console.log(msg);
    console.log("Message inside getPromptComplete fn");
    console.log(apikey);
    let prompArray = [
      {
        role: "system",
        content:
          "You are an analytical tool designed to produce a comprehensive assessment of potential hires, including their strengths, weaknesses, and recommendations. Provide a response comprising four sub-results: a brief overview of the individual under subheading overview, positives observed in their resume under subheading positives, negatives identified in their resume under subheading negatives, and suggestions for enhancing their resume under subheading enhancements. Please style these four sections with tailwind css classes, ensure no color class of tailwind is used in font and background both and also make them responsive, which I will directly render your output in a div in javascript. Please provide analysis for resume provided by user:",
      },
    ];
    const obj = {
      role: "user",
      content: `${msg}`,
    };
    prompArray.push(obj);
    const completion = await openai.chat.completions.create({
      messages: prompArray,
      model: "gpt-3.5-turbo",
      max_tokens: 800,
      temperature: 0.5,
    });
    console.log(completion);
    return completion.choices[0];
  } catch (error) {
    console.error("Error from API:", error);
    throw error;
  }
};

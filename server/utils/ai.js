import { OpenAI } from "openai";
const openai = new OpenAI({
  apiKey: process.env.NUXT_OPEN_AI_SECRET_KEY,
  baseURL: "https://api.pawan.krd/cosmosrp/v1",
});

export const getPromptComplete = async (msg) => {
  try {
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
    });
    return completion.choices[0];
  } catch (error) {
    console.error("Error from API:", error);
    throw error;
  }
};

export const getPromptCompleteForCode = async (msg) => {
  try {
    let prompArray = [
      {
        role: "system",
        content:
          "You are an efficient coder designed to optimize code. Provide only optimize, clean and bug fixed code in response to inputted code.Please provide optimization and bug fixing for code provided by user: Please only provide code as result and skip its explanation",
      },
    ];
    const obj = {
      role: "user",
      content: `${msg}`,
    };
    prompArray.push(obj);
    const completion = await openai.chat.completions.create({
      messages: prompArray,
    });
    return completion.choices[0];
  } catch (error) {
    console.error("Error from API:", error);
    throw error;
  }
};

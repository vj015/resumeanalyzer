import { OpenAI } from "openai";
const openai = new OpenAI({
  apiKey: process.env.NUXT_OPEN_AI_SECRET_KEY,
});

export const getPromptComplete = async (msg) => {
  try {
    let prompArray = [
      {
        role: "system",
        content:
          "You are an analytical tool crafted to generate a thorough inventory of the strengths, weaknesses and recommendations for potential hires. Please provide analysis for resume provided by user: ",
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
    return completion.choices[0];
  } catch (error) {
    console.error("Error from API:", error);
    throw error;
  }
};

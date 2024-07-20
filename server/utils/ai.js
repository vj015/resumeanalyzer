import { OpenAI } from "openai";
const openai = new OpenAI({
  apiKey: process.env.NUXT_OPEN_AI_SECRET_KEY,
  baseURL: "https://api.pawan.krd/pai-001/v1",
});

export const getPromptComplete = async (msg, prompt) => {
  try {
    let prompArray = [
      {
        role: "system",
        content: prompt,
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

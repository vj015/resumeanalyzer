// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    openAi: {
      secretKey: process.env.NUXT_OPEN_AI_SECRET_KEY,
    },
  },
});

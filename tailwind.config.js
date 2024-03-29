/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    inset: {
      "1/2": "43%",
      "1/3": "35%",
      "1/4": "18%",
    },
  },
  plugins: [],
};

import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js", 
    "./pages/**/*.mdx",
  ],
  plugins: [
    typography,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

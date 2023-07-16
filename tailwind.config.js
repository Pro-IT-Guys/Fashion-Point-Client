/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E62E04",
        secondary: "#FBE0DA",
        accent: "#455A64",
        neutral: "#81858D",
        "base-100": "#ffffff",
        info: "#F6F6F6",
        success: "#06C270",
        warning: "#ff8b2c",
        error: "#FF3B3B",
      },
    },
  },
  plugins: [],
}
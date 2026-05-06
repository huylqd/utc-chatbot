/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#24164F",
        "primary-hover": "#2B1B5A",
        accent: "#F5C400",
        background: "#FAF8F2",
        sidebar: "#F8F4E3",
        card: "#FFFFFF",
        border: "#E6DFA8",
        secondary: "#5F5A72",
        success: "#22C55E",
        error: "#EF4444",
      },
    },
  },
  plugins: [],
};

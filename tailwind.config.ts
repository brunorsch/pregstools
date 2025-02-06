import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flyonui/dist/js/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },

  content: [], // Require only if you want to use FlyonUI JS component

  plugins: [
    require("flyonui"),
    require("flyonui/plugin") // Require only if you want to use FlyonUI JS component
  ]
  plugins: [],
} satisfies Config;

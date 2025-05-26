// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}", // include if you're using a `src` directory
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1e40af", // Customize primary color
          secondary: "#64748b",
          accent: "#f59e0b",
        },
        fontFamily: {
          sans: ["Inter", "ui-sans-serif", "system-ui"],
          heading: ["Poppins", "sans-serif"],
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/line-clamp'),
    ],
  };
  
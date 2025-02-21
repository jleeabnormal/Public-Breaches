/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["CustomFont", "sans-serif"],
      },
      colors: {
        "black-01": "#000000",
        "black-02": "#1D1D1B",
        "white-01": "#FFFFFF",
        "white-02": "#F7F7F7",
        "purple-gray-01": "#F6F9F9",
        "purple-gray-02": "#EEEFEF",
        "purple-gray-03": "#CECEDC",
        "beige-03": "#DFD1D2",
        "beige-04": "#F4E8E5",
        "purple-01": "#686B82",
        "purple-02": "#A43868",
        "purple-03": "#9B9BAE",
        "purple-warm-04": "#924EBC",
        "purple-warm-05": "#692764",
        "green-03": "#15C28F",
        "green-04": "#A0DED2",
        "green-05": "#82F5E2",
        "title-purple": "#453793",
        "entry-purple": "#6763EA",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-mesh":
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20at%2012.19.19%E2%80%AFPM-Oj8XjDmtq1gMCGAjnH5XFILmDtuwz2.png")',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}


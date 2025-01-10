import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
          
          textShadow: {
            'letters': '2px 2px 0px rgba(0, 0, 0, 0.5)',
          },
            screens: {
                xs: "100px",
            },
            colors: {
                primary: {
                    "100": "#FFE8F0",
                    DEFAULT: "#EE2B69",
                },
                sky:"#68BFEA",
                secondary: "#FBE843",
                black: {
                    "100": "#333333",
                    "200": "#141413",
                    "300": "#7D8087",
                    DEFAULT: "#000000",
                },
                white: {
                    "100": "#F7F7F7",
                    DEFAULT: "#FFFFFF",
                },
            },
            fontFamily: {
                rubik: ["var(--font-rubik)"],
                "rubik-spray": ["var(--font-rubik-spray-paint)"],
                "gveret-levin": ["var(--font-gveret-levin)"],
               
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                100: "2px 2px 0px 0px rgb(0, 0, 0)",
                200: "2px 2px 0px 2px rgb(0, 0, 0)",
                300: "2px 2px 0px 2px rgb(238, 43, 105)",
            },
        },
    },
    plugins: [
      require("tailwindcss-animate"), 
      require("@tailwindcss/typography"),
      function ({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
        addUtilities({
          '.text-shadow-letters': {
            'text-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
          },
        })
      }
     ]
};

export default config;
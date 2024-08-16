/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        myBrown: {
          100: "#874A2B",
          500: "#6E2C00",
          900: "#5A1F00",
        }, 
        myOrange: {
          100: "#C14400",
          500: "#D96B00",
          900: "#C14400", 
        },
        myWhite: {
          100: "#FFFFFF",
          500: "#FEF3E2",
        },
        myOlive: {
          100: "#A5A66B",
          900: "#595E20", 
        },
        myBordeaux: {
          100: "#C44D54",
          500: "#AF2C3A",
          900: "#9F1C2A", 
        },
        myPink: {
          500: "#F29C85",
          900: "#DF7858", 
        },
        myPurple: {
          100: "#967BB6",
          500: "#663399",
          900: "#4B0082", 
        },
        myBlack: {
          100: "#000000",
        },
        myGrey: {
          100: "#999999",
          500: "#666666",
          900: "#333333", 
        },
      }, 
      animation: {
        spin: 'spin 30s linear infinite',
        fadeIn: 'fadeIn 2s ease-in-out',
        'circular-motion': 'circular-motion 4s infinite linear',
      }, 
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'circular-motion': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(50px, 0) rotate(90deg)' },
          '50%': { transform: 'translate(50px, 50px) rotate(180deg)' },
          '75%': { transform: 'translate(0, 50px) rotate(270deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
      },
      backgroundImage: {
        'purpleBackground': "url('./src/assets/images/enterprise/bg-purple.jpg')",
      }
    },
  },
  plugins: [],
}


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
      backgroundImage: {
        'purpleBackground': "url('./src/assets/images/enterprise/bg-purple.jpg')",
      }
    },
  },
  plugins: [],
}


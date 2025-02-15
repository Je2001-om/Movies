/** @type {import('tailwindcss').Config} */
module.exports= {
  content:  ["./src/index.html","./js/*/.js"],
  theme: {
    extend: {
      colors:{
        mainColor: "#ff2c1f",
        textColor: "#020307",
        bgColor: "#fff",
      },
    },
  },
  plugins: [],
};

// colors: {
//   main: "#ff2c1f",
//   text: "#020307",
//   bg: "#fff",
// },

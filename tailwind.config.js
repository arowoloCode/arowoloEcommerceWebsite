const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        banner:
          "linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.9) ) , url('./images/person.jpg')",
        newsletter:
          "background-image: linear-gradient( 68.3deg,  rgba(245,177,97,1) 0.4%, rgba(236,54,110,1) 100.2% )",
      }),
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// const colors = require("tailwindcss/colors");

// module.exports = {
//   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       backgroundImage: () => ({
//         banner:
//           "linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.9) ) , url('./images/person.jpg')",
//         newsletter:
//           "linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.9) ), url('https://images.pexels.com/photos/6476593/pexels-photo-6476593.jpeg')",
//           button: "linear-gradient(to right, #ff416c, #ff4b2b)"
//       }),
//       colors: {
//         sky: colors.sky,
//         cyan: colors.cyan,
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };

// linear-gradient( 68.3deg,  rgba(245,177,97,1) 0.4%, rgba(236,54,110,1) 100.2% ),

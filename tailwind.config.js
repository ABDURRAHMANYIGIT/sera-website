/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#88B6F2',
        lightBlue: '#B3D5F2',
        harvestOrange: '#D98841',
        lightGreen: '#B2BF50',
        darkGreen: '#5E733F',
        lightWhite: '#F2EDEB',
        backgroundColor: '#fffbec',
        containerYellow: '#f5f5bc',
        containerRed: '#ffd8b3',
        veryDarkBlue: '#13203c',
      },
      fontFamily: {
        MontserratBold : ["MontserratBold"],
        MontserratExtraBold : ["MontserratExtraBold"],
        MontserratLight : ["MontserratLight"],
        MontserratMedium : ["MontserratMedium"],
        LoraRegular : ["LoraRegular"]
      }
    },
  },
  plugins: [],
}


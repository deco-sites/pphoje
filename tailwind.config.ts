import daisyui from "daisyui";

// console.log({ daisyui });
export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: { 
    extend:{
      colors: {
        "card-date": "#EB8A90",
        "card-name": "#120D26",
        "card-local": "#747688",
        "btn-label": "#6B21A8"
      },
      fontWeight:{
        "w-7": 700
      },
    },
    container: { center: true } 
  },
};

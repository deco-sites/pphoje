import daisyui from "daisyui";

console.log({ daisyui });
export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: { container: { center: true } },
};

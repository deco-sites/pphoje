#!/usr/bin/env -S deno run -A --watch=static/
import dev from "$live/dev.ts";
import liveManifest from "$live/live.gen.ts";
import tailwindCSS from "deco-sites/std/tailwindv3.ts";
import tailwindConfig from "deco-sites/pphoje/tailwind.config.ts";
import daisyui from "npm:daisyui@2.51.6";

// Generate tailwind CSS style sheet
// await tailwindCSS({
//   ...tailwindConfig,
//   plugins: [daisyui],
//   daisyui: { themes: [], logs: false },
// });

await dev(import.meta.url, "./main.ts", { imports: [liveManifest] });

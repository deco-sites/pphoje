import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Artist {
  /** @title Nome do Artista */
  label: string;
  bio?: string;
  genre?: string;
  avatar?: LiveImage;
  links?: Array<{
    type: "twitter" | "spotify" | "site" | "instagram";
    value: string;
  }>;
}

function loader(props: Omit<Artist, "">): Artist {
  return props;
}

export default loader;

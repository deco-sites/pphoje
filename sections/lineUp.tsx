import LineUpIsland from "../islands/LineUpIsland.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import BackToTop from "../islands/BackToTop.tsx";

export type SocialMedia = {
  link?: string;
  icon?: "twitter" | "instagram" | "spotify" | "site";
};

export interface Artist {
  desktop?: LiveImage;
  mobile?: LiveImage;
  name: string;
  icons?: SocialMedia[];
  bio: string;
}
export interface LineUpProps {
  performers: Artist[];
}
function lineUp({ performers }: LineUpProps) {
  return (
    <div>
      <BackToTop />
      <LineUpIsland performers={performers} />
    </div>
  );
}

export default lineUp;

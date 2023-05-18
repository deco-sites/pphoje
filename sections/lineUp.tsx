import Modal from "../islands/Modal.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { AvailableIcons } from "../components/ui/Icon.tsx";
import BackToTop from "../islands/BackToTop.tsx";

export type SocialMedia = {
  link?: string;
  icon?: AvailableIcons;
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
      <Modal performers={performers} />
    </div>
  );
}

export default lineUp;
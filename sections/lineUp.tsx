import Modal from "../islands/Modal.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Artist {
  desktop?: LiveImage;
  mobile?: LiveImage;
  name: string;
  bio: string;
  links?: string[];
}
export interface LineUpProps {
  performers: Artist[];
}
function lineUp({ performers }: LineUpProps) {
  return (
    <div>
      <Modal performers={performers} />
    </div>
  );
}

export default lineUp;

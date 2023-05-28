import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props{
    logo: LiveImage;
    bgImage: LiveImage;
    label: string;
}

function Welcome({logo, bgImage, label}: Props) {
  return (
    <div class="relative w-full overflow-hidden flex flex-col">
        <img src={logo} alt="logo" class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"/>
        <img src={bgImage} alt="Parque do povo" class="w-full"/>
        <div class="mx-auto absolute bottom-5 flex items-center justify-center w-full">
            <button class=" mx-auto bg-white text-btn-label font-bold py-2 px-4 rounded-full">{label}</button>
        </div>
    </div>
  )
}

export default Welcome
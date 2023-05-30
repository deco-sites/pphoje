import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Card from "../components/ui/Card.tsx";
import { Programacao } from "../loaders/Programacao.ts";

export interface Props {
  label?: string;
  imageUrl?: string;
  caption?: string;
  location?: string;
}
function Intro({
  label = "Chico César",
  caption = "Quinta, 01 de junho - 10pm",
  location = "Palco Principal do Parque do Povo",
  imageUrl =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/925/2acbb06b-5e86-4588-ac8b-a76d282b60c7",
}: Props) {
  return (
    <div class="flex flex-col">
      <h1 class="text-center font-bold text-btn-label">Programação de Hoje</h1>
      <h2 class="text-center font-bold ">data</h2>
      {[1, 2, 3, 4].map((a) => <Card label={label} caption={caption} location={location} imageUrl={imageUrl} />)}
      <div class="flex flex-col gap-2 justify-center items-center mt-4">
        <a href="#lineUp">
          <button class="w-[250px] py-2 h-10 px-2 rounded-[15px] bg-purple-700 hover:bg-white text-white  hover:text-purple-700 border border-purple-700 hover:border-purple-700 transition duration-200 ease-in-out font-bold uppercase text-sm ">
            Programação completa
          </button>
        </a>
        <a href="#search">
          <button class="w-[250px] h-10 py-2 px-2 rounded-[15px] bg-blue-500 hover:bg-white text-white  hover:text-blue-500  border border-blue-500 hover:border-blue-500 transition duration-200 ease-in-out font-bold uppercase text-sm  ">
            Compartilhe que vai hoje
          </button>
        </a>
    </div>
    </div>
  );
}

export default Intro;

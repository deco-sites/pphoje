import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Card from "../components/ui/Card.tsx";
import { Programacao } from "../loaders/Programacao.ts";

export interface Props {
  prog?: Programacao[];
}

function Intro({ prog }: Props) {
  const today = prog &&
    prog.flatMap((item) => item.days.map((day) => day.referenceDate));
  return (
    <div class="flex flex-col">
      <h1 class="text-center font-bold text-btn-label">Programação de Hoje</h1>
      <h2 class="text-center font-bold ">{today}</h2>
      <Card prog={prog} />
      <div class="flex justify-center items-center mt-2">
        <a href="#lineUp">
          <button class="btn py-2 px-2 rounded-[5px]">
            Programação completa
          </button>
        </a>
        <a href="#search">
          <button class="btn ml-2 py-2 px-2 rounded-[5px]">
            LineUp
          </button>
        </a>
      </div>
    </div>
  );
}

export default Intro;

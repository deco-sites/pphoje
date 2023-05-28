import PlusBtn from "../components/ui/icons/PlusBtn.tsx";
import type { Programacao } from "../configssaojoao/Programacao.ts";
import { useState } from "preact/hooks";

export interface Props {
  programacao?: Programacao;
}

function formatarData(data: string) {
  const partes = data.split(/[-T.:Z]/);
  const mes = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ][parseInt(partes[1], 10)];
  return [partes[2], ` de ${mes} `, partes[3] + ":" + partes[4]];
}

function ProgramacaoCompleta({ programacao }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [selectedPerformer, setSelectedPerformer] = useState<any | undefined>(
    undefined
  );
  const [dialogShow, setDialogShow] = useState(false);
  const [busca, setBusca] = useState("");

  function openDialog(index: number) {
    const modal = document.querySelector("[data-modal-2]") as HTMLDialogElement;
    document.body.style.overflowY = "hidden";
    const buscado = programacao && programacao.days[0];
    setSelectedPerformer(buscado);
    setDialogShow(true);
    modal.showModal();
  }
  function closeDialog() {
    const modal = document.querySelector("[data-modal-2]") as HTMLDialogElement;
    setDialogShow(false);
    document.body.style.overflowY = "auto";
    modal.close();
  }
  function handleMouseOver(index: number) {
    setHoveredIndex(index);
  }

  function handleMouseOut() {
    setHoveredIndex(-1);
  }
  function handleChange(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    setBusca(inputElement.value);
  }

  return (
    <div id="search">
      <div class="flex flex-row justify-center">
        <span class="text-xl font-bold mt-4">Programação Completa</span>
      </div>

      <div class="flex flex-row justify-center">
        <input
          type="text"
          class="input input-bordered w-11/12"
          placeholder="Busque por artista ou dia"
        />
      </div>
      <div class="flex flex-row justify-center">
        <div
          class="flex w-11/12 flex-col overflow-scroll scroll-smooth mt-4 rounded-3xl border h-[500px]"
          style="box-shadow: inset 0 10px 10px -10px rgba(0, 0, 0, 0.5), inset 0 -10px 10px -10px rgba(0, 0, 0, 0.5);"
        >
          {[1, 2, 3, 4].map((a) => (
            <div>card</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgramacaoCompleta;

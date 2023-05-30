import type { Programacao } from "../loaders/Programacao.ts";
import Card from "../components/ui/Card.tsx";
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
   return (
    <div className="flex flex-col items-center">
      <span class="text-xl font-bold mt-4" id="search">
        Programação Completa
      </span>

      <input
        type="text"
        class="input input-bordered w-11/12"
        placeholder="Busque por artista ou dia"
      />
      <div
        class="flex w-11/12 p-2 flex-col overflow-scroll scroll-smooth mt-4 rounded-3xl border h-[500px]"
        style="box-shadow: inset 0 10px 10px -10px rgba(0, 0, 0, 0.5), inset 0 -10px 10px -10px rgba(0, 0, 0, 0.5);"
      >
        {[1, 2, 3, 4].map((a) => <Card />)}
      </div>
    </div>
  );
}

export default ProgramacaoCompleta;

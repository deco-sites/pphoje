import type { Programacao } from "../configssaojoao/Programacao.ts";
import ProgramacaoCompleta from "../islands/ProgramacaoCompleta.tsx";

export interface Props {
  programacao: Programacao;
}

function Festas({ programacao }: Props) {
  return <ProgramacaoCompleta programacao={programacao} />;
}

export default Festas;

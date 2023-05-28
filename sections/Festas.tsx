import type { Programacao } from "../configssaojoao/Programacao.ts"
import ProgramacaoCompleta from "../islands/ProgramacaoCompleta.tsx"


export interface Props {
  programacao: Programacao
}

function Festas({ programacao }: Props) {
  return (
    <div>
      <ProgramacaoCompleta programacao={programacao} />
    </div>
  );
}

export default Festas;

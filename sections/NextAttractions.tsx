import type { Programacao } from "../loaders/Programacao.ts";

export type { Programacao };

export interface Props {
  programacao: Programacao;
}

export default function NextAttractions({ programacao }: Props) {
  return <div>{JSON.stringify(programacao, null, 2)}</div>;
}

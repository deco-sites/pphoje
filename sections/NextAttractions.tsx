import type { Programacao }  from "../configssaojoao/Programacao.ts";

export interface Props {
  programacao: Programacao;
}

export default function NextAttractions({ programacao }: Props) {
  return <div>{JSON.stringify(programacao, null, 2)}</div>;
}

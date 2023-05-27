import { ConfigSaoJoao } from "../blocks/configsaojoao.ts";

export interface Programacao extends ConfigSaoJoao {
  days: Array<{
    label: string;
    venue:
      | "Parque do Povo"
      | "Vila Forró"
      | "Sitio São João"
      | "Salão do Artesanato";
    /** @format 'date' */
    referenceDate: string;
    attraction: Array<{
      label: string;
      // TODO: Figure out why isn't showing in the code
      /** @format 'date' */
      date?: string;
      description?: string;
      location?: string;
      latLocation?: {
        lat: number;
        lng: number;
      };
      lineupLinks: Array<string>;
    }>;
  }>;
}

function programacao(rel: Programacao): ConfigSaoJoao {
  return rel;
}

export default programacao;

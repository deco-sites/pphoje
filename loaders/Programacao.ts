import type { Artist } from "./Artist.ts";

export type { Artist };

export interface Programacao {
  days: Array<{
    label: string;
    venue:
      | "Parque do Povo"
      | "Vila Forró"
      | "Sitio São João"
      | "Salão do Artesanato";
    /** @description Teste */
    referenceDate: string;
    attraction: Array<{
      label: string;
      // TODO: Figure out why isn't showing in the code
      /**
       * @format date-time
       */
      date?: string;
      artist?: Artist;
      location?: string;
      latLocation?: {
        lat: number;
        lng: number;
      };
    }>;
  }>;
}

function loader(props: Pick<Programacao, "days">): Programacao {
  return props;
}

export default loader;

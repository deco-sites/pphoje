import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Programacao {
  days: Array<{
    label: string;
    venue:
      | "Parque do Povo"
      | "Vila Forró"
      | "Sitio São João"
      | "Salão do Artesanato";
    /** @format 'date-time' */
    referenceDate: string;
    attraction: Array<{
      label: string;
      // TODO: Figure out why isn't showing in the code
      /**
       * @format date-time
       */
      date?: string;
      description?: string;
      mobile?: LiveImage;
      desktop?: LiveImage;
      location?: string;
      latLocation?: {
        lat: number;
        lng: number;
      };
      lineupLinks: Array<string>;
    }>;
  }>;
}

function loader(props: Pick<Programacao, 'days'>): Programacao {
  return props;
}

export default loader;

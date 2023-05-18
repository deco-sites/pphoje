import type { LoaderContext } from "$live/types.ts";
import type { SectionProps } from "$live/mod.ts";
import Programacao from "../islands/Programacao.tsx";

export interface IDate {
  /**
   * @format date-time
   */
  dia: string;
}
export interface IParty {
  id?: string;
  name?: string;
  houses?: Array<IHouse>;
}

export interface IHouse {
  name?: string;
  days: Array<IDay>;
}

export interface IDay {
  date: IDate;
  artists?: Array<IArtist>;
}

export interface IArtist {
  name?: string;
  bio?: string;
  socialMedia?: Array<string>;
  showDateTime: IDate;
}

export interface Props {
  festas?: Array<IParty>;
}

function Festas({ festas }: Props) {
  return (
    <div>
      <Programacao festas={festas} />
    </div>
  );
}

export default Festas;

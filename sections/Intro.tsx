import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface IDate {
  /**
   * @format date-time
   */
  dia: string;
}
export interface Artist {
  mobile?: LiveImage;
  name: string;
  bio: string;
  date: IDate;
}
export interface Props {
  performers: Artist[];
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
function Intro({ performers }: Props) {
  {
    console.log("hora" + performers.map((x) => x.date));
  }
  return (
    <div>
      <h1 class="mt-4">Abertura do maior São João do Mundo</h1>
      <div class="mx-4">
        {performers.map((artist, index) => (
          <div class="flex items-center border-b-2 border-gray-400 border-solid py-2">
            <div>
              <img
                src={artist.mobile}
                alt=""
                width={60}
                height={60}
                class="rounded-full w-[62px] h-[62px] bg-red-card opacity-95"
              />
            </div>
            <div>
              <h2 class="ml-4">{artist.name}</h2>
            </div>
            <div class="ml-auto my-auto self-end">
              <h2 class="">{formatarData(artist.date.dia)[2]}</h2>
            </div>
          </div>
        ))}
      </div>
      <div class="flex justify-center items-center mt-2">
        <a href="#lineUp">
          <button class="bg-btn-default text-white py-2 px-2 rounded-[5px]">
            Programação completa
          </button>
        </a>
        <a href="#search">
          <button class="ml-2 bg-btn-default text-white py-2 px-2 rounded-[5px]">
            LineUp
          </button>
        </a>
      </div>
    </div>
  );
}

export default Intro;

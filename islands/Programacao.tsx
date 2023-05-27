import PlusBtn from "../components/ui/icons/PlusBtn.tsx";
import { useState } from "preact/hooks";

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

function Programacao({ festas }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [selectedPerformer, setSelectedPerformer] = useState<IDay | undefined>(
    undefined,
  );
  const [dialogShow, setDialogShow] = useState(false);
  const [busca, setBusca] = useState("");

  function openDialog(index: number) {
    const modal = document.querySelector("[data-modal-2]") as HTMLDialogElement;
    document.body.style.overflowY = "hidden";
    const buscado = festas && festas[0]?.houses?.[0]?.days?.[index];
    setSelectedPerformer(buscado);
    setDialogShow(true);
    modal.showModal();
  }
  function closeDialog() {
    const modal = document.querySelector("[data-modal-2]") as HTMLDialogElement;
    setDialogShow(false);
    document.body.style.overflowY = "auto";
    modal.close();
  }
  function handleMouseOver(index: number) {
    setHoveredIndex(index);
  }

  function handleMouseOut() {
    setHoveredIndex(-1);
  }
  function handleChange(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    setBusca(inputElement.value);
  }

  return (
    <div id="search">
      <h1>Programação Completa</h1>
      {festas && festas?.map((festa) => (
        <div key={festa.id} class="mt-2">
          {festa.houses?.map((house) => (
            <div key={house.name}>
              <div class="mb-2 flex items-center justify-center">
                <input
                  type="text"
                  placeholder="search by name"
                  onChange={handleChange}
                />
              </div>
              {house.days?.map((day, index) => {
                const filteredArtists = day.artists?.filter((artist) =>
                  artist.name &&
                  (artist.name.toLowerCase().includes(busca.toLowerCase()) ||
                    day.artists && day.artists.some((a) =>
                        a.name !== artist.name && a.name &&
                        a.name.toLowerCase().includes(busca.toLowerCase())
                      ))
                ) ?? [];
                if (filteredArtists?.length > 0) {
                  return (
                    <>
                      <div
                        key={day}
                        class="flex justify-between mb-4 h-[84px] mx-8 rounded-[10px] bg-gray-400 cursor-pointer"
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseOut={handleMouseOut}
                        onClick={() => openDialog(index)}
                      >
                        <div
                          class={`flex flex-col items-center justify-center w-[18%] border-r-2 border-gray-600 ${
                            hoveredIndex === index
                              ? "text-btn-white"
                              : "text-btn-default "
                          }`}
                        >
                          <h4 class="text-3xl font-bold">
                            {formatarData(day.date.dia)[0]}
                          </h4>
                          <h4>{formatarData(day.date.dia)[1]}</h4>
                        </div>
                        <div class="w-[58%] ">
                          {filteredArtists?.map((artist, index) => (
                            <ul class="flex items-start justify-start pt-2">
                              <li class={`${index > 1 ? "hidden" : ""}`}>
                                {index === 0 ? `${artist.name} e` : (
                                  index === 1
                                    ? (
                                      <li>
                                        {artist.name}
                                        <span class="ml-2">+</span>
                                      </li>
                                    )
                                    : null
                                )}
                              </li>
                            </ul>
                          ))}
                        </div>
                        <div
                          class={`flex justify-center items-center w-[12%] rounded-br-[10px] rounded-tr-[10px]  ${
                            hoveredIndex === index
                              ? "bg-btn-default"
                              : "bg-btn-default "
                          }`}
                        >
                          <h4>
                            <PlusBtn></PlusBtn>
                          </h4>
                        </div>
                      </div>
                      <dialog
                        data-modal-2
                        class="bg-gray-200 w-[300px] h-[300px]"
                      >
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            closeDialog();
                          }}
                        >
                          X
                        </button>
                        <div>
                          <h1>{selectedPerformer?.date.dia}</h1>
                          {selectedPerformer?.artists && selectedPerformer?.artists.map((x, index) => (
                            <div>
                              <h1>{x.name}</h1>
                              <h1>{x.bio}</h1>
                            </div>
                          ))}
                        </div>
                      </dialog>
                    </>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Programacao;

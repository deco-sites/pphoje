import { useState } from "preact/hooks";
import { Artist } from "../../sections/lineUp.tsx";

export interface Props {
    artists: Artist[];
    openModal: (index: number, type: string) => void;
}

export default function ArtistList({ artists, openModal }: Props) {
  const [selectedArtist, setSelectedArtist] = useState(-1);

  const handleClick = (index:number) => {
    setSelectedArtist(index);
    openModal(index, "best");
  };
  return (
    <>
      {artists.map((artist, index:number) => (
        <div
          class="cursor-pointer"
          onClick={() => handleClick(index)}
          key={index}
        >
          <div class="relative">
            <img
              src={artist?.mobile}
              alt=""
              class="bg-red-card opacity-95 md:mt-0"
            />
            <h2 class="absolute bottom-0 left-0 text-white font-extrabold text-sm">
              {artist?.name}1
            </h2>
          </div>
        </div>
      ))}
      {selectedArtist !== null && (
        <dialog data-modal class="bg-gray-200 w-[60%] h-[60%]">
          <button
            onClick={(event) => {
              event.stopPropagation();
              setSelectedArtist(-1);
            }}
          >
            Close modal
          </button>
          <div>
            <img
              src={artists[selectedArtist]?.mobile}
              alt=""
              class="w-32 h-32 rounded-full bg-red-card opacity-95"
            />

            <div>
              <button>01/06</button>
              <button>MPB</button>
            </div>
            <div>
              <h1>{artists[selectedArtist]?.name}</h1>
              <span>{artists[selectedArtist]?.bio}</span>
            </div>
            <button>Avise aos amigos que vai</button>
          </div>
        </dialog>
      )}
    </>
  );
}

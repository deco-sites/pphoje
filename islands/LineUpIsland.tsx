import { Artist } from "../sections/lineUp.tsx";
import { useState } from "preact/hooks";
import Modal from "../components/ui/Modal.tsx";
import IconCaretLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/caret-left.tsx";

export interface Props {
  performers: Artist[];
}

function LineUpIsland({ performers }: Props) {
  const [selectedPerformer, setSelectedPerformer] = useState<Artist | null>(
    null
  );

  const bestSingers = performers.slice(0, 3);
  const almostGood = performers
    .slice(3, 7)
    .filter((perfomer) => perfomer.desktop && perfomer.mobile);
  const otherSingers = performers
    .slice(7)
    .filter((performer) => performer.desktop && performer.mobile);
  const withoutImage = performers.filter(
    (performer) => !performer.desktop && !performer.mobile
  );
  return (
    <div class="md:max-w-[800px] md:mx-auto" id="lineUp">
      <Modal
        open={selectedPerformer !== null}
        mode="center"
        onClose={() => {
          setSelectedPerformer(null);
        }}
        data-modal
      >
        <button
          onClick={(event) => {
            event.stopPropagation();
            setSelectedPerformer(null);
          }}
        >
          <IconCaretLeft class="w-8 h-8" />
        </button>

        <div class="flex flex-col items-center">
          <div class="flex flex-row justify-center">
            <img
              src={selectedPerformer?.mobile}
              class="rounded-full w-36 h-36"
            />
          </div>

          <span class="font-bold text-3xl my-4">{selectedPerformer?.name}</span>
          <p class="text-xs mt-3 text-justify">{selectedPerformer?.bio}</p>
          <div class="flex flex-row justify-start w-full mt-4 font-bold">
            <span>Redes Sociais</span>
          </div>
          <div class="flex flex-row justify-start w-full mt-2">
            {selectedPerformer?.icons?.map((social) => (
              <div class="flex flex-col items-center justify-start group cursor-pointer">
                <img
                  src="https://i.imgur.com/hmvhDJ9.png"
                  width="65"
                  height="65"
                />
                <a
                  href={social.link}
                  class="p-0 m-0 text-xs group-hover:underline"
                >
                  {social.icon}
                </a>
              </div>
            ))}
          </div>
          <div class="flex flex-row justify-start w-full mt-4 font-bold">
            <span>Shows</span>
          </div>
        </div>
      </Modal>
      <div class="grid grid-cols-3">
        {bestSingers.map((artist, index) => (
          <ArtistCard
            artist={artist}
            onClick={() => setSelectedPerformer(artist)}
          />
        ))}
      </div>
      <div class="grid grid-cols-4">
        {almostGood.map((artist) => (
          <ArtistCard
            artist={artist}
            onClick={() => setSelectedPerformer(artist)}
          />
        ))}
      </div>
      <div class="grid grid-cols-5">
        {otherSingers.map((artist) => (
          <ArtistCard
            artist={artist}
            onClick={() => setSelectedPerformer(artist)}
          />
        ))}
      </div>
      <div>
        <div class="flex flex-col justify-center items-center">
          <div class="bg-btn-default flex justify-center items-center rounded-md mt-4">
            <p class="text-white font-bold text-[26px] mx-2">pp.hoje.com.br</p>
          </div>
          <p class="text-red-600 font-bold text-[26px]">e mais</p>
        </div>
        <div>
          <ul class="flex mx-2">
            {withoutImage.map((performer, index) => (
              <li key={index} class="text-[26px] pl-2 font-bold text-red-950">
                {performer.name}
                {index < withoutImage.length - 1 ? ", " : "."}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LineUpIsland;

export const ArtistCard = ({
  artist,
  onClick,
}: {
  artist: Artist;
  onClick(): void;
}) => (
  <div
    class="overflow-hidden bg-primary cursor-pointer relative"
    onClick={onClick}
  >
    <img
      src={artist.mobile}
      alt={artist.name}
      class="w-full h-full hover:opacity-80 transition-all duration-500 object-cover opacity-60"
    />
    <span class="absolute z-40 text-white bottom-0 p-1 text-xl font-bold">
      {artist.name}
    </span>
  </div>
);

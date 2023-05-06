import { Artist } from "../sections/lineUp.tsx";
import { useState } from "preact/hooks";

export interface Props {
  performers: Artist[];
}

function Modal({ performers }: Props) {
  const [selectedPerformer, setSelectedPerformer] = useState<Artist | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    document.body.style.overflowY = "hidden";
    console.log(index);
    const selectedPerformer = performers[index];
    setSelectedPerformer(selectedPerformer);
    console.log(selectedPerformer);
    setIsModalOpen(true);
  };

  function closeModal() {
    console.log("fechou");
    document.body.style.overflowY = "auto";
    setIsModalOpen(false);
  }

  const bestSingers = performers.slice(0, 3);
  const almostGood = performers.slice(3, 7).filter((perfomer) =>
    perfomer.desktop && perfomer.mobile
  );
  const otherSingers = performers.slice(7).filter((performer) =>
    performer.desktop && performer.mobile
  );
  const withoutImage = performers.filter((performer) =>
    !performer.desktop && !performer.mobile
  );

  return (
    <div>
      <div>
        <div>
        </div>
        {/* <span>melhores</span> */}
        <div class="grid grid-cols-3">
          {bestSingers.map((performer, index) => (
            <div
              key={index}
              class="cursor-pointer"
              onClick={() => {
                if (!isModalOpen) {
                  openModal(index);
                }
              }}
            >
              <div class="relative">
                <img
                  src={performer.mobile}
                  alt=""
                  class="w-full bg-red-custom opacity-95 mt-2"
                />
                <h2 class="absolute bottom-0 left-0 text-white font-extrabold text-4xl leading-10">
                  {performer.name}
                </h2>
              </div>
              {isModalOpen && (
                <div
                  class={`fixed top-0 bottom-1/2 left-0 w-[320px] h-[320px] flex justify-center items-center bg-white`}
                >
                  <div class="">
                    <h2>{selectedPerformer?.name}</h2>
                    <span>{selectedPerformer?.bio}</span>
                    <ul>
                      {performer.links &&
                        performer.links.map((social, index) => (
                          <li key={index}>{social}</li>
                        ))}
                    </ul>
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        closeModal();
                      }}
                    >
                      Close Modal
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        {/* <span>almost</span> */}
        <div class="grid grid-cols-4">
          {almostGood.map((performer, index) => (
            <div key={index} class="">
              <div class="relative">
                <img
                  src={performer.mobile}
                  alt=""
                  class="w-full h-auto bg-red-custom opacity-95"
                />
                <h2 class="absolute bottom-0 left-0 pb-4  text-white font-extrabold text-md leading-10">
                  {performer.name}
                </h2>
              </div>
              <div class="hidden">
                <h2>{performer.name}</h2>
                <span>{performer.bio}</span>
                <ul>
                  {performer.links &&
                    performer.links.map((social, index) => (
                      <li key={index}>{social}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {/* <span>normais</span> */}
        <div class="grid grid-cols-5">
          {otherSingers.map((performer, index) => (
            <div key={index} class="">
              <div class="relative">
                <img
                  src={performer.mobile}
                  alt=""
                  class="w-full bg-red-custom opacity-95"
                />
                <h2 class="absolute bottom-0 left-0 text-white font-extrabold text-sm leading-2">
                  {performer.name}
                </h2>
              </div>
              <div class="hidden">
                <h2>{performer.name}</h2>
                <span>{performer.bio}</span>
                <ul>
                  {performer.links &&
                    performer.links.map((social, index) => (
                      <li key={index}>{social} + 1</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {/* <span>normais</span> */}
        <div class="grid grid-cols-5">
          {otherSingers.map((performer, index) => (
            <div key={index} class="">
              <div class="relative">
                <img
                  src={performer.mobile}
                  alt=""
                  class="w-full bg-red-custom opacity-95"
                />
                <h2 class="absolute bottom-0 left-0 text-white font-extrabold text-sm leading-2">
                  {performer.name}
                </h2>
              </div>
              <div class="hidden">
                <h2>{performer.name}</h2>
                <span>{performer.bio}</span>
                <ul>
                  {performer.links &&
                    performer.links.map((social, index) => (
                      <li key={index}>{social} + 1</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <span>Artistas sem fotos :</span>
        <div>
          <ul>
            {withoutImage.map((performer, index) => (
              <li key={index}>{performer.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;

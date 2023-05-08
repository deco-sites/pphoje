import { Artist } from "../sections/lineUp.tsx";
import { useState } from "preact/hooks";
import Icon from "../components/ui/Icon.tsx";

export interface Props {
  performers: Artist[];
}

function Modal({ performers }: Props) {
  const [selectedPerformer, setSelectedPerformer] = useState<Artist | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number, arrayType: string) => {
    document.body.style.overflowY = "hidden";
    if (arrayType === "best") {
      const selectedPerformer = bestSingers[index];
      setSelectedPerformer(selectedPerformer);
    } else if (arrayType === "almost") {
      const selectedPerformer = almostGood[index];
      setSelectedPerformer(selectedPerformer);
    } else if (arrayType === "other") {
      const selectedPerformer = otherSingers[index];
      setSelectedPerformer(selectedPerformer);
    }
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
    <div class="">
      <div class="grid grid-cols-3">
        {bestSingers.map((performer, index) => (
          <div
            key={index}
            class="cursor-pointer"
            onClick={() => {
              if (!isModalOpen) {
                openModal(index, "best");
              }
            }}
          >
            <div class="relative">
              <img
                src={performer.mobile}
                alt=""
                class="bg-red-card opacity-95 mt-2"
              />
              <h2 class="absolute bottom-0 left-0 text-white font-extrabold text-4xl leading-10">
                {performer.name}
              </h2>
            </div>
            {isModalOpen && (
              <div
                class={`fixed top-1/3 left-10 w-[400px] h-[400px] bg-orange-400`}
              >
                <div class="">
                  <div>
                    <div>
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          closeModal();
                        }}
                      >
                        X
                      </button>
                    </div>
                    <div>
                      <img
                        src={selectedPerformer?.mobile}
                        alt=""
                        width={45}
                        height={45}
                      />
                    </div>
                    <div>
                      <div>
                        <span>{selectedPerformer?.name}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span>{selectedPerformer?.bio}</span>
                    </div>
                    <div>
                      <span>Estilo</span>
                      <span>MPB</span>
                    </div>
                    <div>
                      <span>Data</span>
                      <span>19/06- Sexta</span>
                    </div>
                  </div>
                  <div>
                    <img
                      src={selectedPerformer?.mobile}
                      alt=""
                      width={45}
                      height={45}
                    />
                    <button>
                      vou assistir...
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <div class="grid grid-cols-4">
          {almostGood.map((performer, index) => (
            <div
              key={index}
              class="cursor-pointer"
              onClick={() => {
                if (!isModalOpen) openModal(index, "almost");
              }}
            >
              <div class="relative">
                <img
                  src={performer.mobile}
                  alt=""
                  class="bg-red-card opacity-95"
                />
                <h2 class="absolute bottom-0 left-0 pb-4 font-extrabold text-sm text-black leading-10">
                  {performer.name}
                </h2>
              </div>
              {isModalOpen && (
                <div
                  class={`fixed top-1/3 left-10 w-[400px] h-[400px] bg-orange-400`}
                >
                  <div class="">
                    <div>
                      <div>
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            closeModal();
                          }}
                        >
                          X
                        </button>
                      </div>
                      <div>
                        <img
                          src={selectedPerformer?.mobile}
                          alt=""
                          width={45}
                          height={45}
                        />
                      </div>
                      <div>
                        <div>
                          <span>{selectedPerformer?.name}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span>{selectedPerformer?.bio}</span>
                      </div>
                      <div>
                        <span>Estilo</span>
                        <span>MPB</span>
                      </div>
                      <div>
                        <span>Data</span>
                        <span>19/06- Sexta</span>
                      </div>
                    </div>
                    <div>
                      <img
                        src={selectedPerformer?.mobile}
                        alt=""
                        width={45}
                        height={45}
                      />
                      <button>
                        vou assistir...
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div class="grid grid-cols-5">
          {otherSingers.map((performer, index) => (
            <div
              key={index}
              class="cursor-pointer"
              onClick={() => {
                if (!isModalOpen) openModal(index, "other");
              }}
            >
              <div class="relative">
                <img
                  src={performer.mobile}
                  alt=""
                  class="bg-red-card opacity-95"
                />
                <h2 class="absolute bottom-0 left-0 text-white font-extrabold text-sm leading-2">
                  {performer.name}
                </h2>
              </div>
              {isModalOpen && (
                <div
                  class={`fixed top-1/3 left-10 w-[400px] h-[400px] bg-orange-400`}
                >
                  <div class="">
                    <div>
                      <div>
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            closeModal();
                          }}
                        >
                          X
                        </button>
                      </div>
                      <div>
                        <img
                          src={selectedPerformer?.mobile}
                          alt=""
                          width={45}
                          height={45}
                        />
                      </div>
                      <div>
                        <div>
                          <span>{selectedPerformer?.name}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span>{selectedPerformer?.bio}</span>
                      </div>
                      <div>
                        <span>Estilo</span>
                        <span>MPB</span>
                      </div>
                      <div>
                        <span>Data</span>
                        <span>19/06- Sexta</span>
                      </div>
                    </div>
                    <div>
                      <img
                        src={selectedPerformer?.mobile}
                        alt=""
                        width={45}
                        height={45}
                      />
                      <button>
                        vou assistir...
                      </button>
                    </div>
                  </div>
                </div>
              )}
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

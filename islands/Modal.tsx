import { Artist } from "../sections/lineUp.tsx";
import { useState } from "preact/hooks";
import Icon from "../components/ui/Icon.tsx";
import { useEffect } from "https://esm.sh/preact@10.13.2/hooks";

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
  const teste = performers.slice(3, 7).filter((perfomer) =>
  perfomer.desktop && perfomer.mobile
  );
  const almostGood = performers.slice(3, 7).filter((perfomer) =>
    perfomer.desktop && perfomer.mobile
  );
  const otherSingers = performers.slice(7).filter((performer) =>
    performer.desktop && performer.mobile
  );
  const withoutImage = performers.filter((performer) =>
    !performer.desktop && !performer.mobile
  );

  useEffect(() => {
    console.log("chamei " + performers.length);
  }, []);

  return (
    <div class="md:max-w-[800px] md:mx-auto">
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
                class="bg-red-card opacity-95 mt-2 md:mt-0"
              />
              <h2 class="absolute bottom-0 left-0 text-white font-extrabold text-4xl leading-10">
                {performer.name}
              </h2>
            </div>
            {isModalOpen && (
              <div
                class={`fixed top-1/3 left-10 w-[400px] h-[460px] bg-modal-custom-bg rounded-md`}
              >
                <div class="flex flex-col text-modal-custom-text">
                  <div class="flex flex-col">
                    <div class="relative">
                      <button
                        class="absolute top-0 right-0 flex"
                        onClick={(event) => {
                          event.stopPropagation();
                          closeModal();
                        }}
                      >
                        <Icon
                          id="ChevronLeft"
                          size={12}
                          strokeWidth={2}
                          class="mt-1.5"
                        >
                        </Icon>{" "}
                        voltar ao lineup
                      </button>
                    </div>
                    <div class="mt-4 flex justify-around">
                      <img
                        src={selectedPerformer?.mobile}
                        alt=""
                        class="rounded-full w-28 h-28 bg-red-card opacity-95"
                      />
                      <div class="gap-4">
                        <div class="mt-2">
                          <span class="text-[28px]">
                            {selectedPerformer?.name}
                          </span>
                        </div>
                        <div>
                          <ul class="flex">
                            {selectedPerformer?.icons &&
                              selectedPerformer.icons.map((icon, index) => (
                                <li key={index}>
                                  <a href={icon.link} target="_blank">
                                    {icon.icon && (
                                      <Icon
                                        id={icon.icon}
                                        width={25}
                                        height={25}
                                        strokeWidth={1}
                                        fill={"#0c0d0e"}
                                      />
                                    )}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="border-b border-black border-solid mt-4">
                      <div class="mx-2">
                        <span class="text-[22px]">
                          {selectedPerformer?.bio}
                        </span>
                      </div>
                    </div>
                    <div class="border-b border-black border-solid mt-2">
                      <div class="mx-2 text-[22px] flex justify-between">
                        <span>Estilo</span>
                        <span>MPB</span>
                      </div>
                    </div>
                    <div class="flex justify-between border-b border-black border-solid mt-2">
                      <div class="mx-2 text-[22px] flex justify-between">
                        <span>Data</span>
                        <span>{" "}19/06</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 flex">
                    <img
                      src={selectedPerformer?.mobile}
                      alt=""
                      class="rounded-full w-28 h-28 bg-red-card opacity-95 ml-9"
                    />
                    <button class="pl-2">
                      Compartihe <br />
                      que você vai assistir {selectedPerformer?.name}
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
                <h2 class="absolute bottom-0 left-0 pb-4 font-extrabold text-sm text-white leading-10">
                  {performer.name}
                </h2>
              </div>
              {isModalOpen && (
                <div
                  class={`fixed top-1/3 left-10 w-[400px] h-[460px] bg-modal-custom-bg rounded-md`}
                >
                  <div class="flex flex-col text-modal-custom-text">
                    <div class="flex flex-col">
                      <div class="relative">
                        <button
                          class="absolute top-0 right-0 flex"
                          onClick={(event) => {
                            event.stopPropagation();
                            closeModal();
                          }}
                        >
                          <Icon
                            id="ChevronLeft"
                            size={12}
                            strokeWidth={2}
                            class="mt-1.5"
                          >
                          </Icon>{" "}
                          voltar ao lineup
                        </button>
                      </div>
                      <div class="mt-4 flex justify-around">
                        <img
                          src={selectedPerformer?.mobile}
                          alt=""
                          class="rounded-full w-28 h-28 bg-red-card opacity-95"
                        />
                        <div class="gap-4">
                          <div class="mt-2">
                            <span class="text-[28px]">
                              {selectedPerformer?.name}
                            </span>
                          </div>
                          <div>
                            <ul class="flex">
                              {selectedPerformer?.icons &&
                                selectedPerformer.icons.map((icon, index) => (
                                  <li key={index}>
                                    <a href={icon.link} target="_blank">
                                      {icon.icon && (
                                        <Icon
                                          id={icon.icon}
                                          width={25}
                                          height={25}
                                          strokeWidth={1}
                                          fill={"#0c0d0e"}
                                        />
                                      )}
                                    </a>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="">
                      <div class="border-b border-black border-solid mt-4">
                        <div class="mx-2">
                          <span class="text-[22px]">
                            {selectedPerformer?.bio}
                          </span>
                        </div>
                      </div>
                      <div class="border-b border-black border-solid mt-2">
                        <div class="mx-2 text-[22px] flex justify-between">
                          <span>Estilo</span>
                          <span>MPB</span>
                        </div>
                      </div>
                      <div class="flex justify-between border-b border-black border-solid mt-2">
                        <div class="mx-2 text-[22px] flex justify-between">
                          <span>Data</span>
                          <span>{" "}19/06</span>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 flex">
                      <img
                        src={selectedPerformer?.mobile}
                        alt=""
                        class="rounded-full w-28 h-28 bg-red-card opacity-95 ml-9"
                      />
                      <button class="pl-2">
                        Compartihe <br />
                        que você vai assistir {selectedPerformer?.name}
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
                  class={`fixed top-1/3 left-10 w-[400px] h-[460px] bg-modal-custom-bg rounded-md`}
                >
                  <div class="flex flex-col text-modal-custom-text">
                    <div class="flex flex-col">
                      <div class="relative">
                        <button
                          class="absolute top-0 right-0 flex"
                          onClick={(event) => {
                            event.stopPropagation();
                            closeModal();
                          }}
                        >
                          <Icon
                            id="ChevronLeft"
                            size={12}
                            strokeWidth={2}
                            class="mt-1.5"
                          >
                          </Icon>{" "}
                          voltar ao lineup
                        </button>
                      </div>
                      <div class="mt-4 flex justify-around">
                        <img
                          src={selectedPerformer?.mobile}
                          alt=""
                          class="rounded-full w-28 h-28 bg-red-card opacity-95"
                        />
                        <div class="gap-4">
                          <div class="mt-2">
                            <span class="text-[28px]">
                              {selectedPerformer?.name}
                            </span>
                          </div>
                          <div>
                            <ul class="flex">
                              {selectedPerformer?.icons &&
                                selectedPerformer.icons.map((icon, index) => (
                                  <li key={index}>
                                    <a href={icon.link} target="_blank">
                                      {icon.icon && (
                                        <Icon
                                          id={icon.icon}
                                          width={25}
                                          height={25}
                                          strokeWidth={1}
                                          fill={"#0c0d0e"}
                                        />
                                      )}
                                    </a>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="">
                      <div class="border-b border-black border-solid mt-4">
                        <div class="mx-2">
                          <span class="text-[22px]">
                            {selectedPerformer?.bio}
                          </span>
                        </div>
                      </div>
                      <div class="border-b border-black border-solid mt-2">
                        <div class="mx-2 text-[22px] flex justify-between">
                          <span>Estilo</span>
                          <span>MPB</span>
                        </div>
                      </div>
                      <div class="border-b border-black border-solid mt-2">
                        <div class="mx-2 text-[22px] flex justify-between">
                          <span>Data</span>
                          <span>{" "}19/06</span>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 flex">
                      <img
                        src={selectedPerformer?.mobile}
                        alt=""
                        class="rounded-full w-28 h-28 bg-red-card opacity-95 ml-9"
                      />
                      <button class="pl-2">
                        Compartihe <br />
                        que você vai assistir {selectedPerformer?.name}
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
        <div class="flex flex-col justify-center items-center">
          <div class="bg-red-700 flex justify-center items-center rounded-md mt-4">
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

export default Modal;

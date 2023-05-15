import { Artist } from "../sections/lineUp.tsx";
import { useState } from "preact/hooks";
import ArtistList from "../components/ui/ArtistList.tsx";

export interface Props {
  performers: Artist[];
}

function Modal({ performers }: Props) {
  const [selectedPerformer, setSelectedPerformer] = useState<Artist | null>(
    null,
  );
  const [dialogShow, setDialogShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
    
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

  const openDialog = (index: number, type: string) => {
    if (type === "best") {
      const selectedPerformer = bestSingers[index];
      setSelectedPerformer(selectedPerformer);
    } else if (type === "almost") {
      const selectedPerformer = almostGood[index];
      setSelectedPerformer(selectedPerformer);
    } else if (type === "other") {
      const selectedPerformer = otherSingers[index];
      setSelectedPerformer(selectedPerformer);
    }
    const modal = document.querySelector('[data-modal]') as HTMLDialogElement;
    if (modal) {
      setDialogShow(true);
      document.body.style.overflowY = "hidden";
      modal.showModal();
    }
  };
  const closeDialog = () => {
    const modal = document.querySelector('[data-modal]') as HTMLDialogElement;
    if (modal) {
      setDialogShow(false);
      modal.close();
      document.body.style.overflowY = "auto";
    }
  }
  return (
    <div class="md:max-w-[800px] md:mx-auto">
      <div class="grid grid-cols-3">
        {bestSingers.map((artist, index) =>(
          <div class="cursor-pointer" onClick={() => openDialog(index, "best")}>
            <div class="relative">
              <img 
                src={artist.mobile}
                alt=""
                class="bg-red-card opacity-95 mt-2 md:mt-0"
              />
              <h2 class="absolute bottom-0 left-0 text-white font-extrabold text-4xl leading-10">
                {artist.name}
              </h2>
              <dialog data-modal class="bg-gray-200 w-[60%] h-[60%]">
                  <button onClick={(event) =>{
                    event.stopPropagation();
                    closeDialog();
                  }}>Close modal</button>
                 <div>
                    <img src={selectedPerformer?.mobile} alt="" class="w-32 h-32 rounded-full bg-red-card opacity-95"/>
                    <ul>
                      {selectedPerformer?.icons && selectedPerformer?.icons.map((social, index) =>{
                        <li><a href={social.link}></a>{social.icon}</li>
                      })}
                    </ul>
                    <div>
                      <button>01/06</button>
                      <button>MPB</button>
                    </div>
                    <div>
                      <h1>{selectedPerformer?.name}</h1>
                      <span>{selectedPerformer?.bio}</span>
                    </div>
                    <button>Avise aos amigos que vai</button>
                 </div>
                </dialog>
            </div>      
          </div>     
        ))}
      </div>
      <div class="grid grid-cols-4">
            <ArtistList artists={almostGood} openModal={(index) => openDialog(index, "almost")}/>
      </div>
      <div class="grid grid-cols-5">
            <ArtistList artists={otherSingers} openModal={(index) => openDialog(index, "other")}/>
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

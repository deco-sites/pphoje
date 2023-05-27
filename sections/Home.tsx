import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Events {
  desktop?: LiveImage;
  mobile?: LiveImage;
  title?: string;
  text?: string;
  label?: string;
}
export interface Props {
  festas?: Events[];
}

function Home({ festas }: Props) {
  return (
    <div class="flex flex-col mt-4">
      <div class="mt-2 mx-2">
        {festas?.map((evento, index) => (
          <div class="flex flex-col gap-2">
            <h1 class="text-black text-[22px]">{evento.title}</h1>
            <img src={evento.mobile} class="max-w-[400px]"></img>
            <div class="text-justify">
              <span class="text-justify">{evento.text}</span>
            </div>
            <div class="">
              <button class="bg-btn-default text-white py-2 px-2 rounded-[5px]">
                {evento.label}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

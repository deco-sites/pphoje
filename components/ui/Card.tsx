import { Programacao } from "../../loaders/Programacao.ts";

export interface Props {
  label?: string;
  imageUrl?: string;
  caption?: string;
  location?: string;
  
}

function Card({
  label = "Chico César",
  caption = "Quinta, 01 de junho - 10pm",
  location = "Palco Principal do Parque do Povo",
  imageUrl =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/925/2acbb06b-5e86-4588-ac8b-a76d282b60c7",
}: Props) {


  return (
    <div
      class={`w-[410px] mx-auto p-2 mt-4 flex gap-2 cursor-pointer hover:bg-gray-50 transition duration-300 ease-in-out text-gray-800 font-bold py-2 px-4 border border-blue-600 rounded-md marker:shadow`}
      style="box-shadow: 0px 3px 5px rgba(156, 151, 151, 0.1), 0px -3px 5px rgba(141, 136, 136, 0.1)"
    >
      <div class="pl-2 pt-2">
        <img
          src={imageUrl}
          alt={label}
          width={60}
          height={60}
          class="rounded-full w-[62px] h-[62px]"
        />
      </div>
      <div class="flex flex-col pl-2">
        {/* colocar caption nesse primeiro */}
        <span class="text-card-date font-bold text-md">Quinta, 01 de junho - 10pm</span>
        <span class="text-card-name font-bold">{label}</span>
        <div class="flex items-center gap-0.5 font-bold">
          <span>
            <svg
              height="10"
              width="10"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                style="fill:#999999;"
                d="M87.084,192c-0.456-5.272-0.688-10.6-0.688-16C86.404,78.8,162.34,0,256.004,0s169.6,78.8,169.6,176
                            c0,5.392-0.232,10.728-0.688,16h0.688c0,96.184-169.6,320-169.6,320s-169.6-223.288-169.6-320H87.084z M256.004,224
                            c36.392,1.024,66.744-27.608,67.84-64c-1.096-36.392-31.448-65.024-67.84-64c-36.392-1.024-66.744,27.608-67.84,64
                            C189.26,196.392,219.612,225.024,256.004,224z"
              />
            </svg>
          </span>
          <span class="text-card-local">{location}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;

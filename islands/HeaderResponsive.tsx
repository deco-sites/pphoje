import { useEffect, useState } from "preact/hooks";


export interface Item {
    label: string;
    href: string;
  }
export interface Props {
    sections: Item[];
}

function HeaderResponsive({sections}: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }
    
    return (
        <header class="">
        <nav class="bg-red-800">
          <div class="flex flex-row-reverse justify-between items-center h-16 px-4">
            <div class="flex items-center">
                <h1 class="text-white">Logo PP hoje</h1>
            </div>
            <div class="md:hidden lg:block lg:mr-[60px] my-auto">
                <ul class="hidden md:flex flex-wrap mr-auto space-x-4 gap-6 box-border">
                {sections && sections.map((section)=>
                (
                  <li class="h-[63px] flex items-center justify-center pt-2">
                    <a href={section.href} class="text-custom-white text-[18px] hover:text-[#02F67C]">{section.label}</a>
                    
                  </li>
                ))}
                </ul>
            </div>
            <div class="block lg:hidden">
              {isModalOpen ? (
                 <svg width="45" height="45" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleModal} class="cursor-pointer">
                  <rect width="48" height="48" fill="none" fill-opacity="0.01"/>
                  <path d="M14 14L34 34" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14 34L34 14" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" onClick={toggleModal}>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </div>
          </div>
        </nav>
        {isModalOpen && (
          <div class="fixed w-full bg-gray-800 bg-opacity-1 z-50 h-full">
            <div class="flex flex-col gap-[180px]">
              <div>
                  <ul class="flex flex-col list-none space-y-4">
                  {sections && sections.map((section)=>
                  (
                    <li class="inline-block">
                      <a href={section.href} class="text-[#fff] text-sm pl-4 font-thin hover:text-[#02F67C]">{section.label}</a>
                      <div class="w-full h-[1px] bg-[#c0c0c0a4]"></div>
                    </li>
                  ))}
                  </ul>
              </div>
              <div class="mx-auto">
                <ul class="flex">
                  <li>conteudo dentro do modal </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>
    )
}

export default HeaderResponsive
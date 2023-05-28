

function Card() {
  return (
    <div class="shadow-[0_16px_15px_-4px_rgba(0,0,0,0.3) mx-auto mt-20 flex w-3/4 gap-2 rounded-md">
  <div class="w-[60px] overflow-hidden rounded-full">
    <img src="https://noticiasdatv.uol.com.br/media/_versions/artigos_2021/juliette-sai-da-frente-instagram_fixed_large.jpg" alt="" class="h-full w-full" />
  </div>
  <div class="flex flex-col pl-2">
    <span class="text-red-200">Quinta, 01 de julho •10 PM</span>
    <span>Juliette</span>
    <div class="flex items-center gap-0.5">
      <span
        ><svg height="10" width="10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            style="fill:#999999;"
            d="M87.084,192c-0.456-5.272-0.688-10.6-0.688-16C86.404,78.8,162.34,0,256.004,0s169.6,78.8,169.6,176
      c0,5.392-0.232,10.728-0.688,16h0.688c0,96.184-169.6,320-169.6,320s-169.6-223.288-169.6-320H87.084z M256.004,224
      c36.392,1.024,66.744-27.608,67.84-64c-1.096-36.392-31.448-65.024-67.84-64c-36.392-1.024-66.744,27.608-67.84,64
      C189.26,196.392,219.612,225.024,256.004,224z"
          /></svg
      ></span>
      <span>Palco Principal do Parque do Povo</span>
    </div>
  </div>
</div>
  )
}

export default Card
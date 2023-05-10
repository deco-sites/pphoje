export interface IDate {
    /**
     * @format date-time
     */
    dia: string;
}
export interface IParty {
    id?: string;
    name?: string;
    houses?: Array<IHouse>;
}
  
export interface IHouse {
    name?: string;
    days?: Array<IDay>;
}
  
export interface IDay {
    date: IDate;
    artists?: Array<IArtist>;
}
  
export interface IArtist {
    name?: string;
    bio?: string;
    socialMedia?: Array<string>;
    showDateTime: IDate;
}
  export interface Props{
    festas?: IParty[]
  }
function formatarData(data: string){
  const partes = data.split(/[-T.:Z]/);
  const mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'][parseInt(partes[1], 10) - 1];
  return [partes[2], ` de ${mes} `, partes[3] + ':' + partes[4]];
}


  function Programacao({ festas}:Props) {
    return (
      <div>
        <h1>Seja bem vindo</h1>
        <h2 class="">teste de PR</h2>
        {festas && festas?.map((festa) => (
          <div key={festa.id}>
            <h2>{festa.name}</h2>
            {festa.houses?.map((house) => (
              <div key={house.name}>
                <h3>{house.name}*</h3>
                {house.days?.map((day) => (
                  <div key={day} class="flex w-full bg-yellow-300 mb-4 h-[84px]">
                    <div class="flex flex-col items-center justify-center w-[20%]">
                        <h4>{formatarData(day.date.dia)[0]}</h4>
                        <h4>{formatarData(day.date.dia)[1]}</h4>
                    </div>
                    <div class="w-[60%]">
                    {day.artists?.map((artist) => (
                        <ul class="flex flex-row bg-red-300">
                            <li class="flex flex-row">{artist.name} </li>
                        </ul>                   
                    ))}
                    </div>
                    <div class="flex justify-center items-cente w-[20%]">
                        <button>+</button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  
  export default Programacao
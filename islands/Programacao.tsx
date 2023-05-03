interface CasaDeFesta {
    [dia: string]: {
      [cantor: string]: {
        nome: string;
        bio: string;
        hora_do_show: Date;
      };
    };
  }
  
  const festas: {
    [nome_casa: string]: CasaDeFesta;
  } = {
    pp: {
      dia1: {
        cantor1: { nome: "Nome Cantor 1", bio: "Bio Cantor 1", hora_do_show: new Date() },
        cantor2: { nome: "Nome Cantor 2", bio: "Bio Cantor 2", hora_do_show: new Date() },
        cantor3: { nome: "Nome Cantor 3", bio: "Bio Cantor 3", hora_do_show: new Date() },
      },
      dia2: {
        cantor1: { nome: "Nome Cantor 1", bio: "Bio Cantor 1", hora_do_show: new Date() },
        cantor2: { nome: "Nome Cantor 2", bio: "Bio Cantor 2", hora_do_show: new Date() },
        cantor3: { nome: "Nome Cantor 3", bio: "Bio Cantor 3", hora_do_show: new Date() },
      },
    },
    sitioSJ: {
      dia1: {
        cantor1: { nome: "Nome Cantor 1", bio: "Bio Cantor 1", hora_do_show: new Date() },
        cantor2: { nome: "Nome Cantor 2", bio: "Bio Cantor 2", hora_do_show: new Date() },
        cantor3: { nome: "Nome Cantor 3", bio: "Bio Cantor 3", hora_do_show: new Date() },
      },
      dia2: {
        cantor1: { nome: "Nome Cantor 1", bio: "Bio Cantor 1", hora_do_show: new Date() },
        cantor2: { nome: "Nome Cantor 2", bio: "Bio Cantor 2", hora_do_show: new Date() },
        cantor3: { nome: "Nome Cantor 3", bio: "Bio Cantor 3", hora_do_show: new Date() },
      },
    },
};

function Programacao() {
    
    const festa1 = festas.pp;
  return (
    <div>
    <h2 class="text-center text-[22px] text-blue">Parque do Povo</h2>
    {Object.keys(festa1).map((dia) => (
      <div key={dia}>
        <h3>Dia {dia}</h3>
        {Object.keys(festa1[dia]).map((cantor) => (
          <div key={cantor}>
            <h4>{cantor}</h4>
            <p>Nome: {festa1[dia][cantor].nome}</p>
            <p>Bio: {festa1[dia][cantor].bio}</p>
            <p>Hora do show: {festa1[dia][cantor].hora_do_show.toString()}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
  )
}

export default Programacao
import { useState } from "preact/hooks";
import { useEffect } from "preact/hooks";

function CountR() {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const targetDate = new Date("June 1, 2023 13:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    setTimeLeft(difference);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <div class="flex flex-col items-center">
      <div class="text-center">
        {timeLeft > 0
          ? (
            <h2>
              Tempo restante: {days} dias, {hours} horas, {minutes} minutos,
              {" "}
              {seconds} segundos
            </h2>
          )
          : <h2>Contagem regressiva finalizada!</h2>}
      </div>
      <div class="text-center">
        <h1 class="text-[35px]">Abertura do São João</h1>
        <ul class="w-[400px] flex flex-col gap-2">
          <li class="flex items-center justify-center bg-black-400">
            <img
              src="https://www.segueviagem.com.br/wp-content/uploads/2019/06/Parque-do-Povo-Campina-Grande-Cr%C3%A9dito-Emanuel-Tadeu.jpg"
              alt="teste"
              width={45}
              height={45}
            />
            <p>Geraldo Azevedo</p>
            <strong>21:00</strong>
          </li>
          <li class="flex items-center justify-center">
            <img
              src="https://www.segueviagem.com.br/wp-content/uploads/2019/06/Parque-do-Povo-Campina-Grande-Cr%C3%A9dito-Emanuel-Tadeu.jpg"
              alt="teste"
              width={45}
              height={45}
            />
            <p>Geraldo Azevedo</p>
            <strong>22:30</strong>
          </li>
          <li class="flex items-center justify-center">
            <img
              src="https://www.segueviagem.com.br/wp-content/uploads/2019/06/Parque-do-Povo-Campina-Grande-Cr%C3%A9dito-Emanuel-Tadeu.jpg"
              alt="teste"
              width={45}
              height={45}
            />
            <p>Geraldo Azevedo</p>
            <strong>22:30</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CountR;

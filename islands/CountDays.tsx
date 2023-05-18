import { useState } from "preact/hooks";
import { useEffect } from "preact/hooks";

function CountDays() {
  const [days, setDays] = useState<number>(0);
  const targetDate: Date = new Date(2023, 5, 1);

  const updateDaysRemaining = () => {
    const now: Date = new Date();
    const difference: number = targetDate.getTime() - now.getTime();
    let diasFaltantes: number;
    if (difference < 86400000) {
      diasFaltantes = 0;
    } else {
      diasFaltantes = Math.floor(difference / (1000 * 60 * 60 * 24));
    }
    setDays(diasFaltantes);
  };

  useEffect(() => {
    updateDaysRemaining();
    const interval = setInterval(() => {
      updateDaysRemaining();
    }, 3600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div class="bg-orange-400 h-[200px] flex flex-col items-center justify-center">
      <div>
        <h1 class="text-center text-[36px]">
          Logotipo + Frase de efeito
        </h1>
      </div>
      <div class="flex items-center justify-center">
        {days > 0
          ? (
            <div class="flex flex-col items-center justify-center">
              <h2>Faltam</h2>
              <h2 class="text-[26px]">{days}</h2>
              <h2>dias</h2>
            </div>
          )
          : null}
      </div>
    </div>
  );
}

export default CountDays;

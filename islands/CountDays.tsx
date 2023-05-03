import { useState } from "preact/hooks";
import { useEffect } from "preact/hooks";

function CountDays() {
  const [days, setDays] = useState<number>(0);
  const targetDate: Date = new Date(2023, 5, 1);

  const updateDaysRemaining = () => {
    const now: Date = new Date();
    console.log("hoje: " + now);
    const difference: number = targetDate.getTime() - now.getTime();
    console.log(difference);
    let diasFaltantes: number;
    if (difference < 86400000) {
      diasFaltantes = 0;
      console.log("hoje tem");
    } else {
      diasFaltantes = Math.floor(difference / (1000 * 60 * 60 * 24));
    }
    console.log("dias faltantes: " + diasFaltantes);
    console.log(diasFaltantes);
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
    <div>
      <div>
        <h1 class="text-center text-[36px]">
          O app do Maior São João do Mundo em Campina Grande - PB
        </h1>
      </div>
      <div>
        {days > 0
          ? (
            <h2 class="text-purple-300 text-center text-[36px]">
              faltam {days} dias
            </h2>
          )
          : <h3>Hoje Tem</h3>}
      </div>
    </div>
  );
}

export default CountDays;

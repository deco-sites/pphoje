import Icon from "../components/ui/Icon.tsx";

import { useEffect, useState } from "preact/hooks";
import ArrowUp from "../components/ui/icons/ArrowUp.tsx";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const height = window.scrollY;
      if (height > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    if (typeof window !== "undefined") {
      document.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        document.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {show && (
        <button
          class="flex items-center justify-center px-2 py-2 fixed bottom-[20px] right-[5px] border-none bg-green-400"
          style={{
            zIndex: 99,
            outline: "none",
            borderRadius: "4px",
          }}
          onClick={handleBackToTop}
        >
          <span class="pl-1">
            <ArrowUp />
          </span>
        </button>
      )}
    </div>
  );
};

export default BackToTop;

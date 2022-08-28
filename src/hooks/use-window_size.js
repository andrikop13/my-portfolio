import { useEffect, useState } from "react";
import { responsive } from "@config";

const useWindowSize = (upperBound) => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth / responsive.baseDivider;
      setIsMobile(w < upperBound);
    };

    const width = window.innerWidth / responsive.baseDivider;
    setIsMobile(width < upperBound);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [upperBound]);

  return { isMobile };
};

export default useWindowSize;

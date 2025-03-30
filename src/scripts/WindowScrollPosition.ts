import { useEffect, useState } from "react";

export const useWindowScrollPositions = () => {
  const [scrollPercent, setScrollPercent] = useState({ scrollY: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY_pos = Math.floor(document.body.scrollTop);
      const maxY = Math.floor(
        document.body.scrollHeight - document.body.clientHeight
      );

      const scrollPerc = scrollY_pos / maxY;

      setScrollPercent({ scrollY: scrollPerc });
    };

    document.body.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.body.removeEventListener("scroll", handleScroll); // Clean up on unmount
    };
  }, []);

  return scrollPercent;
};

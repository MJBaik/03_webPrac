import React, { useEffect, useState } from "react";
import { Section5 } from "../../styles/MainLong/Page";
import Ocean from "../../assets/images/ocean.jfif";

type Props = {
  setSectionNow: React.Dispatch<React.SetStateAction<number>>;
  sectionNow: number;
};

function MovingText({ setSectionNow, sectionNow }: Props) {
  const [scrolled, setScrolled] = useState(0);

  const scrollHandler = () => {
    // 해당 섹션 내에서 스크롤된 비율 구하여 할당
    if (sectionNow != 3) return;
    if (window.scrollY <= window.innerHeight * 7 - 100) {
      setSectionNow((prev) => 2);
    }
    setScrolled(
      (prev) =>
        (window.scrollY - window.innerHeight * 7) / (window.innerHeight * 5)
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [sectionNow]);

  return (
    <Section5 className={sectionNow == 3 ? "active" : undefined}>
      <div
        className="text LtoR"
        style={{
          left: `calc(-150% + ${Math.round(scrolled * 350)}%)`,
        }}
      >
        From Left To Right
      </div>
      <div
        className="text RtoL"
        style={{
          right: `calc(-150% + ${Math.round(scrolled * 350)}%)`,
        }}
      >
        From Right To Left
      </div>
      <img
        src={Ocean}
        className="movingImg"
        style={{ opacity: scrolled * 3 }}
      />
    </Section5>
  );
}

export default MovingText;

import React, { useEffect, useState } from "react";
import { Section5 } from "../../styles/MainLong/Page";

type Props = {
  setSectionNow: React.Dispatch<React.SetStateAction<number>>;
  sectionNow: number;
};

function FixedCircle({ setSectionNow, sectionNow }: Props) {
  const [scrolled, setScrolled] = useState(0);
  const scrollHandler = () => {
    // 해당 섹션 내에서 스크롤된 비율 구하여 할당
    if (sectionNow != 2) return;
    if (window.scrollY <= window.innerHeight * 2 - 200) {
      setSectionNow((prev) => 1);
    } else if (window.scrollY >= window.innerHeight * 7 - 100) {
      setSectionNow((prev) => 3);
    }
    setScrolled(
      (prev) =>
        (window.scrollY - window.innerHeight * 2) / (window.innerHeight * 5)
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [sectionNow]);

  return (
    <Section5
      style={{ justifyContent: "flex-start" }}
      className={sectionNow == 2 ? "active" : undefined}
    >
      {[...Array(21)].map((each, idx) => {
        return <div key={idx}>Hello</div>;
      })}
      <div className="circle" style={{ opacity: 4 - scrolled * 5 }}></div>
    </Section5>
  );
}

export default FixedCircle;

import React, { useEffect, useRef, useState } from "react";
import MainMP4 from "../assets/images/main.mp4";
import { Header } from "../styles/MainLong/Page";
import WordColor from "../components/MainLong/WordColor";
import FixedCircle from "../components/MainLong/FixedCircle";
import MovingText from "../components/MainLong/MovingText";

function MainLong() {
  const [sectionNow, setSectionNow] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  const wheelHandler = (e: Event) => {
    if (!headerRef.current) return;
    if (sectionNow != 0) return;
    if (window.scrollY < window.innerHeight * 0.4) {
      setSectionNow((prev) => 0);
    } else {
      setSectionNow((prev) => 1);
    }
  };

  useEffect(() => {
    addEventListener("scroll", wheelHandler);
    return () => removeEventListener("scroll", wheelHandler);
  }, [sectionNow]);

  return (
    <>
      <Header ref={headerRef}>
        <div className="title">Title</div>
        <video src={MainMP4} autoPlay loop muted />
      </Header>
      <WordColor setSectionNow={setSectionNow} sectionNow={sectionNow} />
      <FixedCircle setSectionNow={setSectionNow} sectionNow={sectionNow} />
      <MovingText setSectionNow={setSectionNow} sectionNow={sectionNow} />
    </>
  );
}

export default MainLong;

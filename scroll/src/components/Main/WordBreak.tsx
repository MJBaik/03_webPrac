import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "../../styles/common/global";
import { LetterBox } from "../../styles/Main/WordBreak";

type Props = {
  setIsS1End: React.Dispatch<React.SetStateAction<boolean>>;
};

function WordBreak({ setIsS1End }: Props) {
  const wordRef = useRef<HTMLDivElement>(null);
  const [arr, setArr] = useState(
    "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세".split(
      ""
    )
  );
  const now = useRef(0);

  const wheelHandler = (e: WheelEvent) => {
    if (!wordRef.current) return;

    if (e.deltaY > 0) {
      e.preventDefault();
      wordRef.current.children[now.current].classList.add("read");
      wordRef.current.children[now.current + 1].classList.add("read");
      wordRef.current.children[now.current + 2].classList.add("read");
      now.current += 3;
    }

    if (now.current >= arr.length - 1) {
      console.log("끝");
      setIsS1End(true);
      window.removeEventListener("wheel", wheelHandler);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", wheelHandler, { passive: false });

    return () => window.removeEventListener("wheel", wheelHandler);
  }, []);

  return (
    <Wrapper>
      <h1>애국가</h1>
      <LetterBox ref={wordRef}>
        {arr.map((each, idx) => {
          return <span key={idx}>{each}</span>;
        })}
      </LetterBox>
    </Wrapper>
  );
}

export default WordBreak;

import React, { useEffect, useState } from "react";
import Header from "../components/Main/Header";
import { Wrapper } from "../../styles/main";

interface clickInterface {
  id: number;
  x: number;
  y: number;
  letter: string;
}

function Main() {
  const [click, setClick] = useState<clickInterface[]>([]);
  const [id, setId] = useState(0);
  const buttonEffect =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん".split(
      ""
    );

  const clickHandler = (e: MouseEvent) => {
    setClick((prev) => [
      ...prev,
      {
        id: id,
        x: e.clientX,
        y: e.clientY,
        letter:
          buttonEffect[Math.floor(Math.random() * (buttonEffect.length - 1))],
      },
    ]);
    setTimeout(() => {
      setClick((prev) => prev.filter((each) => each.id != id));
    }, 2000);

    setId((prev) => prev + 1);
  };

  useEffect(() => {
    window.addEventListener("mousedown", clickHandler);

    return () => window.removeEventListener("mousedown", clickHandler);
  }, [click]);

  return (
    <Wrapper>
      {click.map((each, idx) => (
        <div
          key={idx}
          className={"clickEffect"}
          style={{ top: each.y, left: each.x }}
        >
          {each.letter}
        </div>
      ))}
      <Header />
    </Wrapper>
  );
}

export default Main;

import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Intro/Header";
import Introduction from "../components/Intro/Introduction";
import { Nav, Outer } from "../styles/Intro/intro";
import { useTheme } from "styled-components";
import Additional from "../components/Intro/Additional";

interface clickInterface {
  id: number;
  x: number;
  y: number;
  letter: string;
}

function Intro() {
  const [click, setClick] = useState<clickInterface[]>([]);
  const [id, setId] = useState(0);
  const [section, setSection] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);

  const buttonEffect =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん".split(
      ""
    );

  const clickHandler = (e: MouseEvent) => {
    setClick((prev) => [
      ...prev,
      {
        id: id,
        x: e.clientX - 40,
        y: e.clientY - 70,
        letter:
          buttonEffect[Math.floor(Math.random() * (buttonEffect.length - 1))],
      },
    ]);
    setTimeout(() => {
      if (!outerRef.current) return;
      outerRef.current.removeChild(outerRef.current.children[1]);
    }, 2000);
    setId((prev) => prev + 1);
  };

  const scrollHandler = () => {
    if (window.scrollY < window.innerHeight * 0.8) {
      setSection(0);
    } else if (window.scrollY > window.innerHeight * 0.8) {
      setSection(1);
    } else if (
      window.scrollY >
      window.innerHeight * 5 - window.innerHeight * 0.2
    ) {
      setSection(2);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [section]);

  useEffect(() => {
    window.addEventListener("mousedown", clickHandler);
    return () => window.removeEventListener("mousedown", clickHandler);
  }, [click]);

  return (
    <Outer ref={outerRef}>
      <Nav>
        <div className="appName">TokiDoki</div>
        <div style={{ display: "flex" }}>
          <button className="login">로그인</button>
          <button className="login">회원가입</button>
        </div>
      </Nav>
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
      <Introduction isActive={section == 1 ? true : false} />
      <Additional isActive={section == 2 ? true : false} />
    </Outer>
  );
}

export default Intro;

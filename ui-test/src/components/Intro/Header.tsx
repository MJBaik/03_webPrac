import React, { useEffect, useRef, useState } from "react";
import { Character, HeaderBox, Wrapper } from "../../styles/Intro/intro";

function Header() {
  const leftEye = useRef<HTMLDivElement>(null);
  const rightEye = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState({ x: 18, y: 0 });
  const [right, setRight] = useState({ x: 18, y: 0 });

  const mouseHandler = (e: MouseEvent) => {
    if (!leftEye.current || !rightEye.current) return;
    const leftx = leftEye.current.getBoundingClientRect().left;
    const rightx = rightEye.current.getBoundingClientRect().left;
    const lefty = leftEye.current.getBoundingClientRect().top;
    const righty = rightEye.current.getBoundingClientRect().top;

    let lx: number;
    let ly: number;
    let rx: number;
    let ry: number;

    if (e.clientX - leftx < 0) {
      lx = -5;
    } else if (e.clientX - (leftx + 80) > 0) {
      lx = 40;
    } else {
      lx = ((e.clientX - leftx) / 80) * 35;
    }

    if (e.clientY - lefty < 0) {
      ly = -(5 / 18) * (18 - Math.abs(18 - lx));
    } else if (e.clientY - (lefty + 80) > 0) {
      ly = 40;
    } else {
      ly = ((e.clientY - lefty) / 80) * 35;
    }

    if (e.clientX - rightx < 0) {
      rx = -5;
    } else if (e.clientX - (rightx + 80) > 0) {
      rx = 40;
    } else {
      rx = ((e.clientX - rightx) / 80) * 35;
    }

    if (e.clientY - righty < 0) {
      ry = -(5 / 18) * (18 - Math.abs(18 - lx));
    } else if (e.clientY - (righty + 80) > 0) {
      ry = 40;
    } else {
      ry = ((e.clientY - righty) / 80) * 35;
    }

    setLeft({ x: lx, y: ly });
    setRight({ x: rx, y: ry });
  };

  useEffect(() => {
    if (window.innerWidth > 500)
      window.addEventListener("mousemove", mouseHandler);
    return () => window.removeEventListener("mousemove", mouseHandler);
  }, [left]);

  return (
    <Wrapper>
      <Character>
        <div className="inner">
          <div className="eye left">
            <div className="eyeball" ref={leftEye}>
              <div
                className="ball"
                style={{ left: `${left.x}%`, top: `${left.y}%` }}
              ></div>
            </div>
          </div>
          <div className="eye right">
            <div className="eyeball" ref={rightEye}>
              <div
                className="ball"
                style={{ left: `${right.x}%`, top: `${right.y}%` }}
              ></div>
            </div>
            <div className="mouth"></div>
          </div>
          <div className="body"></div>
        </div>
      </Character>
      <HeaderBox>
        <div className="coma">
          <div className="text">
            <div className="kr">
              야! 너두
              <br />
              <span className="jp">일본어</span>로
              <br />말 할 수 있어
            </div>
          </div>
        </div>
        <div className="coma2"></div>
      </HeaderBox>
    </Wrapper>
  );
}

export default Header;

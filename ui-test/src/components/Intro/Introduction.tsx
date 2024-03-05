import React, { useState, useEffect } from "react";
import { Section1 } from "../../styles/Intro/section";
import CardItem from "./CardItem";

type Props = {
  isActive: boolean;
};

function Introduction({ isActive }: Props) {
  const [comment, setComment] = useState("");
  const [comaTop, setComaTop] = useState(30);

  useEffect(() => {
    setComaTop(30);
  }, [comment]);

  return (
    <Section1 className={isActive ? "active" : undefined}>
      <div className="coma" style={{ top: `${comaTop}vh` }}>
        {comment}
      </div>
      <div className={isActive ? "character fixed" : "character"}>
        <div>
          <div className="eye left">
            <div>
              <div
                className="eyeball"
                style={{ left: "40%", top: "10%" }}
              ></div>
            </div>
          </div>
          <div className="eye right">
            <div>
              <div className="eyeball" style={{ left: "25%", top: "5%" }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="title">서비스 소개</div>
      <CardItem
        title="오늘의 뉴스"
        rot={3}
        setComment={setComment}
        setComaTop={setComaTop}
        comment="오늘의 뉴스를 일본어로 읽어볼까?"
      />
      <CardItem
        title="일상 회화"
        rot={-5}
        setComment={setComment}
        setComaTop={setComaTop}
        comment="AI와 대화를 나누고 분석을 받아볼까?"
      />
      <CardItem
        title="단어 퀴즈"
        rot={2}
        setComment={setComment}
        setComaTop={setComaTop}
        comment="단어 퀴즈를 맞추고 나만의 단어장을 만들어볼까?"
      />
      <CardItem
        title="도전 과제"
        rot={6}
        setComment={setComment}
        setComaTop={setComaTop}
        comment="매일매일 도전과제를 달성해볼까? "
      />
    </Section1>
  );
}

export default Introduction;

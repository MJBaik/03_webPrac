import React from "react";
import { GridCalendar } from "../../styles/Intro/Grid";

function IntroContent() {
  // 캘린더 채우기용 랜덤글자
  const words =
    "Lorem ipsum dolor sit amet consectetur Calendar Todo. App tenetur voluptate aliquam voluptates corporis rem quidem consequuntur obcaecati sit explicabo rem eos minima, quod repudiandae atque libero, quas distinctio magni nam.".split(
      " "
    );

  // 각 칸 랜덤 스타일 객체
  const styles = {
    fontSize: ["18pt", "32pt", "28pt", "24pt"],
    fontFamliy: [
      "LOTTERIADDAG",
      "SUITE-Regular",
      "TTTtangsbudaejjigaeB",
      "SokchoBadaBatang",
    ],
  };

  return (
    <GridCalendar>
      {/* 캘린더 그리드 */}
      {[...Array(window.innerWidth <= 600 ? 36 : 35)].map((each, idx) => (
        <div className="item" key={idx}>
          <div className="date">
            {idx - 1 > 0 && idx - 1 < 32 ? `${idx - 1}` : null}
          </div>
          <div
            className="word"
            style={{
              fontSize: styles.fontSize[Math.floor(Math.random() * 4)],
              fontFamily: styles.fontFamliy[Math.floor(Math.random() * 4)],
            }}
          >
            {words[idx - 2]}
          </div>
        </div>
      ))}
    </GridCalendar>
  );
}

export default IntroContent;

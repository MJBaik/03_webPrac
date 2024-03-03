import React from "react";
import { GridCalendar } from "../../styles/Intro/Grid";
import { useTheme } from "styled-components";

type Props = {};

function IntroContent({}: Props) {
  const theme = useTheme();
  const words =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tenetur voluptate aliquam voluptates corporis rem quidem consequuntur obcaecati sit explicabo rem eos minima, quod repudiandae atque libero, quas distinctio magni nam.".split(
      " "
    );

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

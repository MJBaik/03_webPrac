import React from "react";
import { Footer, Section2 } from "../../styles/Intro/section";

type Props = { isActive: boolean };

function Additional({ isActive }: Props) {
  return (
    <Section2>
      <div className={isActive ? "title active" : "title"}>제목</div>
    </Section2>
  );
}

export default Additional;

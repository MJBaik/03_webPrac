import React, { useEffect, useRef, useState } from "react";
import { Card } from "../../styles/Intro/section";

type Props = {
  title: string;
  rot: number;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  setComaTop: React.Dispatch<React.SetStateAction<number>>;
  comment: string;
};

function CardItem({ title, rot, setComment, comment, setComaTop }: Props) {
  const [rotation, setRotation] = useState(rot);
  const [opacity, setOpacity] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // 올라갈수록 투명해지는 이펙트
  const scrollHandler = () => {
    if (!cardRef.current) return;
    const deltaY = window.scrollY - lastScrollY;
    if (deltaY > 0) {
      if (
        window.scrollY - window.innerHeight - cardRef.current.offsetTop >
        window.innerHeight * -0.5
      ) {
        // 눈에 보이는 위치일 때 조금씩 돌아감
        setRotation((prev) =>
          prev - 0.005 > rot - 10 ? prev - 0.005 : rot - 10
        );
        setComment(comment);
        setComaTop((prev) => prev - 0.001);
      }
      if (
        window.scrollY - window.innerHeight - cardRef.current.offsetTop >
        100
      ) {
        // 위로 올라가면 흐려짐
        setOpacity((prev) => (prev - 0.001 > 0 ? prev - 0.001 : 0));
        setComment("");
      }
    } else if (deltaY < 0) {
      if (
        window.scrollY - window.innerHeight - cardRef.current.offsetTop >
        window.innerHeight * -0.5
      ) {
        setRotation((prev) =>
          prev + 0.005 < rot + 10 ? prev + 0.005 : rot + 10
        );
        setComment(comment);
        setComaTop((prev) => (prev + 0.001 < 30 ? prev + 0.001 : 30));
      }
      if (
        window.scrollY - window.innerHeight - cardRef.current.offsetTop >
        100
      ) {
        setOpacity((prev) => (prev + 0.1 < 1 ? prev + 0.1 : 1));
        setComment("");
      }
    }
    setLastScrollY((prev) => window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    () => window.removeEventListener("scroll", scrollHandler);
  }, [lastScrollY]);

  return (
    <Card
      style={{ transform: `rotate(${rotation}deg)`, opacity: opacity }}
      ref={cardRef}
    >
      <h1>{title}</h1>
      <img
        src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
        alt="말하기"
      />
      <div>AI와 일상 회화를 나눠요</div>
    </Card>
  );
}

export default CardItem;

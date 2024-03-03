import React, { useEffect, useRef, useState } from "react";
import { Section } from "../../styles/MainLong/Page";

type Props = {
  setSectionNow: React.Dispatch<React.SetStateAction<number>>;
  sectionNow: number;
};

function WordColor({ setSectionNow, sectionNow }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const opacity = useRef(0);
  const [words, setWords] = useState<string[]>(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur fuga inventore delectus quidem animi nostrum rerum aperiam labore dolore at cumque blanditiis quas, voluptatem necessitatibus officia tempora, distinctio voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur fuga inventore delectus quidem animi nostrum rerum aperiam labore dolore at cumque blanditiis quas, voluptatem necessitatibus officia tempora, distinctio voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur fuga inventore delectus quidem animi nostrum rerum aperiam labore dolore at cumque blanditiis quas, voluptatem necessitatibus officia tempora, distinctio voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit.".split(
      " "
    )
  );

  const wheelHandler = (e: WheelEvent) => {
    if (!scrollRef.current) return;
    if (sectionNow != 1) return;
    if (window.scrollY >= window.innerHeight * 2 - 200) {
      setSectionNow((prev) => 2);
    } else if (window.scrollY < window.innerHeight * 0.4) {
      setSectionNow((prev) => 0);
    }
    const wordlen = words.length;
    if (opacity.current > wordlen) return;

    if (scrollRef.current.offsetTop - window.scrollY < window.innerHeight) {
      if (e.deltaY > 0) {
        if (opacity.current > wordlen) return;
        for (let i = opacity.current; i < opacity.current + 24; i += 24) {
          for (let j = i; i + 24 <= wordlen ? j < i + 24 : j <= wordlen; j++) {
            const elem = scrollRef.current.children[j] as HTMLElement;
            elem.style.opacity = "1";
          }

          for (
            let j = i + 24;
            i + 48 <= wordlen ? j < i + 48 : j <= wordlen;
            j++
          ) {
            const elem1 = scrollRef.current.children[j] as HTMLElement;
            elem1.style.opacity = "0.5";
          }

          for (
            let j = i + 48;
            i + 72 <= wordlen ? j < i + 72 : j <= wordlen;
            j++
          ) {
            const elem2 = scrollRef.current.children[j] as HTMLElement;
            elem2.style.opacity = "0.3";
          }
        }
        if (opacity.current <= wordlen) opacity.current += 24;
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    addEventListener("wheel", wheelHandler, { passive: false });
    return () => removeEventListener("wheel", wheelHandler);
  }, [sectionNow]);

  return (
    <Section ref={scrollRef}>
      <h3>title</h3>
      {words.map((each, idx) => (
        <span key={idx} className="word">
          {each}{" "}
        </span>
      ))}
      <div style={{ height: "1000px" }}></div>
    </Section>
  );
}

export default WordColor;

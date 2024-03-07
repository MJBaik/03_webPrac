import React, { useEffect, useRef, useState } from "react";
import { Section, Card, Sidebar } from "../styles/Main/Main";
import { Wrapper } from "../styles/common/global";
import WordBreak from "../components/Main/WordBreak";
import MainMP4 from "../assets/images/main.mp4";

function Main() {
  const now = useRef(0);
  const [top, setTop] = useState(5);
  const [isS1End, setIsS1End] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  // 섹션 변경 함수
  const wheelHandler = (e: WheelEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    if (now.current < 2 && e.deltaY > 0) {
      // 스크롤 색칠 이벤트 진행중일 시 아래로 내려가지 못하게 이벤트 중지
      if (now.current == 1 && !isS1End) return;

      const next = document.getElementById(
        `section${now.current + 1}`
      )?.offsetTop;

      window.scrollTo({ top: next ? next + 1 : 0, behavior: "smooth" });
      now.current += 1;
      setTop((prev) => prev + 35);
      setIsLoaded((prev) => false);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    } else if (now.current > 0 && e.deltaY < 0) {
      const next = document.getElementById(
        `section${now.current - 1}`
      )?.offsetTop;

      window.scrollTo({ top: next ? next + 1 : 0, behavior: "smooth" });
      now.current -= 1;
      setTop((prev) => prev - 35);
      setIsLoaded((prev) => false);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }
  };

  useEffect(() => {
    if (now.current == 0) window.scrollTo({ top: 50 });
    window.addEventListener("wheel", wheelHandler, { passive: false });

    return () => window.removeEventListener("wheel", wheelHandler);
  }, [isS1End, isLoaded]);

  return (
    <Wrapper>
      {/* 사이드 Nav Bar */}
      <Sidebar>
        <div className="circle" style={{ top: `${top}px` }}></div>
      </Sidebar>
      {/* 섹션 1 */}
      <Section id="section0" className="wVideo">
        <h1>제목</h1>
        <div>
          Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing elit.
          Perferendis nihil velit dolore corrupti provident officiis hic dolor
          sint nisi, atque in! Facilis reiciendis minus molestiae commodi harum
          cumque earum accusantium. Nostrum non unde amet labore officiis autem
          earum suscipit nihil? Necessitatibus, ipsa molestias. Optio
          praesentium, consequatur autem, dolorum, officia dicta ut quae ex
          ipsum harum architecto ratione cum perspiciatis sapiente. Similique
          magni sunt minus qui neque. Temporibus, deleniti ad nisi voluptates
          necessitatibus, nam officiis alias facere reiciendis incidunt
          dignissimos optio perferendis culpa adipisci ab magni, excepturi
          dolore rerum enim ut? Non quo esse voluptate ab sint magni est
          explicabo numquam <span>similique,</span> eius dicta{" "}
          <span>veritatis</span>
          obcaecati harum totam deleniti quod voluptatem consequuntur! Facere
          porro maiores accusantium deserunt magnam illum qui! Tempora.
          Consequatur praesentium dolorem reiciendis nihil quam magnam aperiam.
          Numquam nisi nesciunt <span>consectetur</span> dolorem. Laudantium
          quia nemo officia magni laboriosam incidunt debitis harum ab eveniet.
          Nam neque culpa ut voluptas voluptates. Sint quam nihil ullam
          distinctio
          <span>consectetur</span>, qui suscipit ducimus quia praesentium odit
          ipsam est itaque. Modi necessitatibus velit <span>veritatis</span> et,
          ducimus mollitia dolores doloribus a esse quae cum soluta! Ipsa.
          Reprehenderit error rerum nemo pariatur, <span>consectetur</span>, id
          vel dolores sint eum laborum similique in quasi enim facilis!{" "}
          <span>Veritatis</span> tempora, facilis modi, sequi culpa at ipsam
          totam provident nobis, exercitationem molestias. Tenetur unde, quae
          nam mollitia ea pariatur,
          <span>consectetur</span> a atque <span>veritatis</span> necessitatibus
          aperiam quam ab quas! Temporibus eaque non, porro libero recusandae
          nihil quidem qui consequuntur facilis neque ab maxime. Odit qui
          officia sequi similique velit dolorem, facere voluptatum voluptatem
          amet. Esse officiis sint aspernatur possimus cumque impedit inventore
          unde ipsam fugiat provident, laborum eius, sequi illum, dignissimos
          recusandae nisi? Doloribus, <span>consectetur</span>. Explicabo,
          nihil! Non quasi doloremque excepturi maiores impedit officiis modi a
          rerum voluptas optio, atque tenetur veniam. Officiis iure, debitis
          enim dolorem voluptas a quo ipsam perferendis harum! Modi, sit
          suscipit praesentium deserunt vel corporis ex ipsam assumenda alias
          consequuntur, voluptates explicabo blanditiis ullam magni sed?
          Praesentium unde alias enim maxime! Repellendus maxime ab quod quidem
          facilis cumque! Fugit temporibus ad culpa, error nostrum non,
          voluptatibus officiis eaque, <span>consectetur</span> totam maxime
          natus pariatur exercitationem molestias harum deserunt cum libero
          quisquam minima alias repellat adipisci? Esse sequi recusandae fugit?
          Eligendi molestiae esse, pariatur ratione dolores alias natus
          accusantium eos autem modi labore ex culpa obcaecati vel
          exercitationem ullam nam, nihil explicabo <span>consectetur</span>{" "}
          iusto fugit! Nam distinctio eum repellendus incidunt. Vero obcaecati
          saepe voluptas delectus at eveniet repudiandae necessitatibus nihil
          cupiditate officiis nulla, dignissimos tenetur natus perferendis
          voluptate quos debitis enim vel unde! Suscipit ex maxime laudantium
          dolore, iusto quam? Laborum, iste mollitia laboriosam laudantium
          eveniet deleniti ea nostrum beatae quo, eligendi eos, rem accusantium.
          Laborum libero beatae illum, saepe obcaecati, rem facilis quo
          repellendus pariatur, accusamus tempore ullam aperiam.
        </div>
        <video
          src={MainMP4}
          autoPlay={now.current == 0 ? true : false}
          muted
          loop
          className="bgVideo"
        />
      </Section>
      {/* 섹션 2: 단어 색칠 */}
      <Section id="section1">
        <Card className={now.current == 1 ? "active" : undefined}>
          <WordBreak setIsS1End={setIsS1End} />
        </Card>
      </Section>
      {/* 섹션 3 */}
      <Section id="section2">
        <Card className={now.current == 2 ? "active" : undefined}>
          <h1>Section 3</h1>
          <div>
            Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing
            elit. Deleniti cum debitis quas porro commodi modi delectus,
            accusantium animi provident quia voluptates unde, sed facere nemo,
            perspiciatis amet culpa quos aliquid.
          </div>
        </Card>
      </Section>
    </Wrapper>
  );
}

export default Main;

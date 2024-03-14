import { useEffect, useState } from "react";
import { changeToKor, hiragana, kanaToHira, katakana, nums } from "./news";
import { news, nnn } from "./asdf";
import styled from "styled-components";
import { Fonts } from "./assets/fonts/Fonts";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .sentance {
    display: flex;
    flex-wrap: wrap;
  }
  .kor {
    span {
      /* font-size: 10pt; */
      /* font-weight: 500; */
    }
  }
`;

const Word = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .word {
    /* background-color: pink; */
    /* margin-right: 3px; */
    word-break: keep-all;

    &.meaning {
      cursor: pointer;
      padding: 1px 3px;
      border-radius: 5px;

      &:hover {
        background-color: skyblue;
      }
    }
  }

  .read {
    color: orange;
    font-size: 9pt;
    height: 10px;
    margin-bottom: 5px;

    &.none {
      color: transparent;
    }
  }
`;

const Modal = styled.div`
  background-color: white;
  width: 300px;
  height: 200px;
  position: fixed;
  border: 1px solid black;
`;

function App() {
  const res: string[][] = [];
  const [newws, setnewws] = useState<string[][][]>([]);
  const [modalXy, setModalXy] = useState({ x: 0, y: 0 });
  const [modalProps, setModalProps] = useState({ title: "", meaning: "" });
  const [isModalOn, setIsModalOn] = useState(false);
  const [isyomion, setISyomion] = useState(false);
  const [kor, setKor] = useState<string[][]>([]);

  // console.log("1.우땨땨 2.우하하 3.크하하 4.푸하하 ".match(/\d+\.(.*?)\s/g));

  // 문장 끝을 찾아서 한 배열로...
  const set = () => {
    const arr = [];
    let si = 0;
    let ei = 0;
    for (let i = 0; i < res.length; i++) {
      if (res[i][0] != "。") {
        ei += 1;
      } else {
        arr.push(res.slice(si, ei + 1));
        si = ei + 1;
        ei += 1;
      }
      if (ei == res.length - 1 && res[ei][0] != "。") {
        arr.push(res.slice(si, ei + 1));
      }
    }
    return arr;
  };

  useEffect(() => {
    // news
    //   .split("\n")
    //   .map((each) => each.split("    "))
    //   .forEach((data) => {
    //     if (data.length > 1) res.push(data);
    //   });

    news.split("],[").forEach((each) => {
      res.push(each.split(",").map((ret) => ret.replace(/[\s'[\]]/g, "")));
    });

    setnewws(set());
  }, []);

  useEffect(() => {
    if (newws.length == 0) return;
    newws.forEach((text) => {
      const temp: string[] = [];

      // 문장을 한글로 변환
      text.forEach((word) => {
        if (word[4].startsWith("補助記号")) {
          temp.push(word[0]);
        } else {
          const newword = changeToKor(word[1]);
          if (!newword) return;
          temp.push(newword.join(""));
        }
      });
      setKor((prev) => [...prev, temp]);
    });
  }, [newws]);

  return (
    <>
      <Fonts />
      <button
        onClick={() => {
          setISyomion((prev) => !prev);
        }}
      >
        한자
      </button>
      <Wrapper>
        <h1>오늘의 뉴스</h1>

        {/* 낱말 모달 */}
        {isModalOn && (
          <Modal style={{ top: modalXy.y, left: modalXy.x }}>
            <button onClick={() => setIsModalOn(false)}>닫기</button>
            <h1>{modalProps.title}</h1>
            <div>{modalProps.meaning}</div>
          </Modal>
        )}
        {newws.map((sentence, id) => {
          return (
            <div className="sentance">
              {sentence.map((each, idx) => {
                return (
                  <Word
                    key={idx}
                    onClick={(e) => {
                      if (
                        // 클릭 시 명사/일반동사/형용사는 모달 출력
                        each[4].startsWith("名詞") ||
                        each[4].startsWith("動詞-一般") ||
                        each[4].startsWith("形容詞")
                      ) {
                        setModalXy({ x: e.clientX, y: e.clientY });
                        setModalProps({ title: each[3], meaning: each[2] });
                        setIsModalOn(true);
                      }
                    }}
                  >
                    {/* 읽는 방법 출력 */}
                    {/* 유니코드로 변경 필요 */}
                    {hiragana.indexOf(each[0].charAt(0)) == -1 &&
                    katakana.indexOf(each[0].charAt(0)) == -1 &&
                    nums.indexOf(each[0].charAt(0)) == -1 ? (
                      <div className={isyomion ? "read" : "read none"}>
                        {kanaToHira(each[1])}
                      </div>
                    ) : (
                      <div className={isyomion ? "read" : "read none"}></div>
                    )}
                    <div
                      className={
                        each[4].startsWith("名詞") ||
                        each[4].startsWith("動詞-一般") ||
                        each[4].startsWith("形容詞")
                          ? "word meaning"
                          : "word"
                      }
                    >
                      {each[0]}
                    </div>
                  </Word>
                );
              })}
              {/* 한글로 변환된 문장 */}
              <div className="kor">
                {kor[id] == undefined
                  ? null
                  : kor[id].map((each) => <span>{each} </span>)}
              </div>
            </div>
          );
        })}
      </Wrapper>
    </>
  );
}

export default App;

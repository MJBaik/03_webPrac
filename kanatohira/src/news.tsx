import { hiratokor } from "./temp";

// export const hiragana =
//   "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんぁぃぅぇぉっゃゅょがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽー".split(
//     ""
//   );
// export const katakana =
//   "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォッャュョガギグゲゴザジズゼゾダジヅデドバビブベボパピプペポー".split(
//     ""
//   );
// export const nums =
//   "0123456789０１２３４５６７８９!@#$％^&*()_+=-「」｛｝【】[]：.、。".split(
//     ""
//   );

// export const kor =
//   "아이우에오카키쿠케코사시스세소타치츠테토나니누네노하히후헤호마미무메모야유요라리루레로와오응아이우에오츠야유요가기구게고자지즈제조다지즈데도바비부베보파피푸페포".split(
//     ""
//   );

// 막대기 변환 - 예시: ろーどー -> ろうどう
const changeStick = (prev: string) => {
  const aGyou = /[アカガサザタダナハバパマヤラワ]/;
  const ieGyou = /[イキギシジチヂニヒビピミリエケゲセゼテデネヘベペメレ]/;
  const uGyou =
    /[ウクグスズツヅヌフブプムユヨルオコゴソゾトドノホボポモロョュ]/;

  if (aGyou.test(prev)) {
    return "あ";
  } else if (ieGyou.test(prev)) {
    return "い";
  } else if (uGyou.test(prev)) {
    return "う";
  } else {
    return "";
  }
};

// 가타카나를 히라가나로 변환
export const kanaToHira = (word: string) => {
  if (!word) return;

  return word
    .replace(/[ァ-ヴ]/g, (matched) =>
      String.fromCharCode(matched.charCodeAt(0) - 96)
    )
    .replace(/ー/g, (matched, index) => changeStick(word.charAt(index - 1)));
};

// 한글 발음 합치기 (예: 시요우 -> 쇼우)
const changeLetter = (letter: string, prev: number) => {
  switch (letter) {
    case "ゃ": {
      const newlet = String.fromCharCode(prev - 504);
      console.log(newlet);
      return newlet;
    }
    case "ゅ": {
      const newlet = String.fromCharCode(prev - 84);
      return newlet;
    }
    case "ょ": {
      console.log(letter, prev);
      const newlet = String.fromCharCode(prev - 224);
      return newlet;
    }
    // case "ん": {
    //   if (/["すずつづ]/.test(letter)) {
    //     const idx = "스즈즈츠".split("").indexOf(String.fromCharCode(prev));
    //     const word = "스즈즈츠".split("")[idx];
    //     const newlet = String.fromCharCode(word.charCodeAt(0) + 4);
    //   } else {
    //     const newlet = String.fromCharCode(word.charCodeAt(0) + 4);
    //   }
    //   return newlet;
    // }
    case "っ": {
      const newlet = String.fromCharCode(prev + 19);
      return newlet;
    }
    case "ぃ": {
      const newlet = String.fromCharCode(prev + 420);
      return newlet;
    }
    default:
      return letter;
  }
};

// 한글로 변환
export const changeToKor = (text: string) => {
  const changed: string[] = [];
  const char = kanaToHira(text);

  if (!char) return;
  for (let i = 0; i < char.length; i++) {
    const target = char[i];
    if ("ゃゅょんぃっ".split("").indexOf(target) > -1) {
      const korean = changeLetter(target, hiratokor[char[i - 1]].charCodeAt(0));
      changed.pop();
      changed.push(korean);
    } else {
      const korean = hiratokor[target];
      if (korean == undefined) return [text];
      changed.push(korean);
    }
  }
  console.log(changed);
  return changed;
};

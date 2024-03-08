export const hiragana =
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんぁぃぅぇぉっゃゅょがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽー".split(
    ""
  );
export const katakana =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォッャュョガギグゲゴザジズゼゾダジヅデドバビブベボパピプペポー".split(
    ""
  );
export const nums =
  "0123456789０１２３４５６７８９!@#$％^&*()_+=-「」｛｝【】[]：.、。".split(
    ""
  );

export const kor =
  "아이우에오카키쿠케코사시스세소타치츠테토나니누네노하히후헤호마미무메모야유요라리루레로와오응아이우에오츠야유요가기구게고자지즈제조다지즈데도바비부베보파피푸페포".split(
    ""
  );

const changeStick = (prev: string) => {
  let prevnum = 0;
  const letters = [
    "あかがさざただなはばぱまやらわ".split(""),
    "いきぎしじちぢにひびぴみりえけげせぜてでねへべぺめれ".split(""),
    "うくぐすずつづぬふぶぷむゆよるおこごそぞとどのほぼぽもろょゅ".split(""),
  ];

  letters.forEach((each, idx) => {
    if (each.indexOf(prev) > -1) {
      prevnum = idx;
    }
  });

  switch (prevnum) {
    case 0:
      return "あ";
    case 1:
      return "い";
    case 2:
      return "う";
    default:
      return "";
  }
};

// 가타카나를 히라가나로 변환
export const kanaToHira = (word: string) => {
  const changed: string[] = [];
  if (!word) return;

  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    let hira =
      12449 <= char.charCodeAt(0) && 12538 >= char.charCodeAt(0)
        ? String.fromCharCode(char.charCodeAt(0) - 96)
        : char;

    if (char == "ー") hira = changeStick(changed[changed.length - 1]);

    changed.push(hira);
  }
  return changed;
};

const changeLetter = (letter: string, arr: string[]) => {
  switch (letter) {
    case "ゃ": {
      const prev = arr[arr.length - 1].charCodeAt(0);
      const newlet = String.fromCharCode(prev - 504);
      arr.pop();
      arr.push(newlet);
      return arr;
    }
    case "ゅ": {
      const prev = arr[arr.length - 1].charCodeAt(0);
      const newlet = String.fromCharCode(prev - 84);
      arr.pop();
      arr.push(newlet);
      return arr;
    }
    case "ょ": {
      const prev = arr[arr.length - 1].charCodeAt(0);
      const newlet = String.fromCharCode(prev - 224);
      arr.pop();
      arr.push(newlet);
      return arr;
    }
    case "ん": {
      if ("すずつづ".split("").indexOf(arr[arr.length - 1]) > -1) {
        const idx = "스즈즈츠".split("").indexOf(arr[arr.length - 1]);
        const word = "스즈즈츠".split("")[idx];
        const prev = word.charCodeAt(0);
        const newlet = String.fromCharCode(prev + 4);
        arr.pop();
        arr.push(newlet);
      } else {
        const prev = arr[arr.length - 1].charCodeAt(0);
        const newlet = String.fromCharCode(prev + 4);
        arr.pop();
        arr.push(newlet);
      }
      return arr;
    }
    case "っ": {
      const prev = arr[arr.length - 1].charCodeAt(0);
      const newlet = String.fromCharCode(prev + 19);
      arr.pop();
      arr.push(newlet);
      return arr;
    }
    case "ぃ": {
      const prev = arr[arr.length - 1].charCodeAt(0);
      const newlet = String.fromCharCode(prev + 420);
      arr.pop();
      arr.push(newlet);
      return arr;
    }
    default:
      return arr;
  }
};

export const changeToKor = (text: string) => {
  let changed: string[] = [];
  const char = kanaToHira(text);

  if (!char) return;
  for (let i = 0; i < char.length; i++) {
    if ("ゃゅょんぃっ".split("").indexOf(char[i]) > -1) {
      changed = changeLetter(char[i], changed);
    } else {
      const idx = hiragana.indexOf(char[i]);
      const korean = kor[idx];
      if (korean == undefined) return [text];
      changed.push(korean);
    }
  }
  return changed;
};

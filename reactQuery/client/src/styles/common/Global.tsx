import { createGlobalStyle } from "styled-components";
import LOTTERIADDAG from "../../assets/fonts/ddag.woff";

export const Global = createGlobalStyle`
  :root {
    --bgColor: ${(props) => props.theme.color.bgColor};
    --fontColor: ${(props) => props.theme.color.fontColor};
    --grey: ${(props) => props.theme.color.grey};
    --main: ${(props) => props.theme.color.main}
  }

  @font-face {
      font-family: 'LOTTERIADDAG';
      src: url(${LOTTERIADDAG}) format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'TTTtangsbudaejjigaeB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/TTTtangsbudaejjigaeB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'SokchoBadaBatang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/SokchoBadaBatang.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  body, html {
    margin: 0;
    background-color: var(--bgColor);
    color: var(--fontColor);
  };

  div, span, form, input {
    box-sizing: border-box;
  }
  
`;

export const CalendarCss = createGlobalStyle`
  .react-calendar {
  width: calc(100vw - 650px);
  height: 65vh;
  min-width: 500px;
  /* background: var(--bgColor); */
  border: 1px solid #a0a096;
  font-family: Arial, Helvetica, sans-serif;
  /* line-height: 1.125em; */
}


.react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.react-calendar button {
  margin: 0;
  border: 0;
  outline: none;
  color: var(--fontColor);
  font-family: "SUITE-Regular";
}

.react-calendar button:enabled:hover {
  cursor: pointer;
}

.react-calendar__navigation {
  display: flex;
  height: 40px;
  margin-bottom: 1em;

}

.react-calendar__navigation button {
  min-width: 40px;
  background: none;
}

.react-calendar__navigation button:disabled {
  background-color: var(--grey);
}

.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: var(--grey);
}

.react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font: inherit;
  font-size: 0.75em;
  font-weight: bold;
}

.react-calendar__month-view__weekdays__weekday {
  padding: 0.5em;
}

.react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font: inherit;
  font-size: 0.75em;
  font-weight: bold;
  
}

.react-calendar__month-view__days__day--weekend {
  color: #d10000;
}

.react-calendar__month-view__days__day--neighboringMonth,
.react-calendar__decade-view__years__year--neighboringDecade,
.react-calendar__century-view__decades__decade--neighboringCentury {
  color: #757575;
}

.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 2em 0.5em;
}

.react-calendar__tile {
  max-width: 100%;
  padding: 10px 6.6667px;
  background: none;
  display: flex;
  line-height: 16px;
  font: inherit;
  font-size: 0.833em;
  height: calc((65vh - 20px) / 6);
}

.react-calendar__tile:disabled {
  background-color: #f0f0f0  !important;
  color: #ababab !important;
}

.react-calendar__month-view__days__day--neighboringMonth:disabled,
.react-calendar__decade-view__years__year--neighboringDecade:disabled,
.react-calendar__century-view__decades__decade--neighboringCentury:disabled {
  color: #cdcdcd  !important;
}

.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: #e6e6e6  !important;
}

.react-calendar__tile--now {
  position: relative;

  &:before {
    content: "today";
    position: absolute;
    top: 10px;
    right: 5px;
    color: var(--main);
    left: calc(40% - 2.5px);
  }
}

.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background: #ffffa9;
}

.react-calendar__tile--hasActive {
  position: relative;

  &:after {
    content: " ";
    position: absolute;
    width: 16pt;
    height: 8pt;
    background-color: ${(props) => props.theme.color.main}30;
    border-radius: 5px;
    top: 12px;
    left: 6px;
  }
}

.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: #a9d4ff;
}

.react-calendar__tile--active {
  background: #006edc;
  color: white;
}

.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: #1087ff;
}

.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: var(--grey);
}

`;

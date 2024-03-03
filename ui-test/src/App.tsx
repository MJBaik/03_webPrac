import React from "react";
import { Global, light } from "./styles/common";
import Main from "./assets/routes/Main";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <Global />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;

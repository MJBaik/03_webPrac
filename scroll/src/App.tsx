import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark, Global } from "./styles/common/global";
import { StyledEngineProvider } from "@mui/material";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./util/Navbar";
import Main from "./routes/Main";
import MainLong from "./routes/MainLong";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <Router>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={isDark ? dark : light}>
            <Global />
            <Navbar setIsDark={setIsDark} />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/main2" element={<MainLong />} />
            </Routes>
          </ThemeProvider>
        </StyledEngineProvider>
      </Router>
    </>
  );
}

export default App;

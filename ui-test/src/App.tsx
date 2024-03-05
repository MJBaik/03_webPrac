import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Global, light, dark } from "./styles/common";
import { useCookies } from "react-cookie";
import { ThemeProvider } from "styled-components";

import Intro from "./routes/Intro";
import Main from "./routes/Main";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [cookies, setCookies] = useCookies();

  useEffect(() => {
    setIsLogin(cookies.accessToken ? true : false);
  }, [cookies.accessToken]);

  return (
    <>
      <ThemeProvider theme={light}>
        <Global />
        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Global } from "./styles/common/Global";
import { useAuth, useDarkMode } from "./stores/AuthStore";
import { ThemeProvider } from "styled-components";

import Intro from "./routes/Intro";
import Main from "./routes/Main";
import Login from "./components/Intro/Login";
import Signup from "./components/Intro/Signup";
import Profile from "./routes/Profile";
import { dark, light } from "./styles/common/Theme";

function App() {
  const isLogin = useAuth();
  const isDark = useDarkMode();

  return (
    <>
      <ThemeProvider theme={isDark ? dark : light}>
        <Global />
        <Routes>
          {isLogin ? (
            <>
              <Route path="/" element={<Main />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/*" element={<Navigate replace to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Intro />} />
              <Route path="/*" element={<Navigate replace to="/" />} />
            </>
          )}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

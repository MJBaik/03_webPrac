import React from "react";
import { Nav } from "../styles/common/UI";

import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";

import { GoArrowRight } from "react-icons/go";
import { IconContext } from "react-icons";
import { useDarkMode, useToggleDarkMode } from "../stores/AuthStore";

type Props = {
  isSideOpen?: boolean;
  setIsSideOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBar({ isSideOpen, setIsSideOpen }: Props) {
  const toggleMode = useToggleDarkMode();
  const isDark = useDarkMode();

  return (
    <Nav>
      {setIsSideOpen && (
        <div
          className={isSideOpen ? "icon open" : "icon"}
          onClick={() => setIsSideOpen((prev) => !prev)}
        >
          <IconContext.Provider value={{ size: "2.5em" }}>
            <GoArrowRight />
          </IconContext.Provider>
        </div>
      )}
      <IconContext.Provider value={{ size: "2.5em" }}>
        {isDark ? (
          <IoMdSunny onClick={() => toggleMode()} />
        ) : (
          <IoMdMoon onClick={() => toggleMode()} />
        )}
      </IconContext.Provider>
    </Nav>
  );
}

export default NavBar;

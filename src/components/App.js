import React, { useState } from "react";
import '../styles/App.css';

/* Import ThemeProvider components to switch between themes */
import { ThemeProvider } from "styled-components";
import { DarkMode } from "../theme/DarkMode";
import { lightTheme, darkTheme } from "../utils/theme";
import { GlobalStyles } from "../utils/global";
import Toggle from "../theme/Toggle";

/* Import App Components */
import Logo from "./Logo";

const App = () => {
  const [theme, toggleTheme, componentMounted] = DarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="wrapper">
        <div className="header">
          <Logo />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="dashboard">
          
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;

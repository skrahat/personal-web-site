import React from "react";
import { createContext, SetStateAction } from "react";

interface DarkModeContext {
  darkMode: boolean | null;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const darkModeContext = React.createContext<DarkModeContext | undefined>(
  undefined
);

export default darkModeContext;

import "../styles/globals.css";
import { AppProps } from "next/app";
//import Navbar from "../components/navBarSide";
import { useState } from "react";
import DarkModeContext from "../components/darkmodeContext";
//import { createContext } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className={darkMode ? "dark" : ""}>
          <Component {...pageProps} />
        </div>
      </DarkModeContext.Provider>
    </>
  );
}

export default MyApp;

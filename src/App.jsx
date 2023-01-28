import { useState } from "react";
import PageLayout from "./layout/PageLayout";
import Context from "./context/Context";

import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.css";
import "./assets/fonts/Bebas Neue Pro Regular.otf";

function App() {
  const [navbarOptions, setNavbarOptions] = useState([
    { title: "Home", route: "/" },
  ]);
  const [navbarStyles, setNavbarStyles] = useState({
    background: "#171A21",
    text: "#F8F4F8",
  });

  const globalState = {
    navbarOptions,
    setNavbarOptions,
    navbarStyles,
    setNavbarStyles,
  };

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <PageLayout />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;

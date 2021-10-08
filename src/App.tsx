import React from "react";
//import logo from './logo.svg';
import "./App.css";
import HeaderNav from "./header/header";
import AppCards from "./appCard/AppCard";
import MyInfos from "./myInfos/Infos";
import InfoTexts from "./texts/InfoTexts";

function App() {
  return (
    <div className="App">
      <HeaderNav />

      <div className="cards-div">
        <AppCards />
      </div>
      <div className="personal-infos">
        <MyInfos />
      </div>
      <div className="texts-infos">
        <InfoTexts />
      </div>
    </div>
  );
}

export default App;

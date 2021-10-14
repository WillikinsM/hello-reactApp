import React from "react";
//import logo from './logo.svg';
import "./App.scss";
import Hello from "./routes/hello";
import HeaderNav from "./components/header";
import FooterEnd from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import DadosTab from "./routes/myData";

function App() {
  return (
    <>
      <HeaderNav />
      <Hello />
      <DadosTab />
      <FooterEnd />
    </>
  );
}

export default App;

import React from "react";
import "./App.scss";
import HeaderNav from "./components/headerNav";
import FooterEnd from "./components/footer-end";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";

function App() {
  return (
    <>
      <HeaderNav />
      <Routes />
      <FooterEnd />
    </>
  );
}

export default App;

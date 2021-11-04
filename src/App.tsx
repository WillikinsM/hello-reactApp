import React from "react";
import "./App.scss";
import HeaderNav from "./components/headerNav";
import FooterEnd from "./components/footer-end";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import { StoresProvider, stores } from "./store/store";

function App() {
  return (
    <StoresProvider value={stores}>
      <HeaderNav />
      <Routes />
      <FooterEnd />
    </StoresProvider>
  );
}

export default App;

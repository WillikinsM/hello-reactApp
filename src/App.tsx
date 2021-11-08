import React from "react";
import "./App.scss";
import HeaderNav from "./components/headerNav";
import FooterEnd from "./components/footer-end";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import {
  StoresProvider,
  stores,
  TStoresProvider,
  tstores,
} from "./stores/store";

const App = () => {
  return (
    <StoresProvider value={stores}>
      <TStoresProvider value={tstores}>
        <HeaderNav />
        <Routes />
        <FooterEnd />
      </TStoresProvider>
    </StoresProvider>
  );
};

export default App;

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
  MStoresProvider,
  mstores,
} from "./stores/store";

const App = () => {
  return (
    <StoresProvider value={stores}>
      <TStoresProvider value={tstores}>
        <MStoresProvider value={mstores}>
          <HeaderNav />
          <Routes />
          <FooterEnd />
        </MStoresProvider>
      </TStoresProvider>
    </StoresProvider>
  );
};

export default App;

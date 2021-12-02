import "./App.scss";
import HeaderNav from "./components/headerNav";
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
        </MStoresProvider>
      </TStoresProvider>
    </StoresProvider>
  );
};

export default App;

import React from "react";
import "./App.scss";
import Hello from "./routes/hello";
import HeaderNav from "./components/headerNav";
import FooterEnd from "./components/footer-end";
import "bootstrap/dist/css/bootstrap.min.css";
import  DataTab  from "./routes/myData";

function App() {
  return (
    <>
      <HeaderNav />
      <Hello />
      <DataTab />
      <FooterEnd />
    </>
  );
}

export default App;

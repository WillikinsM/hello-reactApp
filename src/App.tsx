import React from "react";
//import logo from './logo.svg';
import "./App.scss";
import Hello from './routes/hello';
import HeaderNav from "./components/header";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<>
    <HeaderNav />
    <Hello/>
  </>);
}

export default App;

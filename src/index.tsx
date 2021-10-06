import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HeaderNav from "./header/header";
import AppCards from "./appCard/AppCard";
import MyInfos from "./myInfos/Infos";

ReactDOM.render(<HeaderNav />, document.getElementById("start"));

ReactDOM.render(<AppCards />, document.getElementById("mid"));

ReactDOM.render(<MyInfos />, document.getElementById("my-info"));

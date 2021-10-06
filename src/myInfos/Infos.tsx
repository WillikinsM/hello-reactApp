import React from "react";
import "./Infos.css";
import img from "./img/sanjis.png";

function MyInfos() {
  return (
    <>
      <img className="img-sanji" src={img} alt="Sanji-One Piece" height="200" />
      <h1 className="my-name">Willikins Matheus Gonçalves Abreu</h1>
      <h4>
        <em>
          Hello my name is Willikins, i'm 21 year old and i was born in
          Florestopolis - PR
        </em>
      </h4>
    </>
  );
}

export default MyInfos;

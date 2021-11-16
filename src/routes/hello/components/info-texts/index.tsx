import React from "react";
import "./index.scss";

interface Props {
  firstId: string;
  link: string;
  alt: string;
  secondId: string;
  text: string;
  classProp: string;
}

const TextsInfo = ({
  firstId,
  link,
  alt,
  secondId,
  text,
  classProp,
}: Props) => {
  return (
    <div id={firstId}>
      <img className="img-logos" src={link} alt={alt} height="130" />
      <p id={secondId} className={classProp}>
        <strong>{text}</strong>
      </p>
    </div>
  );
};

export default TextsInfo;

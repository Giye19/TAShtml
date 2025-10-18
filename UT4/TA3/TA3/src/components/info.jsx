import React from "react";
import './info.css';
import Input from "./input";


function Info({ text }) {
  return (
    <div>
      <h2>Texto ingresado:</h2>
      <p>{text}</p>
    </div>
  );
}

export default Info;
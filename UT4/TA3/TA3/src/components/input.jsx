import React from "react";
import './input.css';

function Input({ value, onChange }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)} // avisa al padre
        placeholder="Escribe algo..."
      />
    </div>
  );
}

export default Input;
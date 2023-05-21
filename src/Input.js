import React, { useState } from "react";
import "./App.css";

function Input({ value, onChange, label, id, type }) {
  return (
    <div className="Input">
      <label htmlFor={id}>{label} </label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;

import { useState } from "react";
import "./index.css";

const FieldCard = ({item, checked, handleRemove,handleChecked }) => {

  const randomColor = getRandomColor();

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getLabel() {
    const words = item.label.split(" ");
    return words
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }

  return (
    <div className="field-card">
      <div className="field-label" style={{ backgroundColor: item.color }}>
        {getLabel()}
      </div>
      <div className="field-values">
        <h3>{item.label}</h3>
        <p>Value: {item.value}</p>
      </div>

      <div className="field-checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleChecked()}
        />
      </div>
      <div className="field-options">
        <button className="options-button" onClick={() => handleRemove(randomColor)}>X</button>
      </div>

    </div>
  );
};

export default FieldCard;

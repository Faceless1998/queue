import React from "react";
import data from "./../Client/data.json"; // Import the JSON file
import "./Main.css";

// Function to generate a random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Main = () => {
  return (
    <div className="main">
      <div className="list">
        {data.main.list.map((item, index) => (
          <div
            className="cl"
            key={index}
            style={{ backgroundColor: getRandomColor() }} // Apply random background color
          >
            <div className="name">{item.cl.name}</div>
            <div className="service">{item.cl.service}</div>
            <div className="price">{item.cl.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

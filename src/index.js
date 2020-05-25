import React from "react";
import ReactDom from "react-dom";

const today = new Date();
const time = today.getHours();
const custStyle = {
  color: ""
};
let msg;

if (time < 12) {
  msg = "Good Morning";
  custStyle.color = "red";
} else if (time < 18) {
  msg = "Good Afternoon";
  custStyle.color = "blue";
} else {
  msg = "Good Evening";
  custStyle.color = "green";
}

ReactDom.render(
  <h1 className="heading" style={custStyle}>
    {msg}
  </h1>,
  document.getElementById("root")
);

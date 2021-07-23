import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

// const printButtonNode = document.querySelector(".Print-button");
// printButtonNode.addEventListener("click", onClick);

// function onClick(e) {
//   if (e.target.tagName !== "BUTTON") {
//     return false;
//   }
//   window.print();
//   return onClick;
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

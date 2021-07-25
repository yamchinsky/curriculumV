import React from "react";
import { AiFillPrinter } from "react-icons/ai";
import "./printButton.scss";

const PrintButton = () => {
  return (
    <div>
      <button
        className="Print-button"
        onClick={() => {
          window.print();
        }}
      >
        <AiFillPrinter />
      </button>
    </div>
  );
};

export default PrintButton;

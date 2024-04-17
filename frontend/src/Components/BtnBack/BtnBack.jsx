import React from "react";
import "./BtnBack.css";

const BtnBack = () => {
  return (
    <div>
      <a className="btn btn-secondary mx-3 btn_back" href="/">
        <i className="bi bi-arrow-left icon_back"></i>
      </a>
    </div>
  );
};

export default BtnBack;

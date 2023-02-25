import React from "react";
import "./PasswordIndicator.css";

const PasswordIndicator = () => {

  return (
    <>
      <div className="wrapper">
        <progress
          className="indicator-bar"
          max="3"
        />
      </div>
    </>
  );
};
export default PasswordIndicator;




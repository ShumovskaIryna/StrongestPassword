import React from "react";
import "./PasswordIndicator.css";

const PasswordIndicator = ( props ) => {

  return (
    <>
      <div className="wrapper">
        <progress
          className="indicator-bar"
          max="3"
        />
          {props.password && (
              <p className="label">
              Your password is easy
              </p>
          )}
      </div>
    </>
  );
};
export default PasswordIndicator;




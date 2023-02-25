import React from "react";
import "./PasswordIndicator.css";

const PasswordIndicator = ( props ) => {

  const pwdValidate = props.password;

  const pwdChecker = () => {
    let pwdCheck = 0;
    let validateRegex = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
    validateRegex.forEach((regex, i) => {
      if (new RegExp(regex).test(pwdValidate)) {
        pwdCheck += 1;
      }
    });
    switch (pwdCheck) {
      case 0:
        return {
          strength: 0,
          val: "",
        };
      case 1:
        return {
          strength: 1,
          val: "easy",
        };
      case 2:
        return {
          strength: 2,
          val: "medium",
        };
      case 3:
        return {
          strength: 3,
          val: "strong",
        };
      default:
        return null;
    }
  };
  return (
    <>
      <div className="wrapper">
        <progress
          className="indicator-bar"
          max="3"
        />
          {props.password && (
              <p className="label">
              Your password is <strong>{pwdChecker().val} </strong>
              </p>
          )}
      </div>
    </>
  );
};
export default PasswordIndicator;




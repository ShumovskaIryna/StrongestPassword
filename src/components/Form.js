import React, { useState } from "react";
import "./Form.css";
import PasswordIndicator from "./PasswordIndicator";
import { Icon } from "react-icons-kit";
import { view } from "react-icons-kit/ikons/view";
import { view_off } from "react-icons-kit/ikons/view_off";

const Form = () => {
  const [passwordInput, setPasswordInput] = useState({
    password: "",
  });
  const [isError, setError] = useState(null);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(view_off);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(view);
      setType("text");
    } else {
      setIcon(view_off);
      setType("password");
    }
  };

  const onChange = (e) => {
    const password = e.target.value;
    setPasswordInput({
      ...passwordInput,
      password: e.target.value,
    });
    setError(null);
    let caps, small, num, specialSymbol;
    if (password.length < 8) {
      setError("Password should contain minimum 8 letter, number and special character: @$! % * ? &");
      return;
    } else {
      caps = (password.match(/[A-Z]/g) || []).length;
      small = (password.match(/[a-z]/g) || []).length;
      num = (password.match(/[0-9]/g) || []).length;
      specialSymbol = (password.match(/\W/g) || []).length;
      if (small < 1 && caps < 1) {
        setError("Must add one letter");
        return;
      } else if (num < 1) {
        setError("Must add one number");
        return;
      } else if (specialSymbol < 1) {
        setError("Must add one symbol: @$! % * ? &");
        return;
      }
    }
  };

  return (
    <div className="center">
      <h4>Test password strength</h4>
      <div className="inputBox">
        <input type={type} id="password" name="password" placeholder="Password" onChange={onChange} required />
        <span onClick={handleToggle}>
          <Icon icon={icon} size={25} />
        </span>
      </div>
      <div className="indicatorBox">
        {isError !== null && <div class="errors">{isError}</div>}
        <PasswordIndicator password={passwordInput.password} />
      </div>
    </div>
  );
};
export default Form;

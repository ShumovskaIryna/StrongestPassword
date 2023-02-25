import React, { useState } from "react";
import './Form.css'
import PasswordIndicator from "./PasswordIndicator";

const Form = () => {
  const [passwordInput, setPasswordInput] = useState({
    password: "",
  });
  const [isError, setError] = useState(null);

  const onChange = (e) => {
    const password = e.target.value;
    setPasswordInput({
      ...passwordInput,
      password: e.target.value,
    });
    setError(null);
    let caps, small, num, specialSymbol;
    if (password.length < 8) {
      setError(
        "Password should contain minimum 8 letter, number and special character: @$! % * ? &"
      );
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

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      e.persist();
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="center">
      <form onSubmit={onSubmit}>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control shadow-none"
          placeholder="Password"
          onChange={onChange}
          required
        />
        <PasswordIndicator />
        {isError !== null && <div class="errors">{isError}</div>}
        <button 
            className="btn btn-outline-info btn-lg mt-5" 
            type="submit"> 
            Submit password 
        </button>
      </form>
    </div>
  );
};
export default Form;
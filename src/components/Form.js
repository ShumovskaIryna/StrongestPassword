import React, { useState } from "react";
import './Form.css'

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
    if (password.length < 8) {
      setError(
        "Password should contain minimum 4 characters, number and special character: @$! % * ? &"
      );
      return;
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
        {isError !== null && <div class="errors">{isError}</div>}
      </form>
    </div>
  );
};
export default Form;
import React, { useState } from "react";

const Form = () => {
  const [passwordInput, setPasswordInput] = useState({
    password: "",
  });

  const onChange = (e) => {
    const password = e.target.value;
    setPasswordInput({
      ...passwordInput,
      password: e.target.value,
    });
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
      </form>
    </div>
  );
};
export default Form;
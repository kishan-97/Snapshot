import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [info, setInfo] = useState({ email: "", password: "" });
  const history = useHistory();
  const handleinput = (e) => {
    var tag_name = e.target.name;
    var value = e.target.value;
    setInfo({ ...info, [tag_name]: value });
  };
  const submit_data = async (e) => {
    e.preventDefault();

    const { email, password } = info;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const response = await res.json();
    if (response.code === 408) window.alert(response.msg);
    else history.push("/");
  };
  return (
    <div className="login">
      <div className="heading-col">
        <h1 className="heading">Login</h1>
      </div>
      <form className="input-form">
        <div className="input-box">
          <img src="../email.jpg" className="input-img" alt="Profile" />
          <input
            className="input"
            name="email"
            placeholder=" E-mail"
            type="email"
            onChange={handleinput}
            value={info.email}
          ></input>
        </div>
        <div className="input-box">
          <img src="../thread-lock.jpeg" className="input-img" alt="Lock" />

          <input
            className="input"
            name="password"
            placeholder=" Password"
            type="password"
            onChange={handleinput}
            value={info.password}
          ></input>
        </div>
        <button type="submit" className="btn" onClick={submit_data}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

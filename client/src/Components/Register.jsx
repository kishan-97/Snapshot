import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [info, setInfo] = useState({ username: "", email: "", password: "" });
  const history = useHistory();
  const handleinput = (e) => {
    var tag_name = e.target.name;
    var value = e.target.value;
    setInfo({ ...info, [tag_name]: value });
  };
  const submit_data = async (e) => {
    e.preventDefault();
    const { username, email, password } = info;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const response = await res.json();
    console.log(response.code);
    if (response.code === 200) history.push("/login");
    else window.alert(response.msg);
  };

  return (
    <div className="login">
      <div className="heading-col">
        <h1 className="heading">Register</h1>
      </div>
      <form className="input-form">
        <div className="input-box">
          <img src="../profile.png" className="input-img" alt="Profile" />
          <input
            className="input"
            name="username"
            onChange={handleinput}
            value={info.username}
            placeholder=" Username"
          ></input>
        </div>
        <div className="input-box">
          <img src="../email.jpg" className="input-img" alt="Profile" />
          <input
            className="input"
            name="email"
            onChange={handleinput}
            value={info.email}
            placeholder=" E-mail"
            type="email"
          ></input>
        </div>
        <div className="input-box">
          <img src="../thread-lock.jpeg" className="input-img" alt="Lock" />
          <input
            className="input"
            name="password"
            onChange={handleinput}
            value={info.password}
            placeholder=" Password"
            type="password"
          ></input>
        </div>
        <button type="submit" onClick={submit_data} className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;

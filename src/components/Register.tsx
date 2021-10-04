import style from "../css/Forms.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../interfaces/IUser";

interface RegisterProps {
  setAuth: (boolean: boolean) => void;
}

export default function Register({ setAuth }: RegisterProps): JSX.Element {
  const [inputs, setInputs] = useState<IUser>({
    username: "",
    email: "",
    password: "",
  });

  const { email, password, username } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // take every input, target the input name property (e.g. "password", "username", "email")
    // and set it to the value specified in the input
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const body = { username, email, password };
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log("hey")
      const parseRes = await response.json();
      console.log(parseRes) // not seeing it in the console



      localStorage.setItem("token", parseRes.token)
      setAuth(true)


    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.formContainer}>
      <h1 className="title">Register</h1>
      {/* <form onSubmit={onSubmitForm}> */}
        <label className={style.label}>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => onChange(e)}
        ></input>
        <label className={style.label}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => onChange(e)}
        ></input>
        <label className={style.label}>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => onChange(e)}
        ></input>
        <button className={style.button} type="submit" onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          setAuth(true)
          onSubmitForm(e) }}>
          Create Account
        </button>
      {/* </form> */}
      <p className={style.formSentence}>
        Already have an account?{" "}
        <Link to="/login" className={style.formLink}>
          Login
        </Link>
      </p>
    </div>
  );
}

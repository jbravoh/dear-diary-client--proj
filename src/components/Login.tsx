import style from "../css/Forms.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { IUser } from "../interfaces/IUser";

interface LoginProps {
  setAuth: (boolean: boolean) => void;
}

export default function Login({ setAuth }: LoginProps): JSX.Element {
  const [inputs, setInputs] = useState<IUser>({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      console.log(parseRes) 
      localStorage.setItem("token", parseRes.token)
      setAuth(true)


    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="title">Lo gin</h1>
      <form className={style.formContainer} >
        <label className={style.label}>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => onChange(e)}
        ></input>
        <label className={style.label}>Password</label>
        <input
          type="text"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => onChange(e)}
        ></input>
        <button className={style.button} type="submit" onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          setAuth(true)
          onSubmitForm(e) }}>
          Submit
        </button>
      </form>
      <p className={style.formSentence}>
        Already have an account?{" "}
        <Link to="/register" className={style.formLink}>
          Join Now
        </Link>
      </p>
    </>
  );
}

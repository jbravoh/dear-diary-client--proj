import style from "../css/Forms.module.css";
import { Link } from "react-router-dom";

export default function Login(): JSX.Element {
  return (
    <>
      <h1 className="title">Login</h1>
      <form className={style.formContainer}>
        <label className={style.label}>Email</label>
        <input type="text" name="email" placeholder="Enter email"></input>
        <label className={style.label}>Password</label>
        <input type="text" name="password" placeholder="Enter password"></input>
        <button className={style.button}>Login</button>
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

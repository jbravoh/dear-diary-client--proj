import style from "../css/Forms.module.css";
import { Link } from "react-router-dom";

export default function Register(): JSX.Element {
  return (
    <div className={style.formContainer}>
      <h1 className="title">Register</h1>
      <form>
        <label className={style.label}>Username</label>
        <input type="text" name="username" placeholder="Enter username"></input>
        <label className={style.label}>Email</label>
        <input type="text" name="email" placeholder="Enter email"></input>
        <label className={style.label}>Password</label>
        <input type="text" name="password" placeholder="Enter password"></input>
        <button className={style.button}>Create Account</button>
      </form>
      <p className={style.formSentence}>
        Already have an account?{" "}
        <Link to="/login" className={style.formLink}>
          Login
        </Link>
      </p>
    </div>
  );
}

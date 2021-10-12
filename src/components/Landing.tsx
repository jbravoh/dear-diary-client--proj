import style from "../css/Landing.module.css";

export default function Landing(): JSX.Element {
  return (
    <div className={style.bodyContainer}>
      <div className={style.container}>
        <h2 className={style.title}>
          Let it all out. <br />
          Store your experiences, thoughts and feelings in one place.
        </h2>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button}>Login</button>
        <button className={style.button}>Register</button>
      </div>
    </div>
  );
}

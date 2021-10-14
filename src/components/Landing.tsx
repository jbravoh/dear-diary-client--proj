import style from "../css/Landing.module.css";
import { useHistory } from "react-router-dom";

export default function Landing(): JSX.Element {
  const history = useHistory();

  const handleLoginButton = () => {
    history.push("/login");
  };

  const handleRegisterButton = () => {
    history.push("/register");
  };

  return (
    <div className={style.bodyContainer}>
      <div className={style.container}>
        <h2 className={style.title}>
          Let it all out. <br />
          Store your experiences, thoughts and feelings in one place.
        </h2>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={handleLoginButton}>
          Login
        </button>
        <button className={style.button} onClick={handleRegisterButton}>
          Register
        </button>
      </div>
    </div>
  );
}

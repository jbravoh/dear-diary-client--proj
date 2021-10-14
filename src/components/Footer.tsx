import style from "../css/Footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <div className={style.container}>
      <p className={style.copyright}>© 2021 Dear Diary</p>
    </div>
  );
}

import style from "../css/Forms.module.css";

export default function NewPost(): JSX.Element {
  return (
    <>
      <h1 className="title">Create New Post</h1>
      <form className={style.newPostContainer}>
        <label className={style.label}>Title</label>
        <input type="text" name="title" placeholder="Enter title" />
        <label className={style.label}>Content</label>
        <textarea name="title" placeholder="Let it all out" />
        <button className={style.button}>Submit</button>
      </form>
    </>
  );
}

import style from "../css/Forms.module.css";
import { IPost } from "../interfaces/IPost";
import { useHistory } from "react-router-dom";

interface NewPostProps {
  inputs: IPost;
  setInputs: React.Dispatch<React.SetStateAction<IPost>>;
}

export default function NewPost({
  inputs,
  setInputs,
}: NewPostProps): JSX.Element {
  const { title, content } = inputs;
  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const myHeaders = new Headers();
      history.push("/Dashboard");

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      const body = { title, content };
      const response = await fetch("http://localhost:5000/dashboard/posts", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      console.log(parseRes);
      setInputs({
        title: "",
        content: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="title">Create New Post</h1>
      <form className={style.newPostContainer}>
        <label className={style.label}>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) =>
            setInputs({ ...inputs, [e.target.name]: e.target.value })
          }
        />
        <label className={style.label}>Content</label>
        <textarea
          name="content"
          placeholder="Let it all out"
          value={content}
          onChange={(e) =>
            setInputs({ ...inputs, [e.target.name]: e.target.value })
          }
        />
        <button className={style.button} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

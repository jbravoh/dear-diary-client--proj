import React, { useState } from "react";
import style from "../../../css/Forms.module.css";
import { IPost } from "../../../interfaces/IPost";

export default function NewPost(): JSX.Element {
  const [inputs, setInputs] = useState<IPost>({
    title: "",
    content: "",
  });

  const { title, content } = inputs;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      const myHeaders = new Headers(); 

      myHeaders.append("Content-Type", "application/json")
      myHeaders.append("token", localStorage.token)

      const body = { title, content };
      const response = await fetch("http://localhost:5000/dashboard/posts", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
       
      });

      const parseRes = await response.json();
      console.log(parseRes)
      setInputs({
        title: "",
        content: "",
      })
    } catch (error) {
      console.error(error);
    }
  };


  


  return (
    <>
      <h1 className="title">Create New Post</h1>
      <form className={style.newPostContainer} onSubmit={handleSubmit}>
        <label className={style.label}>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => handleInput(e)}
        />
        <label className={style.label}>Content</label>
        <textarea
          name="content"
          placeholder="Let it all out"
          value={content}
          onChange={(e) => handleTextarea(e)}
        />
        <button className={style.button}>Submit</button>
      </form>
    </>
  );
}

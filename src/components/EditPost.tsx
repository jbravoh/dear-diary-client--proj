import { IPost } from "../interfaces/IPost";
import { useParams } from "react-router-dom";
import style from "../css/Forms.module.css";
import { useEffect } from "react";

interface EditPostProps {
  posts: IPost[];
  inputs: IPost;
  setInputs: React.Dispatch<React.SetStateAction<IPost>>;
}

export default function EditPost({
  posts,
  inputs,
  setInputs,
}: EditPostProps): JSX.Element {
  const { postId } = useParams<{ postId: string | undefined }>();

  function findPost(posts: IPost[], targetId: string | undefined) {
    for (const post of posts) {
      if (post.post_id === Number(targetId)) {
        return post;
      }
    }
    return null;
  }

  const post = findPost(posts, postId);

  const { title, content } = inputs;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("test");
    console.log(e.target.name);
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const editPost = async (id: number | undefined) => {
    try {
      const body = { title, content };

      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      await fetch(`http://localhost:5000/dashboard/posts/${id}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (post !== null) {
      setInputs({
        title: post.title,
        content: post.content,
      });
    }
  }, [post, setInputs]);

  return (
    <>
      {post !== null && (
        <>
          <h1 className="title">Edit Post</h1>
          <form className={style.newPostContainer}>
            <label className={style.label}>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => handleInput(e)}
            />
            <label className={style.label}>Content</label>
            <textarea
              name="content"
              value={content}
              onChange={(e) => handleTextarea(e)}
            />

            {post !== undefined && (
              <button
                className={style.button}
                onClick={() => editPost(post.post_id)}
              >
                Submit
              </button>
            )}
          </form>
        </>
      )}
    </>
  );
}

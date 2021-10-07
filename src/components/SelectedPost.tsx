import { IPost } from "../interfaces/IPost";
import { useParams } from "react-router-dom";
import style from "../css/SelectedPost.module.css";
import { Link } from "react-router-dom";

interface SelectedPostProps {
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
}

export default function SelectedPost({
  posts,
  setPosts,
}: SelectedPostProps): JSX.Element {
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

  const deletePost = async (id: number | undefined) => {
    try {
      await fetch(`http://localhost:5000/dashboard/posts/${id}`, {
        method: "DELETE",
        headers: { token: localStorage.token },
      });
      setPosts(posts.filter((post) => post.post_id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {post !== null && (
        <div className={style.container}>
          <h1 className="title">{post.title}</h1>
          <div className={style.buttonContainer}>
            <Link to={`/edit-post/${post.post_id}`}>
              <button className={style.editButton}>Edit</button>
            </Link>
            {post !== undefined && (
              <Link to={"/dashboard"}>
                <button
                  className={style.deleteButton}
                  onClick={() => deletePost(post.post_id)}
                >
                  Delete
                </button>
              </Link>
            )}
          </div>
          <div className={style.paragraphContainer}>
            <p className={style.content}>{post.content}</p>
          </div>
        </div>
      )}
    </>
  );
}

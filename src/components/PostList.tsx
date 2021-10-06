import React, { useEffect } from "react";
import { IPost } from "../interfaces/IPost";
import style from "../css/PostList.module.css";
import { Link } from "react-router-dom";

interface PostListProps {
  allPosts: IPost[];
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
}

export default function PostList({
  allPosts,
  posts,
  setPosts,
}: PostListProps): JSX.Element {
  useEffect(() => {
    setPosts(allPosts);
  }, [allPosts, setPosts]);

  return (
    <div>
      <div className={style.container}>
        {posts.map((post) => (
          <div key={post.post_id} className={style.postContainer}>
            <h1 className={style.title}> {post.title}</h1>
            <p>{post.content} </p>
            <div key={post.post_id}>
              <Link
                to={`/selected-post/${post.post_id}`}
                className={style.buttonLink}
              >
                <button className={style.button}>View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

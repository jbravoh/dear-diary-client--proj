import React, { useState, useEffect } from "react";
import { IPost } from "../interfaces/IPost";
import style from "../css/PostList.module.css";

interface PostListProps {
  allPosts: IPost[];
}

export default function PostList({ allPosts }: PostListProps): JSX.Element {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    setPosts(allPosts);
  }, [allPosts]);


  return (
    <div>
      <div className={style.container}>
        {posts.map((post) => (
          <div key={post.post_id} className={style.postContainer}>
            <h1 className={style.title}> {post.title}</h1>
            <p>{post.content} </p>
            <div>
              <button className={style.button}>View</button>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}

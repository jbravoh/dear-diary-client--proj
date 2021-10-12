import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import { IPost } from "../interfaces/IPost";

interface DashboardProps {
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
}

export default function Dashboard({
  posts,
  setPosts,
}: DashboardProps): JSX.Element {
  const [name, setName] = useState<string>("");
  const [allPosts, setAllPosts] = useState<IPost[]>([]);

  const getName = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      setName(parseRes[0].username);
      setAllPosts(parseRes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getName();
    // return () => setName("");
  }, []);

  return (
    <>
      <h1 className="title">Welcome {name}</h1>
      <PostList allPosts={allPosts} posts={posts} setPosts={setPosts} />
    </>
  );
}

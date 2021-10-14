import { useEffect, useState } from "react";
import { IPost } from "../interfaces/IPost";
import style from "../css/PostList.module.css";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import SearchInput from "./SearchInput";

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
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setPosts(allPosts);
  }, [allPosts, setPosts]);

  const displayPosts = () => {
    return (
      <div className={style.container}>
        {posts
          .filter(
            (post) =>
              post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              post.content.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((post) => (
            <div key={post.post_id} className={style.postContainer}>
              <h1 className={style.title}> {post.title}</h1>
              {post.created !== undefined && <TimeAgo date={post.created} />}
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
    );
  };

  return (
    <>
      {allPosts.length === 1 && allPosts[0].post_id === null ? (
        <Link to={"/new-post"} className={style.buttonLink}>
          <button className={style.newPostButton}>Create New Post</button>{" "}
        </Link>
      ) : (
        <>
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {displayPosts()}
        </>
      )}
    </>
  );
}

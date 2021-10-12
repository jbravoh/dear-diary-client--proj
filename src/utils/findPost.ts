import { IPost } from "../interfaces/IPost";

export function findPost(
  posts: IPost[],
  targetId: string | undefined
): IPost | null {
  for (const post of posts) {
    if (post.post_id === Number(targetId)) {
      return post;
    }
  }
  return null;
}

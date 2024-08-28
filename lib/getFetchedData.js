import { fetchPosts } from "./fetchPosts";

export async function getFetchedData() {
  const posts = await fetchPosts();

  return {
    posts,
  };
}

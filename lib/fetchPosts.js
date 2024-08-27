import { getFromCache, setInCache } from "./redis";

export const fetchPosts = async () => {
  const cacheKey = "posts";

  let cachedPosts = await getFromCache(cacheKey);

  if (cachedPosts) {
    try {
      const cachedDataString = cachedPosts.value;
      const parsedPosts = JSON.parse(cachedDataString);

      if (Array.isArray(parsedPosts)) {
        return parsedPosts;
      } else {
        console.warn("Cached data is not an array, fetching new posts.");
      }
    } catch (error) {
      console.error("Error parsing cached posts:", error);
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();

  const postsArray = Array.isArray(posts) ? posts : [];

  await setInCache(
    cacheKey,
    JSON.stringify({ value: JSON.stringify(postsArray) })
  );

  return postsArray;
};

// src/lib/blogData.js
import { fetchPosts } from "./fetchPosts";

const POSTS_PER_PAGE = 5;

export async function getBlogData(pageNumber = 1) {
  const posts = await fetchPosts();
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (pageNumber - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  return {
    posts,
    paginatedPosts,
    totalPages,
    currentPage: pageNumber,
  };
}

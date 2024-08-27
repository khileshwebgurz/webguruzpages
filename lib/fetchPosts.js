// lib/fetchPosts.js
//this is for importing the redis server.The redisClient allows you to interact with the Redis server to get and set cached data.
import redisClient from './redis';

export const fetchPosts = async () => {
    // creating a key for my cache 
  const cacheKey = 'posts';
  
  // Try to get cached data from Redis
  const cachedPosts = await redisClient.get(cacheKey);

//   if data is in cache then it will return it else it will fetch form an api
  if (cachedPosts) {
    return JSON.parse(cachedPosts); // Return cached data
  }

  // Fetch data from the API if not in cache
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`);

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts = await res.json();

  // Stores the fetched posts data in Redis with the key 'posts'. The set method is used to store the data:
//   Converts the posts object into a JSON string because Redis stores data as strings.
  await redisClient.set(cacheKey, JSON.stringify(posts), {
    EX: 86400, // Cache expiration time (e.g., 1 hour)
  });

//   Returns the posts data that was either fetched from the API or retrieved from the cache.
  return posts;
};

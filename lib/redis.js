// lib/redis.js
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export default redis;

export const getFromCache = async (key) => {
  return await redis.get(key);
};

export const setInCache = async (key, value, ttl = 3600) => {
  return await redis.set(key, value, { ex: ttl });
};
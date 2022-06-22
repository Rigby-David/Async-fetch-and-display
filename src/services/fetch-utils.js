import { client } from './client';

export async function getDiscs() {
  const response = await client.from('discs').select('*');
  return response.data;
}

export async function getMovies() {
  const response = await client.from('movies').select('*');
  return response.data;
}

export async function getDesserts() {
  const response = await client.from('desserts').select('*');
  return response.data;
}

export async function getCandies() {
  const response = await client.from('candies').select('*');
  return response.data;
}
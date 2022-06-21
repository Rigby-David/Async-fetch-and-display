import { client } from './client';

export async function getDiscs() {
  const response = await client.from('discs').select('*');
  return response.data;
}

export async function getMovies() {
  const response = await client.from('movies').select('*');
  return response.data;
}
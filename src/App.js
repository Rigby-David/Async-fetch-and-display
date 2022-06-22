import { useEffect, useState } from 'react';
import { getDiscs, getMovies, getDesserts, getCandies } from './services/fetch-utils';
import DiscList from './DiscList';
import MovieList from './MovieList';
import DessertList from './DessertList';
import CandiesList from './CandiesList';

import './App.css';
// import your arrays here

function App() {

  const [discs, setDiscs] = useState([]);
  const [movies, setMovies] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [candies, setCandies] = useState([]);


  useEffect(() => {
    async function fetchDiscData() {
      const data = await getDiscs();

      setDiscs(data);
    }
    fetchDiscData();
  }, []);

  useEffect(() => {
    async function fetchMovieData() {
      const data = await getMovies();
      setMovies(data);
    }
    fetchMovieData();
  }, []);

  useEffect(() => {
    async function fetchDessertsData() {
      const data = await getDesserts();
      setDesserts(data);
    }
    fetchDessertsData();
  }, []);

  useEffect(() => {
    async function fetchCandiesData() {
      const data = await getCandies();
      setCandies(data);
    }
    fetchCandiesData();
  }, []);

  return (
    <div className="App">
      <DiscList discs={discs}/>
      <MovieList movies={movies}/>
      <DessertList desserts={desserts}/>
      <CandiesList candies={candies}/>
    </div>
  );
}

export default App;

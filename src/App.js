import { useEffect, useState } from 'react';
import { getDiscs } from './services/fetch-utils';
import DiscList from './DiscList';
import MovieList from './MovieList';

import './App.css';
// import your arrays here

function App() {

  const [discs, setDiscs] = useState([]);
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    async function fetchDiscData() {
      const data = await getDiscs();

      setDiscs(data);
    }
    fetchDiscData();
  }, []);

  return (
    <div className="App">
      <DiscList discs={discs}/>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;

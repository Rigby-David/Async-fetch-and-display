import MovieItem from './MovieItem';

export default function MovieList({ movies = [] }) {
  return (
    <div>
      {
        movies.map((movie, i) => <MovieItem {...movie} key={movie.title + i + movie.id} />)
      }
    </div>
  );
}

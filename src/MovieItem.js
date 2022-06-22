export default function MovieItem({ title, year, director, rating }) {
  return (
    <div>
      <p>{title}</p>
      <p>{year}</p>
      <p>{director}</p>
      <p>{rating}</p>
    </div>
  );
}

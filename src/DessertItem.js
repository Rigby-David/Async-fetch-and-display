export default function DessertItem({ name, base, rating, type }) {
  return (
    <div>
      <p>{name}</p>
      <p>{base}</p>
      <p>{rating}</p>
      <p>{type}</p>
    </div>
  );
}
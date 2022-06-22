export default function CandiesItem({ name, year, manufacturer, type }) {
  return (
    <div>
      <p>{name}</p>
      <p>{year}</p>
      <p>{manufacturer}</p>
      <p>{type}</p>
    </div>
  );
}
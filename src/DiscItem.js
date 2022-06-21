export default function DiscItem({ name, speed, glide, fade, turn }) {
  return (
    <div>
      <p>{name}</p>
      <p>has a speed of {speed}</p>
      <p>glide of {glide}</p>
      <p>fade of {fade}</p>
      <p>turn of {turn}</p>
    </div>
  );
}

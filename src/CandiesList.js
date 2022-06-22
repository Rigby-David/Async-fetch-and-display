import CandiesItem from './CandiesItem';


export default function CandiesList({ candies }) {
  return (
    <div>
      {
        candies.map((candy, i) => <CandiesItem {...candy} key={candy.name + i + candy.id} />)
      }
    </div>
  );
}
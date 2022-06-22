import DessertItem from './DessertItem';


export default function DessertList({ desserts = [] }) {
  return (
    <div>
      {
        desserts.map((dessert, i) => <DessertItem {...dessert} key={dessert.name + i + dessert.id}/>)
      }
    </div>
  );
}
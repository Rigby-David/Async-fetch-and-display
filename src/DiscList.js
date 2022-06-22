import DiscItem from './DiscItem';

export default function DiscList({ discs = [] }) {
  return (
    <div>
      {
        discs.map((disc, i) => <DiscItem {...disc} key={disc.name + i + disc.id}/>)
      }
    </div>
  );
}

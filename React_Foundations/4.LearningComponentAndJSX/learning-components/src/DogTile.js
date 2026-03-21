import "./DogTile.css";
import DogDescription from "./DogDescription";

function DogTile(props) {
  // const text = `Cute puppy`;
  const customStyle = { fontSize: "20px", color: "red" };
  // const imageUrl = `https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg`;
  console.log("props.children", props.children);
  return (
    <div>
      <img className='dog' src={props.imageUrl} alt='dog-image' />
      <h3 style={customStyle}>{props.text}</h3>
      <DogDescription description={props.description} />
      {props.children}
    </div>
  );
}

export default DogTile;

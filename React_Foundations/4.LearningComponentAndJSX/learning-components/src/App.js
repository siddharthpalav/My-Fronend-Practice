import "./App.css";
import DogTile from "./DogTile";

function App() {
  return (
    <div className='App'>
      <h1>Learn React</h1>
      <DogTile
        description='d1'
        text='cute puppy 1'
        imageUrl='https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg'
      />
      <DogTile
        description='d2'
        text='cute puppy 2'
        imageUrl='https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg'
      />
      <DogTile
        description='d3'
        text='cute puppy 3'
        imageUrl='https://images.pexels.com/photos/46505/swiss-shepherd-dog-dog-pet-portrait-46505.jpeg'
      />
      <DogTile
        description='d4'
        text='cute puppy 4'
        imageUrl='https://images.pexels.com/photos/245035/pexels-photo-245035.jpeg'
      >
        <p>This is children props</p>
      </DogTile>
    </div>
  );
}

export default App;

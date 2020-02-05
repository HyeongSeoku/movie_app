import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
    "https://www.maangchi.com/wp-content/uploads/2010/01/kimchi-youtube120x901-590x442.jpg",
    rating:5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
    "https://seonkyounglongest.com/wp-content/uploads/2019/06/samgyeopsal-20-copy-669x1000.jpg",
    rating:4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image:
    "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2019/05/15/69fef116645e4a60899712b7e2fd42b7_hangookguan3-1-1030x773.jpg",
    rating:4.8
  },
  {
    id:4,
    name: "Kimbap",
    image:
    "https://static.myletter.net/20190225/edd1e01f-4502-453b-8b61-688941aefb76.jpg",
    rating:4.7
  }


]

function Food({name,picture,rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} /> 
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
      <Food 
      key={dish.id} 
      name={dish.name} 
      picture={dish.image}
      rating={dish.rating}
      /> 
      ))}
    </div>
  );
}

export default App;
 
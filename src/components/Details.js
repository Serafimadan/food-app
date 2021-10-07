import React from "react";
import { v4 as uuidv4 } from "uuid";

const Details = ({ ingredients }) => {
  return ingredients.map(ingredient => {
    return (
      <ul key={uuidv4()} >
        <li className='recipe__text'>{ingredient.text}</li>
      </ul>
    );
  });
};

export default Details;

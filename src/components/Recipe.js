import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Details from "./Details";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (

    <div className='col-md-4' style={{marginBottom: '2rem'}}>
        <div className='recipes__box'>
             <div className='recipe__text'>
                <h2 className='recipes__title'>{label}</h2>
            </div>    
            <img src={image} alt={label} className='recipe__bbox-img' style={{marginBottom: '2rem'}}/>
            <a href={url} target="_blank" rel="noopener noreferrer" className="recipe_buttons">
                URL
            </a>
            <button onClick={() => setShow(!show)} className="recipe_buttons">Ingredients</button>
            {show && <Details ingredients={ingredients} />}
        </div>
    </div>
  );
};

export default Recipe;
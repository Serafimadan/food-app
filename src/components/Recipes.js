import React from 'react';
// import Recipe from './Recipe'
import {Link} from 'react-router-dom'

const Recipes = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                {props.recipes.map((elem, key) => {
                    return (
                        <div key={elem.id} className='col-md-4' style={{marginBottom: '2rem'}}>
                            <div className='recipes__box'>
                                {/* <img src={elem.image} alt={elem.title} className='recipe__bbox-img'/>   
                                <div className='recipe__text'>
                                    <h5 className='recipes__title'>
                                        {elem.title.length < 20 ? `${elem.title}` : `${elem.title.substring(0, 20)}...`}
                                    </h5> */}
                                    {/* <Recipe key={elem.id} meal={elem} /> */}
                                {/* </div> */}
                                {/* <button className="meals">
                                    
                                </button> */}
                                <img src={elem.image} alt="recipe" />
                                <div className='recipe__text'>
                                    <h1 className='recipes__title'>
                                        {elem.title.length < 20 ? `${elem.title}` : `${elem.title.substring(0, 20)}...`}
                                    </h1>
                                </div>
                            {/* <ul className="instructions">
                                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                                <li>Number of servings: {meal.servings}</li>
                            </ul> */}
                            <button  className="recipe_buttons">
                                    <Link to={{pathname: `/recipe/${elem.id}`, state: {elem: elem.title}}}>
                                        Go to Recipes source
                                    </Link>
                                </button>
                                {/* <button className='recipe_buttons'>
                                    <Link to={{pathname: `/recipe/${elem.id}`, state: {recipe: elem.title}}}>View Recipe
                                        <Recipe key={elem.id} meal={elem}/>
                                    </Link>
                                </button> */}
                            </div>
                        </div>
                    )
                }
                    )
                }
            </div>
        </div>
    );
}

export default Recipes;

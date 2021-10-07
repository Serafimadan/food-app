import React from 'react';
import {Link} from 'react-router-dom'

const Recipes = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                {props.recipes.map((elem, key) => {
                    return (
                        <div key={elem.id} className='col-md-4' style={{marginBottom: '2rem'}}>
                            <div className='recipes__box'>
                            
                                <img src={elem.image} alt="recipe" />
                                <div className='recipe__text'>
                                    <h1 className='recipes__title'>
                                        {elem.title.length < 20 ? `${elem.title}` : `${elem.title.substring(0, 20)}...`}
                                    </h1>
                                </div>
                           
                                <button  className="recipe_buttons">
                                    <Link to={{pathname: `/recipe/${elem.id}`, state: {elem: elem.title}}}>
                                        Go to Recipes source
                                    </Link>
                                </button>
                               
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

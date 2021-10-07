import React from 'react'

const Form = ({ recipeData }) => {
    const { onSubmit, onChange, value } = recipeData;

   return  (
        <form onSubmit = {onSubmit} style={{marginBottom: '2rem'}}>
            <input 
                onChange = {onChange}
                value={value}
                className='form__input' 
                type='text' 
                autoComplete="off"
                placeholder="Search Food"
                name='recipeName'/>
            <button className='form__button'>Search</button>
        </form>
   )
}

export default Form

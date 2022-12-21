import React, { useState } from 'react'
import './App.css'
import Axios from 'axios'
import Form from './components/Form'
import { v4 as uuidv4 } from "uuid";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";

const API_ID = '9a13b853'
const APP_KEY = '52572512f688d5dab600058b38e6c6d5'

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const URL = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}`
  const getRecipe = async () => {
    if (query !== "") {
      const result = await Axios.get(URL);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  }

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getRecipe();
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        {/* <Form recipeData = {onSubmit, onChange, query}/> */}
      <form onSubmit={onSubmit} className="search-form" style={{marginBottom: '2rem'}}>
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
      </form>
      <div className='container'>
            <div className='row'>
              {recipes !== [] &&
                recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
            </div>
      </div>
      </div>
    )
}

export default App;
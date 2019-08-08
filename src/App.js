import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "../node_modules/bootstrap/scss/bootstrap.scss";

const App = () => {
  const appId = "f2917438";
  const appKey = "314ef1f31a165f7e74010aa173121257";

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState("apple");

  useEffect(() => {
    getAppData();
  }, [submit]);

  const getAppData = async () => {
    // e.preventdefault();
    const response = await fetch(
      `https://api.edamam.com/search?q=${submit}&?app_id=${appId}&app_key=${appKey}`
    );
    const appData = await response.json();
    setRecipe(appData.hits);
    console.log(appData.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const searchRecipe = e => {
    e.preventDefault();
    setSubmit(search);
    setSearch("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form className="input-group my-3" onSubmit={searchRecipe}>
            <input
              className="form-control"
              type="text"
              onChange={updateSearch}
              placeholder="Enter Fruit name..."
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} data={recipe.recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;

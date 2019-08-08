import React, { Component } from "react";

class Recipe extends Component {
  render() {
    const { image, source, url, ingredients, label } = this.props.data;
    let i = 0;
    return (
      <div className="col-md-4 mb-3">
        <div className="card">
          <img className="card-img-top" src={image} alt="Recipe" />
          <div className="card-body">
            <h5>
              {label} <div className="w-100 mb-1" />
              <span className="badge badge-sm badge-primary badge-pill">
                {source}
              </span>
            </h5>
            <small>
              From:
              <a className="text-decoration-none" href={url} target="blank">
                {source}
              </a>
            </small>
          </div>
          <ul className="list-group list-group-flush">
            {ingredients.map(
              ingredient => (
                // i is added for uniq key value no programatical use.
                (i = i + 1),
                (
                  <li className="list-group-item" key={i + ingredient.food}>
                    {ingredient.text}
                  </li>
                )
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Recipe;

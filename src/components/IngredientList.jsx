import React from 'react';

const IngredientList = (props) => {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {props.M.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => props.addingrediant(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;

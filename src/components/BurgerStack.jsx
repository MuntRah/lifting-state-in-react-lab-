
import React from 'react';

const BurgerStack = (props) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {props.stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => props.removeFromBurger(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;

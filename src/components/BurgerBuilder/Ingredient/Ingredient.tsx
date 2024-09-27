import { FC } from 'react';
import { BuilderIngredient } from '../../../types';
import './Ingredient.css';

interface IngredientProps {
  ingredient: BuilderIngredient;
  amount: number;
}

const Ingredient: FC<IngredientProps> = ({ ingredient, amount }) => (
  <li>
    <button type='button'>
      <img src={ingredient.img} alt={ingredient.displayName} />
      <span>{ingredient.displayName}</span>
    </button>
    <span>{ingredient.price}</span>
    <span>{amount}</span>
    <button type='button' aria-label='Delete' />
  </li>
);

export default Ingredient;

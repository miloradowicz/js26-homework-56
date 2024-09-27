import { FC, MouseEventHandler } from 'react';
import { BuilderIngredient } from '../../../types';
import './Ingredient.css';

interface IngredientProps {
  ingredient: BuilderIngredient;
  amount: number;
  onAdd: MouseEventHandler;
  onDelete: MouseEventHandler;
}

const Ingredient: FC<IngredientProps> = ({ ingredient, amount, onAdd, onDelete }) => (
  <li>
    <button type='button' onClick={onAdd}>
      <img src={ingredient.img} alt={ingredient.displayName} />
      <span>{ingredient.displayName}</span>
    </button>
    <span>{ingredient.price}</span>
    <span>{amount}</span>
    <button type='button' aria-label='Delete' onClick={onDelete} />
  </li>
);

export default Ingredient;

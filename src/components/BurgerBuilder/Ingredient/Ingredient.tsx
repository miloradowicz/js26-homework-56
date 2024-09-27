import { FC } from 'react';
import { BuilderIngredient } from '../../../types';
import './Ingredient.css';

const Ingredient: FC<BuilderIngredient> = ({ displayName, price, img }) => (
  <li>
    <button type='button'>
      <img src={img} alt={displayName} />
      <span>{displayName}</span>
    </button>
    <span>{price}</span>
    <span>{amount}</span>
    <button type='button' aria-label='Delete' />
  </li>
);

export default Ingredient;

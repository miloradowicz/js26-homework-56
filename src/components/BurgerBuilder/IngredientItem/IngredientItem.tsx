import { FC, MouseEventHandler } from 'react';
import { BuilderIngredient } from '../../../types';
import './IngredientItem.css';

interface IngredientProps {
  ingredient: BuilderIngredient;
  amount: number;
  onAdd: MouseEventHandler;
  onDelete: MouseEventHandler;
}

const Ingredient: FC<IngredientProps> = ({ ingredient, amount, onAdd, onDelete }) => (
  <li className='row flex-column flex-sm-row align-items-center gap-1'>
    <button type='button' onClick={onAdd} className='col-12 col-sm-5 btn btn-light'>
      <div className='row align-items-center'>
        <img src={ingredient.img} alt={ingredient.displayName} className='col-3' />
        <span className='col-9'>{ingredient.displayName}</span>
      </div>
    </button>
    <div className='col-12 col-sm-6'>
      <div className='row align-items-center'>
        <div className='col-9 d-flex justify-content-around gap-1'>
          <span>Price: {ingredient.price}</span>
          <span>Qty: {amount}</span>
        </div>
        <button type='button' aria-label='Delete' onClick={onDelete} className='col-3 btn btn-danger fa fa-trash' />
      </div>
    </div>
  </li>
);

export default Ingredient;

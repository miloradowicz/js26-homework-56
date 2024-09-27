import { FC } from 'react';
import IngredientItem from './IngredientItem/IngredientItem';
import { BuilderIngredient } from '../../types.d';

interface BurgerBuilderProps {
  ingredients: BuilderIngredient[];
  selection: BuilderIngredient[];
  onItemAdd: (x: BuilderIngredient) => void;
  onItemDelete: (x: BuilderIngredient) => void;
}

const BurgerBuilder: FC<BurgerBuilderProps> = ({ ingredients, selection, onItemAdd, onItemDelete }) => (
  <div>
    <h3>Ingredients</h3>
    <ul className='ingredient-list'>
      {ingredients.map((x) => (
        <IngredientItem ingredient={x} amount={selection.filter((y) => y.id === x.id).length} onAdd={() => onItemAdd(x)} onDelete={() => onItemDelete(x)} />
      ))}
    </ul>
  </div>
);

export default BurgerBuilder;

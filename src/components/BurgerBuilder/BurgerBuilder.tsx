import { FC } from 'react';
import IngredientItem from './IngredientItem/IngredientItem';
import { BuilderIngredient } from '../../types.d';
import Price from './Price/Price';

interface BurgerBuilderProps {
  ingredients: BuilderIngredient[];
  selection: BuilderIngredient[];
  price: number;
  onItemAdd: (x: BuilderIngredient) => void;
  onItemDelete: (x: BuilderIngredient) => void;
}

const BurgerBuilder: FC<BurgerBuilderProps> = ({ ingredients, selection, price, onItemAdd, onItemDelete }) => (
  <div className='container p-5'>
    <h3>Ingredients</h3>
    <ul className='d-flex flex-column gap-2'>
      {ingredients.map((x) => (
        <IngredientItem
          key={x.id}
          ingredient={x}
          amount={selection.filter((y) => y.id === x.id).length}
          onAdd={() => onItemAdd(x)}
          onDelete={() => onItemDelete(x)}
        />
      ))}
    </ul>
    <Price price={price} />
  </div>
);

export default BurgerBuilder;

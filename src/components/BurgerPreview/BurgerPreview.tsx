import { FC } from 'react';
import Burger from './Burger/Burger';
import { Ingredient } from '../../types.d';

interface BurgerPreviewProps {
  ingredients: Ingredient[];
}

const BurgerPreview: FC<BurgerPreviewProps> = ({ ingredients }) => (
  <div>
    <Burger ingredients={ingredients} />
  </div>
);

export default BurgerPreview;

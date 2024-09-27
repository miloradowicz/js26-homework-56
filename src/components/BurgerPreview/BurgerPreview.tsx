import { FC } from 'react';
import Burger from './Burger/Burger';
import { PreviewIngredient } from '../../types.d';

interface BurgerPreviewProps {
  ingredients: PreviewIngredient[];
}

const BurgerPreview: FC<BurgerPreviewProps> = ({ ingredients }) => (
  <div>
    <h3>Burger</h3>
    <Burger ingredients={ingredients} />
  </div>
);

export default BurgerPreview;

import { FC } from 'react';
import Burger from './Burger/Burger';
import { PreviewIngredient } from '../../types.d';

interface BurgerPreviewProps {
  selection: PreviewIngredient[];
}

const BurgerPreview: FC<BurgerPreviewProps> = ({ selection }) => (
  <div className='container'>
    <h3>Burger</h3>
    <Burger selection={selection} />
  </div>
);

export default BurgerPreview;

import { FC, createElement } from 'react';
import { PreviewIngredient } from '../../../types.d';
import './Burger.css';

interface BurgerProps {
  ingredients: PreviewIngredient[];
}

const Burger: FC<BurgerProps> = ({ ingredients }) => <div className='Burger'>{ingredients.map((x, i) => createElement(x.component, { key: i }))}</div>;

export default Burger;

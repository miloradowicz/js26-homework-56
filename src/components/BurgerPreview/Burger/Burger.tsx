import { FC, createElement } from 'react';
import { PreviewIngredient } from '../../../types.d';
import './Burger.css';

interface BurgerProps {
  selection: PreviewIngredient[];
}

const Burger: FC<BurgerProps> = ({ selection }) => <div className='Burger'>{selection.map((x, i) => createElement(x.component, { key: i }))}</div>;

export default Burger;

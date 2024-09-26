import { FC, createElement } from 'react';
import { Layer } from '../../../types.d';
import './Burger.css';

interface BurgerProps {
  layers: Layer[];
}

const Burger: FC<BurgerProps> = ({ layers }) => <div className='Burger'>{layers.map((x) => createElement(x.component))}</div>;

export default Burger;

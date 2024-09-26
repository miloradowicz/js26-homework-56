import { FC } from 'react';
import Burger from './Burger/Burger';
import { Layer } from '../../types.d';

interface BurgerPreviewProps {
  layers: Layer[];
}

const BurgerPreview: FC<BurgerPreviewProps> = ({ layers }) => (
  <div>
    <Burger layers={layers} />
  </div>
);

export default BurgerPreview;

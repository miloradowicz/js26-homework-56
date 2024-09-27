import { FC } from 'react';

interface PriceProps {
  price: number;
}

const Price: FC<PriceProps> = ({ price }) => <div>Total: {price}</div>;

export default Price;

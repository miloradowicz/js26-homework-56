import { FC, PropsWithChildren } from 'react';
import './Burger.css';

const Burger: FC<PropsWithChildren> = ({ children }) => <div className='Burger'>{children}</div>;

export default Burger;

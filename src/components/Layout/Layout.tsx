import { FC, PropsWithChildren } from 'react';
import './Layout.css';

const Layout: FC<PropsWithChildren> = ({ children }) => <div className='layout'>{children}</div>;

export default Layout;

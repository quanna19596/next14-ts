import type { Metadata } from 'next';

import { TAppLayoutProps } from './layout.d';

import './layout.scss';

export const metadata: Metadata = {
  title: 'App Layout'
};

const AppLayout: React.FC<TAppLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className='AppLayout'>{children}</body>
    </html>
  );
};

export default AppLayout;

import type { Metadata } from 'next';

import Button from '@/components/Button';

import { TAppPage } from './page.d';

import './page.scss';

export const metadata: Metadata = {
  title: 'App Page'
};

const AppPage: React.FC<TAppPage> = async () => {
  return (
    <div className='AppPage'>
      AppPage
      <Button />
    </div>
  );
};

export default AppPage;

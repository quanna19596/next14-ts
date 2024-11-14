import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { routing } from '@/i18n/routing';

import { TAppLayoutProps } from './layout.d';

import './layout.scss';

export const metadata: Metadata = {
  title: 'App Layout'
};

const AppLayout: React.FC<TAppLayoutProps> = async ({ children, params: { locale } }) => {
  const isInvalidLocale = !routing.locales.includes(locale);
  if (isInvalidLocale) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <div className='AppLayout'>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
};

export default AppLayout;

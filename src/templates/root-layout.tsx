import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/tiptap/styles.css';

import { ModalsProvider } from '@mantine/modals';

import type { ReactNode } from 'react';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { NavigationProgress } from '@mantine/nprogress'

import { theme } from '../theme/default.js';
type RootLayoutProps = { children: ReactNode };

export const RootLayout = async ({ children }: RootLayoutProps) => {
  const data = await getData();

  return (
    <div id="__waku" >
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <ColorSchemeScript />
      <MantineProvider theme={theme}>
        <ModalsProvider >
          <NavigationProgress />
          <Notifications />
          {children}

        </ModalsProvider>
      </MantineProvider>
    </div>
  );
};

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};

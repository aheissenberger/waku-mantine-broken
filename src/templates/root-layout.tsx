import '@mantine/core/styles.css';
import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';


import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';

const theme = createTheme({
  /** Put your mantine theme override here */
});

type RootLayoutProps = { children: ReactNode };

export const RootLayout = async ({ children }: RootLayoutProps) => {
  const data = await getData();

  return (

    <div id="__waku" >
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <ColorSchemeScript />
      <MantineProvider theme={theme}>
        <Header />
        <main >
          {children}
        </main>
        <Footer />
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

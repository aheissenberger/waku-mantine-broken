import { createPages } from 'waku';

import { RootLayout } from './templates/root-layout.js';
import { HomePage } from './templates/home-page.js';
import { AboutPage } from './templates/about-page.js';
import { DirPage } from './templates/directory-list.js';
import { MantinePage } from './templates/matine-page.js';
import { ContextPage } from './templates/context-page.js';
import { MantineCorePage } from './templates/mantine-core-page.js';
import { AppShellLayout } from './templates/appshell-layout.js';
import { MantineDatePage } from './templates/mantine-date-page.js';
import { MantineFormPage } from './templates/mantine-form-page.js';
//import { MantineChartsPage } from './templates/mantine-charts-page.js';
import { MantineExtentionsPage } from './templates/mantine-extenstions-page.js';

export default createPages(async ({ createPage, createLayout }) => {
  createLayout({
    render: 'static',
    path: '/',
    component: RootLayout,
  })
  createLayout({
    render: 'static',
    path: '/appshell',
    component: AppShellLayout,
  });

  createPage({
    render: 'static',
    path: '/',
    component: HomePage,
  });

  createPage({
    render: 'static',
    path: '/about',
    component: AboutPage,
  });

  createPage({
    render: 'dynamic',
    path: '/dir/[...directories]',
    component: DirPage,
  });

  createPage({
    render: 'dynamic',
    path: '/mantine',
    component: MantinePage,
  });

  createPage({
    render: 'dynamic',
    path: '/appshell/mantine/core',
    component: MantineCorePage,
  });
  createPage({
    render: 'dynamic',
    path: '/appshell/mantine/form',
    component: MantineFormPage,
  });
  // createPage({
  //   render: 'dynamic',
  //   path: '/appshell/mantine/charts',
  //   component: MantineChartsPage,
  // });
    createPage({
    render: 'dynamic',
    path: '/appshell/mantine/extentions',
    component: MantineExtentionsPage,
  });
  createPage({
    render: 'dynamic',
    path: '/appshell/mantine/date',
    component: MantineDatePage,
  });
  createPage({
    render: 'dynamic',
    path: '/context',
    component: ContextPage,
  });
});

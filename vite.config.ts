import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  ...({
    optimizeDeps: {
      include: [
        'dayjs', 'dayjs/**/*', // @mantine/dates
        '@mantine/charts > lodash/**/*', // @mantine/charts
        '@mantine/code-highlight > highlight.js', // @mantine/code-highlight
        '@mantine/notifications > prop-types', // @mantine/notifications
      ],
      esbuildOptions: {
        preserveSymlinks: true,
      },
      exclude: ['@mantine/core', '@mantine/hooks', '@mantine/code-highlight', '@mantine/charts', '@mantine/spotlight', '@mantine/notifications','@mantine/carousel','@mantine/dropzone','@mantine/nprogress','@mantine/tiptap'],
    },
    ssr: {
      noExternal: ['@mantine/core', '@mantine/hooks', '@mantine/code-highlight', '@mantine/charts', '@mantine/spotlight', '@mantine/notifications','@mantine/carousel','@mantine/dropzone','@mantine/nprogress','@mantine/tiptap'],
    },
  }),
  plugins: [],
}));


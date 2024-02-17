# Mantine Setup

**PNPM**:

- activate hoisting of packages

`.npmrc`:

```
node-linker=hoisted
```
## Mantine Dates

**`vite.config.ts`:**
```js
{
    optimizeDeps: {
        include: [
        'dayjs', 'dayjs/**/*', // @mantine/dates
        ]
    }
}
```

## Mantine Charts

* **DevMode fails:** - no solution
* **BuildMode fail** - no solution

```
react-server-dom-webpack_client.js?v=14394cee:822 Uncaught SyntaxError: The requested module '/node_modules/lodash/get.js?v=aefbfb15' does not provide an export named 'default' (at DataUtils.js?v=aefbfb15:3:8)
```

## Extentions

### CodeHighlight

**`vite.config.ts`:**
```js
{
    optimizeDeps: {
        include: [
        '@mantine/code-highlight > highlight.js',
        ],
        exclude: ['@mantine/code-highlight'],
    },
    ssr: {
        noExternal: ['@mantine/code-highlight'],
    },
}
```

### Notifications System

**`vite.config.ts`:**
```js
{
    optimizeDeps: {
        include: [
        '@mantine/notifications > prop-types',
        ],
        exclude: ['@mantine/notifications'],
    },
    ssr: {
        noExternal: ['@mantine/notifications'],
    },
}
```


### Spotlight

**`vite.config.ts`:**
```js
{
    optimizeDeps: {
        exclude: ['@mantine/spotlight'],
    },
    ssr: {
        noExternal: ['@mantine/spotlight'],
    },
}
```
### Carousel

**`vite.config.ts`:**
```js
{
    optimizeDeps: {
        exclude: ['@mantine/carousel'],
    },
    ssr: {
        noExternal: ['@mantine/carousel'],
    },
}
```

### Dropzone

**`vite.config.ts`:**
```js
{
    optimizeDeps: {
        exclude: ['@mantine/dropzone'],
    },
    ssr: {
        noExternal: ['@mantine/dropzone'],
    },
}
```
### NavigationProgress

**`vite.config.ts`:**
```js
{
    optimizeDeps: {
        exclude: ['@mantine/nprogress'],
    },
    ssr: {
        noExternal: ['@mantine/nprogress'],
    },
}
```

### Modales Manager

**`vite.config.ts`:**
```js
{
    optimizeDeps: {
        exclude: ['@mantine/modals'],
    },
    ssr: {
        noExternal: ['@mantine/modals'],
    },
}
```

### Rich text editor

**`vite.config.ts`:**
```js
{
    optimizeDeps: {
        exclude: ['@mantine/modals'],
    },
    ssr: {
        noExternal: ['@mantine/modals'],
    },
}
```


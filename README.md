# usage

1. pnpm i vite-plugin-virtual-modules -D
2. config in `vite.config.ts`
```
import virtualModule from 'vite-plugin-virtual-modules'

export default defineConfig({
...
plugins: [
virtualModule({
modules: [
{
          moduleName: 'dynamicConsole',
          moduleValue: 'console.log("demo");',
        }
],
// prefix: 'virtual'
})
]
...
})
```

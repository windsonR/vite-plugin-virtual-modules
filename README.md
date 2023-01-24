# How to use

1. `pnpm i vite-plugin-virtual-modules -D`
2. config in `vite.config.ts`
```
import virtualModule from 'vite-plugin-virtual-modules'

export default defineConfig({
...
    plugins: [
        virtualModule({
            modules: [{
                moduleName: 'demo',
                moduleValue: 'console.log("demo");',
            },{
                moduleName: 'exportDemo',
                moduleValue: 'export const exportDemo ()=>{console.log("demo")}',
            }],
            // prefix: 'virtual'
        })
    ]
...
})
```

3. In `js`/`ts` file

```
import 'virtual:demo';
import { exportDemo, } from 'virtual:exportDemo';
```

import { defineConfig } from 'vite'
import VirtualModule from './index'

export default defineConfig({
  plugins: [
    VirtualModule({
      modules: [
        {
          moduleName: 'virtualDemo',
          moduleValue: 'console.log("demo")'
        }
      ]
    })
  ]
})

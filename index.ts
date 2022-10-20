import type { Plugin, } from 'vite'

export interface VirtualModuleInfo {
  moduleName: string
  moduleValue: string
}

export interface VirtualModuleOptions {
  modules?: Array<VirtualModuleInfo>
  prefix?: string
}

export default (options: VirtualModuleOptions): Plugin => {
  const { prefix = 'virtual', modules = [], } = options
  return {
    name: 'vite-plugin-virtual-module',
    resolveId (id) {
      for (const module of modules) {
        const { moduleName, } = module
        const vName = `${prefix}:${moduleName}`
        if (id === vName) {
          return '\0' + vName
        }
      }
    },
    // @ts-ignore
    load (id) {
      for (const module of modules) {
        const { moduleValue, moduleName, } = module
        const vName = `\0${prefix}:${moduleName}`
        if (id === vName) {
          return moduleValue
        }
      }
    },
  }
}

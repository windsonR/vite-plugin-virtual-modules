import type { Plugin, } from 'vite'

export interface VirtualModuleInfo {
  moduleName: string
  moduleValue: string
}

export interface VirtualModuleOptions {
  /**
   * declare virtual modules
   */
  modules?: Array<VirtualModuleInfo>
  /**
   * prefix for virtual module
   */
  prefix?: string
}
const CACHED_VIRTUAL_MODULES_MAP: Map<string,string> = new Map()

export default ({ prefix = 'virtual', modules = [], }: VirtualModuleOptions): Plugin => {
  modules.forEach(({moduleName, moduleValue})=>{
    CACHED_VIRTUAL_MODULES_MAP.set(`\0${prefix}:${moduleName}`, moduleValue)
  })
  return {
    name: 'vite-plugin-virtual-module',
    resolveId (id) {
      if (CACHED_VIRTUAL_MODULES_MAP.has(`\0${id}`)) {
        return `\0${id}`
      }
    },
    async load (id): Promise<string|null> {
      if (CACHED_VIRTUAL_MODULES_MAP.has(id)) {
        return CACHED_VIRTUAL_MODULES_MAP.get(id)!
      }
      return null
    },
  }
}

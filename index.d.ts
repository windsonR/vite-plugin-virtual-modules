import type { Plugin } from 'vite';
export interface VirtualModuleInfo {
    moduleName: string;
    moduleValue: string;
}
export interface VirtualModuleOptions {
    modules?: Array<VirtualModuleInfo>;
    prefix?: string;
}
declare const _default: (options: VirtualModuleOptions) => Plugin;
export default _default;

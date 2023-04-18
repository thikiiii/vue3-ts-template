import { defineConfig, loadEnv } from 'vite'
import * as path from 'path'
import { createVitePlugins } from './build/vite/plugins'
import { wrapperEnv } from './build/utils'
import { proxyConfig } from './build/vite/proxy'

export default defineConfig(({ command, mode }) => {
    // 是否生产环境
    const isBuild = command === 'build'
    const root = process.cwd()
    // 获取并包装 .env 环境变量
    const viteEnv = wrapperEnv(loadEnv(mode, root))
    const { VITE_PORT, VITE_PUBLIC_PATH, VITE_DELETE_CONSOLE } = viteEnv
    return {
        root,
        base: VITE_PUBLIC_PATH,
        plugins: createVitePlugins(viteEnv, isBuild),
        server: {
            host: true,
            port: VITE_PORT,
            proxy: proxyConfig
        },
        resolve: {
            // 别名
            alias: {
                '@': path.resolve('src'),
                '#': path.resolve('types')
            },
            extensions: [ '.js', '.ts', '.tsx', '.jsx', '.vue' ]
        },
        css: {
            preprocessorOptions: {
                less: {
                    additionalData: `@import "${ path.resolve('src/assets/styles/theme/index.less') }";`,
                    javascriptEnabled: true
                }
            }
        },
        build: {
            reportCompressedSize: true,
            sourcemap: false,
            chunkSizeWarningLimit: 1000,
            rollupOptions: {
                output: {
                    manualChunks: {
                        echarts: [ 'echarts' ]
                    }
                }
            }
        },
        esbuild: { pure: VITE_DELETE_CONSOLE ? [ 'console.log', 'debugger' ] : [] },
        optimizeDeps: {
            include: [ 'echarts', 'lodash-es', 'motion' ]
        }
    }
})

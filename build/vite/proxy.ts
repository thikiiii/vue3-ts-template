import { ProxyOptions } from 'vite'

// 代理配置
export const proxyConfig: Record<string, string | ProxyOptions> = {
    '/api': {
        target: 'http://www.xxx.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
    }
}

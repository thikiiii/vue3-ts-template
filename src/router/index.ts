import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'


const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes: []
})

export const setupRouter = async (app: App<Element>) => {
    app.use(router)
    await router.isReady()
}

export default router

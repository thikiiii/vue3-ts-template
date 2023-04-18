import type { Router } from 'vue-router'
import { useTitle } from '@vueuse/core'
import guardTactics from '@/router/guard/guardTactics'
import NProgress from 'nprogress'

export const createGuard = (router: Router) => {
    router.beforeEach((to, from, next) => {
        NProgress.start()
        guardTactics(to, from, next)
    })

    router.afterEach(to => {
        useTitle(to.meta.title)
        NProgress.done()
    })
}

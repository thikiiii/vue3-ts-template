import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
// 守卫策略
const guardTactics = (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
) => {
    console.log(to)
    console.log(from)
   next()
}

export default guardTactics

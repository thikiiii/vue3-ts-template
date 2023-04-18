/*
// 需要权限的路由模块列表
import { RouteRecordRaw } from 'vue-router'
import { Sort } from '@/enums/common'
import { matchUrl } from '@/utils/regularCheck'
import { RoleEnum } from '@/enums/auth'
import RouterConfig from '@/config/router'
import { ROUTE_ROOT } from '@/router/routes'


export class RouterHelpers {
    // 前端路由模块列表
    static readonly ROUTER_MODULES_LIST = import.meta.glob('../modules/!**.ts', { eager: true })

    // 页面组件
    static readonly VIEW_COMPONENTS = import.meta.glob('@/views/!**!/!**.vue')

    // 前端路由列表
    static routeList = Object.keys(this.ROUTER_MODULES_LIST).reduce<Route.RouteRecordRaw[]>((routerModules, routerKey) => {
        const router = (this.ROUTER_MODULES_LIST[routerKey] as any).default
        if (!(router instanceof Object)) return routerModules
        routerModules.push(router)
        return routerModules
    }, [])

    // 获取用户路由
    static getUserRouteList(roles: RoleEnum[]) {
        // 不需要授权
        const noNeedAuth = (route: Route.RouteRecordRaw) => !route.meta?.roles?.length

        // 已授权
        const hasAuth = (route: Route.RouteRecordRaw) => route.meta?.roles?.some(role => roles.includes(role))

        const getFrontRoute = (routeList: Route.RouteRecordRaw[]) => routeList.reduce<Route.RouteRecordRaw[]>((userRoute, route) => {
            // PUSH 权限路由
            const pushAuthRoute = () => {
                const cRoute = { ...route }
                userRoute.push(cRoute)

                if (cRoute.children?.length) {
                    cRoute.children = getFrontRoute(cRoute.children)
                    // 排序 升序
                    this.sortRoutes(cRoute.children, Sort.Ascending)
                }

                return userRoute
            }
            if (noNeedAuth(route) || hasAuth(route)) return pushAuthRoute()
            return userRoute
        }, [])
        const userRoutes = getFrontRoute(this.routeList)
        // 排序 升序
        this.sortRoutes(userRoutes, Sort.Ascending)
        return userRoutes
    }

    // 获取页面组件
    static getViewComponent(route: Route.RouteRecordRaw) {
        // 组件路径
        const componentPath = this.transformRouteNameToComponentPath(route.name as string)
        const viewComponent = Object.keys(this.VIEW_COMPONENTS).find(path => path === componentPath)
        if (!viewComponent) console.warn('没有找到组件：', componentPath)
        return this.VIEW_COMPONENTS[viewComponent as string]
    }

    // 自定义路由转 vue 路由
    static transformCustomRouteToVueRoute(route: Route.RouteRecordRaw) {
        // 如果是外链就不转vue路由
        if (this.isExternalLink(route.path)) return undefined
        let vueRoute = { ...route, component: undefined } as RouteRecordRaw
        switch (route.component) {
                // 空白页面
            case 'blank':
                vueRoute.component = this.getViewComponent(route)
                break
                // 菜单
            case 'self':
                vueRoute.component = this.getViewComponent(route)
                break
                // 没有目录的菜单
            case 'basic-self':
                // 一级路由转二级路由
                vueRoute = {
                    ...ROUTE_ROOT,
                    component: () => import('@/layout/index.vue'),
                    children: [
                        {
                            ...route,
                            component: this.getViewComponent(route)
                        } as RouteRecordRaw
                    ]
                }
                break
                // 基础布局
            case 'basic':
                // 访问目录路由 自动重定向到目录下的第一个子菜单
                if (RouterConfig.AUTO_REDIRECT_CHILD_FIRST_MENU && !vueRoute.redirect && vueRoute.children?.length) {
                    vueRoute.redirect = vueRoute.children[0].path
                }
                vueRoute.component = () => import('@/layout/index.vue')
                break
                // 多级布局
            case 'multi':
                vueRoute.component = undefined
                break
        }
        return vueRoute
    }

    // 批量自定义路由转 vue 路由
    static transformCustomRoutesToVueRoutes(routes: Route.RouteRecordRaw[]) {
        return routes.reduce<RouteRecordRaw[]>((vueRoutes, route) => {
            const vueRoute = this.transformCustomRouteToVueRoute(route)
            if (route.children?.length && vueRoute) vueRoute.children = this.transformCustomRoutesToVueRoutes(route.children)
            vueRoute && vueRoutes.push(vueRoute)
            return vueRoutes
        }, [])
    }

    // 路由name 转 组件路径
    static transformRouteNameToComponentPath(name: string) {
        return `/src/views/${ name.replaceAll('_', '/') }/index.vue`
    }

    // 排序路由, 默认升序
    static sortRoutes(routes: Route.RouteRecordRaw[], type: Sort) {
        routes.sort((a, b) => {
            if (type === Sort.Ascending) return Number(a.meta?.order) - Number(b.meta?.order)
            if (type === Sort.Descending) return Number(b.meta?.order) - Number(a.meta?.order)
            return 0
        })
    }

    // 是否外链
    static isExternalLink(url) {
        return matchUrl.test(url)
    }

    // 打开外链
    static openTheLink(url: string) {
        const open = window.open('_blank')
        if (open) open.location = url
    }
}
*/

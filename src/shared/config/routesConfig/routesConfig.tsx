import { RouteProps } from "react-router-dom"

export const enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT] : '/about'
}

export const routesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <div />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.main,
        element: <div />
    }
}
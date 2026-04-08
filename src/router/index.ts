import {createBrowserRouter, type RouteObject} from "react-router-dom"
import {lazy} from "react";

const routes: RouteObject[] = [
    {
        path: "/",
        Component: lazy(() => import("@/layouts/basicLayout")),
        children: [
            {
                path: "/",
                Component: lazy(() => import("@/pages/home"))
            }
        ]
    }
]

const router = createBrowserRouter(routes);
export default router;
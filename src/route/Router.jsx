import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Config } from './Config'

const Page404 = lazy(() => import('../layout/error/Page404') )

const Router = () => {

    const renderRoutes = (routes, contextPath) => {
        const children = []
        const renderRoute = (item, routeContextPath) => {
            let newContextPath = item.path ? `${routeContextPath}/${item.path}`
                : routeContextPath
            newContextPath = newContextPath.replace(/\/+/g, '/')
            if (item.childRoutes){
                const childRoutes = renderRoutes(item.childRoutes, newContextPath)
                children.push(
                    <Route
                        key={newContextPath}
                        render={(props) => (
                            <item.component {...props}>{childRoutes}</item.component>
                        )}
                        path={newContextPath}
                        exact
                    />
                )
                item.childRoutes.forEach((r) => renderRoute(r, newContextPath))
            }
            children.push(
                <Route
                    key={newContextPath}
                    component={item.component}
                    path={newContextPath}
                    exact
                />
            )
            console.log(newContextPath);
        }
        routes.forEach((item) => renderRoute(item, contextPath))
        return <Switch>{children}</Switch>
    }
    const routes = renderRoutes(Config, '/')
    
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Switch>
                {routes}
                <Route component={Page404}/>
            </Switch>
        </Suspense>
    )
}

export default Router

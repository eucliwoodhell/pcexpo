import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Config } from './Config'

// Cargar renderización layout 404
const Page404 = lazy(() => import('../layout/error/Page404') )

const Router = () => {
    // Ciclo inicio de renderización de ruta 
    const renderRoutes = (routes, contextPath) => {
        // array que va almacenar todos los router items
        const children = []
        // funcion que recorre lista config del archivo config
        const renderRoute = (item, routeContextPath) => 
        {
            // newContextPath : verificar si el item tiene un path en el caso
            // que tenga una path se concadena el routerContextPath (/)
            let newContextPath = item.path ? `${routeContextPath}/${item.path}`
                : routeContextPath
            // Eliminar si tiene mas de una /
            newContextPath = newContextPath.replace(/\/+/g, '/')
            // Verificar si el item tiene algún hijo a recorrer
            if (item.childRoutes){
                // Genero el ciclo nuevo de renderización para los item padres
                const childRoutes = renderRoutes(item.childRoutes, newContextPath)
                // Al terminar ciclo inicio
                // Almacenar rutas padre con sus componentes y aplicar rutas hijos
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
                // Crear rutas hijos
                item.childRoutes.forEach((r) => renderRoute(r, newContextPath))
            }
            // Almacenar rutas padres con su componente
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
        // llamar función para recorrer item
        routes.forEach((item) => renderRoute(item, contextPath))
        return <Switch>{children}</Switch>
    }

    // Pasar config y path iniciar a la funcion renderRouter
    const routes = renderRoutes(Config, '/')
    
    // suspense = await, ya que los componente lazy son una promesa (división de codigo)
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

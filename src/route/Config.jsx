import { lazy } from 'react'
import ItemListContainer from '../components/product/itemList/ItemListContainer'
import ItemDetailContainer from '../components/product/itemDetail/ItemDetailContainer'
import Cart from '../components/cart/Cart'
// import Form from '../components/form/Form'

// NOTE
// Cargar de forma renderizada los componente en forma de promesas
// (Se utiliza para generar un render dentro de un componente)
const Home = lazy(() => import( '../layout/home/Home' ) )
const About = lazy(() => import( '../layout/about/About' ) )
const Order = lazy(() => import('../layout/order/Order'))


// NOTE
// Usar logica de  Herencia padre e hijo mediante sub item
// Creo lista con el menu asociado al usuario invitado
// panth : url de navegación
// name  : nombre del item a navegar
// component : componente asociado a la navegación
// childrouter : item hijo

// NOTE
// En base de datos se veria lo siguiente:
// | id | id_children | name | key | icon 

const invited = {
    path : '/',
    name : 'home',
    component: Home,
    childRoutes : [
        {
            path : '/',
            exact: true,
            component : Home,
        },
        {
            path: '/product',
            exact: true,
            component: ItemListContainer,
            childRoutes: [
                {
                    path: '/category/:id',
                    exact: true,
                    component: ItemListContainer,
                }
            ]
        },
        {
            path: '/product/detail/:id',
            exact: true,
            component: ItemDetailContainer,
        },
        {
            path: '/about',
            exact: true,
            component: About,
        },
        {
            path: '/cart',
            exact: true,
            component: Cart,
        },
        {
            path: '/form',
            exact: true,
            component: Order,
        },
    ] 
}

export const Config = [invited]
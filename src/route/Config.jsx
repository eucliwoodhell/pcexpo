import { lazy } from 'react'
import ItemListContainer from '../components/product/itemList/ItemListContainer'
import ItemDetailContainer from '../components/product/itemDetail/ItemDetailContainer'

const Home = lazy(() => import( '../layout/home/Home' ) )
const About = lazy(() => import( '../layout/about/About' ) )

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
            component: About,
        },
    ] 
}

export const Config = [invited]
import { lazy } from 'react'
import { PublicLayout } from '../layout/public/Public'

const Home = lazy( () => import( '../views/home/Home' ) )
const About = lazy( () => import( '../views/about/About' ) )

const public = {
    path : '/',
    name : 'home',
    component: PublicLayout,
    children : [
        {
            path : '/',
            component : Home,
        },
        {
            path: '/about',
            component: About,
        },
    ] 
}

export const main = [public]
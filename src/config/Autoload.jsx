export const title = "E-commerce website"
export const description = "Welcome to my react and node proyect to build a fully-functional e-commerce website."

export const sections = [
    { name: 'Home', url: '/' },
    { name: 'Product', url: '/product' },
    {
        name: 'Category', url: '/category/', 
        items: [ "Monitors", "Mouses", "Notebooks", "Desk" ] },
    { name: 'About', url: '/about' },
]

//1) Todos los hooks siempre se ejecutan
//2) Los hooks solo pueden estar adentro de una funcion
//3) Los hooks no pueden estar en situaciones condicionales
//4) Los hooks solo se pueden ejecutar en componentes funcionales

/**
 * https://reactjs.org/docs/hooks-reference.html
 *
 * useState : nos da un estado
 * useReducer : nos da un estado usando el patron reducer
 * useRef : nos da un estado que no genera renders
 * useEffect : nos da un efecto secundario asincronico post render
 * useLayoutEffect : nos da un efecto secundario sincronico pre render
 * useContext : nos permite consumir un contexto
 * useMemo : memoriza una variable local que no sea una funcion (propiedaes precomputadas)
 * useCallback : memoriza una variable local que sea una funcion
 *
 *
 * https://reactrouter.com/web/api/Route
 */
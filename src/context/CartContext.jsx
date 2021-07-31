import React, { useContext, useState } from 'react'

export const CartContext = React.createContext()

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cartCount, setCount] = useState(0)
    const [cart, setCart] = useState([])

    const addCart = ({product}, qty ) => {
        let count = cart.length
        if ( isInCart(product.id) ){
            const _cart = cart.reduce ( (acc, obj) => {
                if (obj.id === product.id){
                    obj.qty = qty
                }
                return [...acc, obj]
            }, [])
            setCart(_cart)
        }else{
            setCart( arr => [...arr, {...product, qty}] )
            count = 1 + cart.length
        }
        setCount(prev => count)
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const delCart = (index) => {
        let _cart = cart
        _cart.splice(index, 1)
        setCount(prev => prev - 1)
        setCart(_cart)
        console.log(_cart, index)
    }

    const clearCart = () => {
        setCart([])
    }
    
    return (
        <CartContext.Provider value={{ cartCount, cart, addCart, delCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
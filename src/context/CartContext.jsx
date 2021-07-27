import React, { useContext } from 'react'

export const CartContext = React.createContext()

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const addCart = ({product}, qty ) => {
        console.log(qty, product);
    }

    return (
        <CartContext.Provider value={{ addCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
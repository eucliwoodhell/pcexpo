import React, { useContext, useState, useEffect } from 'react'
import { getFirebaseAppStore } from '../services/firebase'

export const CartContext = React.createContext()

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [product, setProduct] = useState([])
    const [cartCount, setCount] = useState(0)
    const [totalSale, setTotalSale] = useState(0)
    const [cart, setCart] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        const db = getFirebaseAppStore()
        const itemsCollection = db.collection('product')
        itemsCollection.get().then((value) => {
            if (value.size === 0) {
                console.log('No results')
            }
            const aux = value.docs.map(doc => {
                return { ...doc.data(), id: doc.id}
            })
            setProduct(aux)
        })
    }

    const getDataDetail = async(id) => {
        const db = getFirebaseAppStore()
        const itemsCollection = db.collection('detail')
        const detail = await itemsCollection.doc(id).get()
        return detail
    }

    const addCart = ({product}, qty ) => {
        let count = cart.length
        addTotalSale(product.price * qty)
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

    const addTotalSale = (price) => {
        setTotalSale(prev => price + prev)
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const delCart = (index) => {
        let _cart = cart
        addTotalSale(-Math.abs(_cart[index].price * _cart[index].qty))
        setCount(prev => prev - 1)
        _cart.splice(index, 1)
        setCart(_cart)
        console.log(_cart, index)
    }

    const clearCart = () => {
        setCart([])
    }
    
    const createOrder = (name, email, phone) =>{
        const db = getFirebaseAppStore()
        console.log(name, email, phone)
        //Creamos una coleccion orders en firebase
        const order = { buyer: { name, phone, email }, item: cart, total: totalSale };
        db.collection("orders").add(order).then(({ id }) => {
            console.log(id);
        });
    }

    return (
        <CartContext.Provider value={{ cartCount, cart, totalSale, addCart, delCart, clearCart, product, getDataDetail, createOrder }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
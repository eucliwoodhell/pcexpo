import { React } from 'react'
import ItemCount from './ItemCount'
import { useCartContext } from '../../../context/CartContext'

export const ItemCart = ({ product }) => {
    const { addCart, getDataProductBy } = useCartContext()
    const onAdd = qty  => addCart({product}, qty)
    
    return (
        <div>
            <ItemCount onAdd={onAdd} stock={product.stock} name={product.name}/>
        </div>
    )
}

export default ItemCart

import { React } from 'react'
import ItemCount from './ItemCount'
import { useCartContext } from '../../../context/CartContext'

export const ItemCart = ({ product }) => {
    const { addCart } = useCartContext()
    const onAdd = qty  => addCart({product}, qty)
    return (
        <div>
            <ItemCount onAdd={onAdd} name={product.name}/>
        </div>
    )
}

export default ItemCart

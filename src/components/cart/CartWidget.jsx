import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles, MenuItem, Badge } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useCartContext } from '../../context/CartContext'


const useStyles = makeStyles((theme) => ({
    links: {
        textDecoration: 'none',
        color: 'unset'
    }
}))

export const CartWidget = () => {
    const classes = useStyles()
    const { cartCount } = useCartContext()

    return (
        <NavLink to="/cart" key="/cart" className={classes.links} >
            <MenuItem className={classes.toolbarLink}>
                <Badge badgeContent={cartCount} color="secondary">
                    <ShoppingCartIcon style={{ fontSize: 33 }} />
                </Badge>
            </MenuItem>
        </NavLink>
    )
}

export default CartWidget
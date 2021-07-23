import React from 'react'
import { Box, Button, ButtonGroup } from '@material-ui/core'

export const ItemCart = () => {
    return (
        <Box paddingTop={2}>
            <ButtonGroup disableElevation variant="contained" color="primary" fullWidth>
                <Button>Agregar Carrito</Button>
                <Button>Ir Carritos</Button>
            </ButtonGroup>
        </Box>
    )
}

export default ItemCart

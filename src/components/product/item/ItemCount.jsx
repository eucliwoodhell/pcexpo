import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IconButton, Paper, InputBase, makeStyles, Box, Button, Grid, Snackbar, Typography } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import Alert from '../../alert/Alert'

// useMenu() : sirve para memorizar variables internas de componentes
// useCallback : sirve para memorizar variables internde un componente si son funciones
// memo() : memorizar un componente entero [no te renderice hasta que el prop haya cambiado]
// los estados no se memorizan

const useStyles = makeStyles((theme) => ({
    iconButton: {
        padding: 10,
    },
    paper: {
        padding: '2px 0px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        // marginLeft: theme.spacing(1),
        flex: 1,
        align: 'center',
        textAlign: 'center',
        textAlignLast: 'center'
    },
    links: {
        textDecoration: 'none',
        color: 'unset'
    }
}));

export const ItemCount = ({ onAdd, stock, name }) => {
    const classes = useStyles()
    const [qty, setQty] = useState(0)
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)

    
    const handleClick = () => {
        setOpen(qty > 0 ? true : false)
        setShow(qty > 0 ? true : false)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway'){
            return;
        }
        setOpen(false)
    }

    const buttonClickHandelerMinus = e => {
        setQty(qty === 0 ? 0 : qty - 1)
    }

    const buttonClickHandelerPlus = e => {
        setQty(qty + 1)
    }

    console.log(stock)

    return (
        <div>
            {(stock > 0) ? (
                <>
                <Paper className={classes.paper}>
                    <IconButton className={classes.iconButton} onClick={buttonClickHandelerMinus}>
                        <RemoveIcon />
                    </IconButton>
                    <InputBase disabled className={classes.input} value={qty} />
                    <IconButton className={classes.iconButton} onClick={buttonClickHandelerPlus}>
                        <AddIcon />
                    </IconButton>
                </Paper>
                <Box paddingTop={2}>
                        {show ? (
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <NavLink color="primary" to="/cart" key="/cart" className={classes.links} >
                                        <Button disableElevation fullWidth variant="contained" color="primary">Terminar tu compra</Button>
                                    </NavLink>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Button disableElevation fullWidth variant="contained" color="primary" onClick={() => {onAdd(qty); handleClick()} } >Agregar Carrito</Button>
                                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="success">
                                            Se ha agrego correctamente el producto {name} al carrito
                                        </Alert>
                                    </Snackbar>
                                </Grid>
                                <Grid item xs={6}>
                                    <NavLink  color="primary" to="/cart" key="/cart" className={classes.links} >
                                        <Button disableElevation fullWidth variant="contained" color="primary">Ir Carritos</Button>
                                    </NavLink>
                                </Grid>
                            </Grid>
                        )}
                </Box>
                </>
            ) : (
                <Typography variant="h6" color="initial">Producto Sin Stock</Typography>
            )}
        </div>
    )
}

export default ItemCount
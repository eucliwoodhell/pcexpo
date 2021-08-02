import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles, Container, Grid, IconButton, CardContent, Card, Typography, CardMedia, CardActions, Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { useCartContext } from '../../context/CartContext'
import Alert from '../alert/Alert'

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        marginTop: '100px',
        marginBottom: '100px',
    },
    cart: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        width: "60%",
        flexDirection: 'column',
    },
    contentCart: {
        flex: '1 0 auto',
    },
    cover: {
        width: "100%",
        paddingTop: '20.25%'
    },
    links: {
        textDecoration: 'none',
        color: 'unset',
    }
}))


export const Cart = () => {
    const classes = useStyles()
    const { cart, delCart } = useCartContext()

    console.log(cart);

    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <Grid container spacing={3}>
                    {!cart.length ? ( 
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Alert severity="warning">
                                No hay producto en el carrito para completar la compra!
                                <NavLink to="/product" key="/product" className={classes.links} >
                                    <Button color="primary">
                                        Ver Productos
                                    </Button>
                                </NavLink>
                            </Alert>
                        </Grid>
                    ):(
                        null
                    )}
                    {cart.map((element, index) => {
                        return <Grid item xs={12} sm={12} md={12} lg={12} key={element.id}>
                            <Card className={classes.cart}>
                                <CardMedia
                                    className={classes.cover}
                                    image={element.imgUrl}
                                    title="Live from space album cover"
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.contentCart}>
                                        <Typography component="h5" variant="h5">
                                            {element.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Cantiad : x {element.qty}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Precio : $ {element.price}
                                        </Typography>
                                        <br></br>
                                        <Typography variant="body2" color="textSecondary">
                                            Categoria: {element.category}
                                            <br />
                                            Marca: {element.detail[0].Brand}
                                            <br />
                                            Color: {element.detail[0].Color}
                                            <br />
                                            Tamaño: {element.detail[0].Size}
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={classes.actions}>
                                        <IconButton edge="end" aria-label="delete" color="secondary" onClick={ () => delCart(index) }>
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardActions>
                                </div>
                            </Card>
                        </Grid>
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default Cart
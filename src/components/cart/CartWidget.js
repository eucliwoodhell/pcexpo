import React from 'react'
import { makeStyles, Container, Paper, Grid, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { useCartContext } from '../../context/CartContext'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        marginTop: '100px',
        marginBottom: '100px',
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
    },
}))

// const itemList = (products, element) => {
//     return products.map( (product) => {
//         cloneElement(element, {
//             key: product
//         })
//     })
// } 

export const CartWidget = () => {
    const classes = useStyles()
    const { cart } = useCartContext()

    console.log(cart);
    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <Paper className={classes.paper}>
                    <Grid container justify="center" spacing={3}>
                        <List>
                            {cart.map((element) => {
                                return <Grid align="center" item>
                                    <ListItem>
                                        <ListItemAvatar>

                                        </ListItemAvatar>
                                        <ListItemText>
                                            {element.name}
                                        </ListItemText>
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </Grid>
                            })}
                        </List>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default CartWidget
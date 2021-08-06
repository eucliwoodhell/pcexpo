import { React, useState, useEffect } from 'react'
import { makeStyles, Container, Grid, Typography, Paper } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import ItemCart from '../item/ItemCart';
import { setPrice } from '../../../config/Library'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        marginTop: '100px',
        marginBottom: '100px',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
}));

const getProduct = (products, id) => {
    return products.find(item => item.id === id)
}

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItems] = useState()

    useEffect(() => {
        fetch("https://mocki.io/v1/b294a546-1cff-4aef-aa56-42d718106461")
            .then((response) => response.json())
            .then((res) => {
                // setItems(res.Products.filter(product => product.id === parseInt(id)))
                setItems(getProduct(res.Products, parseInt(id)))
            })
            .catch((err) => console.log(`Response with errors: ${err}`))
    }, [id]);

    const classes = useStyles()
    console.log(item);
    console.log(id);

    return (
        <div className={classes.root}>
            <Container className={classes.content} maxWidth="md">
                {!item ? (
                        'Loading'
                ) : (
                       <Paper className={classes.paper}>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <img
                                        className={classes.img}
                                        src={item.imgUrl}
                                        alt={item.name}
                                    />
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                orem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis amet cumque ipsum obcaecati veniam dolorem. Temporibus vel hic doloremque cum aut placeat perferendis repellendus voluptatem reiciendis, delectus maxime dicta.
                                            </Typography>
                                            <br />
                                            <Typography variant="body2" color="textSecondary">
                                                Categoria: {item.category}
                                                <br />
                                                Marca: {item.detail[0].Brand}
                                                <br />
                                                Color: {item.detail[0].Color}
                                                <br />
                                                Tamaño: {item.detail[0].Size}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                            $ {setPrice(item.price)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <ItemCart product={item} />
                       </Paper>
                )}
            </Container>
        </div>
    )
}

export default ItemDetailContainer
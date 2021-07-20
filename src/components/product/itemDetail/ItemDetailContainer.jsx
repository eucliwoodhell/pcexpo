import { React, useState, useEffect } from 'react'
import { makeStyles, Container, Grid, Card, CardContent, Typography, Paper  } from '@material-ui/core';
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        marginTop: '100px',
        marginBottom: '100px',
        // padding: theme.spacing(12),
    },
    img: {
        width: '100%',
        height: '100%',
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
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Paper elevation={0}>
                                    <img
                                        className={classes.img}
                                        src={item.imgUrl}
                                        alt={item.name}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Card>
                                    <div>
                                        <CardContent>
                                            <Typography component="h2" variant="h5" paragraph>
                                                {item.name}
                                            </Typography>

                                            <Typography variant="subtitle1">
                                                Precio: $ {item.price}
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                Categoria: $ {item.category}
                                            </Typography>
                                            <br/>
                                            <Typography variant="subtitle1">
                                                Marca: {item.detail[0].Brand}
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                Color: {item.detail[0].Color}
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                Tamaño: {item.detail[0].Size}
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis amet cumque ipsum obcaecati veniam dolorem. Temporibus vel hic doloremque cum aut placeat perferendis repellendus voluptatem reiciendis, delectus maxime dicta.
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </Card>
                            </Grid>
                        </Grid>
                )}
            </Container>
        </div>
    )
}

export default ItemDetailContainer
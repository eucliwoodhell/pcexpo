import React from 'react'
import Button from '../../button/Btn'
import ItemCount from './ItemCount';
import {  Grid, makeStyles, Card, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        width: '290px',
        maxWidth: '345px',
    },
    media: {
        height: 150,
        paddingTop: '56.25%'
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        flexGrow: 1,
    },
    cardActions: {
        textAlign: "center",
        marginLeft : "40px",
        marginBottom: '10px'
    },
    link: {
        textDecoration: 'none',
    },
}));

export const Item = (props) => {
    const classes = useStyles()
    return (
        <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
            <Card className={classes.card}>
                <Link to={`/product/detail/${props.items.id}`} className={classes.link} >

                    <CardMedia
                        className={classes.media}
                        image={props.items.imgUrl}
                        title={props.items.name}
                    />
                </Link>
                <CardContent>
                    <Typography variant="h5" align="center" component="h2">
                        {props.items.name}
                    </Typography>
                    <ItemCount/>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button variant="outlined" color="default" text="Agregar al carrito"/>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Item
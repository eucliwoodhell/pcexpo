import { React, useState } from 'react'
import Button from '../../button/Btn'

import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import { 
    Grid, 
    makeStyles, 
    Card, 
    CardMedia, 
    CardContent, 
    Typography, 
    CardActions,
    InputBase, 
    IconButton,
    Paper } from '@material-ui/core';

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
    input: {
        // marginLeft: theme.spacing(1),
        flex: 1,
        align:'center',
        textAlign: 'center',
        textAlignLast : 'center'
    },
    iconButton: {
        padding: 10,
    },
    paper: {
        padding: '2px 0px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
}));

export const Item = (props) => {
    const classes = useStyles(1)
    const[qty, setQty] = useState(0)
    return (
        <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={props.items.imgUrl}
                    title={props.items.name}
                />
                <CardContent>
                    <Typography variant="h5" align="center" component="h2">
                        {props.items.name}
                    </Typography>
                    <div>
                        <Typography align="center">Marca: {props.items.detail.Brand}</Typography>
                        <Typography align="center">Color: {props.items.detail.Color}</Typography>
                        <Typography align="center">Tamaño: {props.items.detail.Size}</Typography>
                    </div>
                    <div>
                        <Paper className={classes.paper}>
                            <IconButton className={classes.iconButton} onClick={ ()=>{ setQty( qty+1 ) } }>
                                <AddIcon/>
                            </IconButton>
                            <InputBase disabled className={classes.input} value={qty}>
                            
                            </InputBase>
                            <IconButton className={classes.iconButton} onClick={() => { setQty( (qty === 0 ? 0 : qty-1)) }}>
                                <RemoveIcon />
                            </IconButton>
                        </Paper>
                    </div>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button variant="outlined" color="default" text="Agregar al carrito"/>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Item
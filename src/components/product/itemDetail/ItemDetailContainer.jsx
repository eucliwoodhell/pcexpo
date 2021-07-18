import React from 'react'
import { makeStyles, Container } from '@material-ui/core';
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
}));

export const ItemDetailContainer = () => {
    const { id } = useParams()
    console.log(id);
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <h1>Hola Mundo</h1>
            </Container>
        </div>
    )
}

export default ItemDetailContainer
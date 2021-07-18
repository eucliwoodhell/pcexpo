import React from 'react'
import { makeStyles, Container } from '@material-ui/core';

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

export const Carousel = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <h1>Carousel</h1>
            </Container>
        </div>
    )
}

export default Carousel
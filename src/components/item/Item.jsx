import React from 'react'
import { Grid, makeStyles, Paper, Card, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 140,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const Item = (props) => {
    const classes = useStyles()
    return (
        <Grid item xs={props.size}>
            <Paper className={classes.paper}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={props.items.imgUrl}
                        title={props.items.name}
                    />
                </Card>
            </Paper>
        </Grid>
    )
}

export default Item
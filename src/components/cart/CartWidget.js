import React from 'react'
import { makeStyles, Container, Paper, Grid, List, ListItem } from '@material-ui/core'

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

export const CartWidget = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        <List>
                            <ListItem>
                                
                            </ListItem>
                        </List>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default CartWidget
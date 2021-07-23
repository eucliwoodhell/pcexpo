import React from 'react'
import { makeStyles, Container, Typography, Paper, Grid } from '@material-ui/core'

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

export const About = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item>
                            <h1>About Page</h1>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" color="initial">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid velit incidunt eveniet error totam itaque nobis, aspernatur commodi obcaecati doloremque tenetur sint placeat vitae earum tempora, modi fugiat explicabo?
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default About
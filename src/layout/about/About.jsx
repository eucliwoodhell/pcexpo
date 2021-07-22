import React from 'react'
import { makeStyles, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        marginTop: '100px',
        marginBottom: '100px',
    },
}))

export const About = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <h1>About Page</h1>
            </Container>
        </div>
    )
}

export default About
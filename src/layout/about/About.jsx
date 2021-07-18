import React from 'react'
import { makeStyles, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        marginTop: '100px',
        marginBottom: '100px',
        // padding: theme.spacing(12),
    },
}))

export const About = () => {
    const classes = useStyles()
    return (
        <div>
            <Container className={classes.content}>
                <h1>About Page</h1>
            </Container>
        </div>
    )
}

export default About
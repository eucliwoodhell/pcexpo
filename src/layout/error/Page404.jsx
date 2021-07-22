import React from 'react'
import { makeStyles, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        marginTop: '100px',
        marginBottom: '100px',
        // backgroundColor: grey[200],
        // background: grey[200],
        // padding: theme.spacing(12),
    },
}))

export const Page404 = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <h1>Error</h1>
            </Container>
        </div>
    )
}

export default Page404
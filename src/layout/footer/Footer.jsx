import React from 'react'
import { Container, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    footer : {
        color: grey[50],
        backgroundColor: grey[900],
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "45px",
        width: "100%",
    }
}))

export const Footer = (props) => {
    const classes = useStyles()
    const {description, title} = props

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
              <Typography variant="h6" alings="center" gutterBottom>
                  {title}
              </Typography>
              <Typography
                variant="subtitle1"
                alings="center"
                component="p"
                >
                  {description}
                    {new Date().getFullYear()}
              </Typography>
            </Container>
        </footer>
    )
}

export default Footer
import React from 'react'
import { Container, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    footer : {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6,0),
        textAlign: "center"
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
                color="textSecondary"
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
import React, { useState } from 'react'
import { makeStyles, Container, TextField, Paper, Grid, Button } from '@material-ui/core'
import { useCartContext } from '../../context/CartContext'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    content: {
        flexGrow: 1,
        marginTop: '100px',
        marginBottom: '100px',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}))

export const Form = () => {
    const classes = useStyles();

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    const { createOrder } = useCartContext()

    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <Paper>
                    <Grid container justify="center" spacing={3}>
                        <Grid align="center" item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                label="Nombre"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onInput={(e) => { setName(e.target.value) }}
                            />
                        </Grid>

                        <Grid align="center" item xs={12} sm={12} md={12} lg={12}>

                            <TextField
                                label="Email"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onInput={(e) => { setEmail(e.target.value) }}
                            />
                        </Grid>

                        <Grid align="center" item xs={12} sm={12} md={12} lg={12}>

                            <TextField
                                label="Numero de teléfono"
                                fullWidth
                                margin="none"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onInput={(e) => { setPhone(e.target.value) }}
                            />

                        </Grid>

                        <Grid align="center" item xs={12} sm={12} md={12} lg={12}>
                            <Button disableElevation fullWidth variant="contained" color="primary" onClick={(e) => createOrder(name, email, phone)}>Enviar</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default Form
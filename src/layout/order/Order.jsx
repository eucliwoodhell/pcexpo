import React from 'react'
import { makeStyles, Container, Paper, Grid } from '@material-ui/core'
import { useCartContext } from '../../context/CartContext'
import { useForm, Form } from '../../components/form/Form'
import Control from '../../components/controls/Control'
import Alert from '../../components/alert/Alert'

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

const initialFValues = {
    fullName: '',
    email: '',
    mobile: '',
}

export const Order = () => {
    const classes = useStyles();

    const { createOrder } = useCartContext()


    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "El nombre es requerido."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email no es valido."
        if ('email' in fieldValues)
            temp.email = fieldValues.email ? "" : "El email es requerido."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimo 10 numeros requeridos."
        setErrors({
            ...temp
        })
        console.log(temp);
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }
    
    const {
        values,
        // setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        console.log(validate());
        if (validate()) {
            createOrder(values.fullName, values.email, values.mobile)
            resetForm()
        }
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <div className={classes.root}>
                <Container className={classes.content}>
                    <Paper>
                        <Grid container justify="center" spacing={3}>
                            <Grid align="center" item xs={12} sm={12} md={12} lg={12}>
                                <Control.Input
                                    name="fullName"
                                    label="Nombre"
                                    value={values.fullName}
                                    error={errors.fullName}
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={handleInputChange}
                                />
                                
                            </Grid>

                            <Grid align="center" item xs={12} sm={12} md={12} lg={12}>

                                <Control.Input
                                    name="email"
                                    label="Email"
                                    value={values.email}
                                    error={errors.email}
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={handleInputChange}
                                />
                            </Grid>

                            <Grid align="center" item xs={12} sm={12} md={12} lg={12}>

                                <Control.Input
                                    name="mobile"
                                    label="Numero de teléfono"
                                    value={values.mobile}
                                    error={errors.mobile}
                                    fullWidth
                                    margin="none"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={handleInputChange}
                                />

                            </Grid>

                            <Grid align="center" item xs={12} sm={12} md={12} lg={12}>
                                <Control.Button disableElevation variant="contained" color="primary" type="submit" text="Enviar"/>
                            </Grid>

                        </Grid>
                    </Paper>
                </Container>
            </div>
        </Form>
    )
}

export default Order
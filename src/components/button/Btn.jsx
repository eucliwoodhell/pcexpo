import React from 'react'
import Button from '@material-ui/core/Button'

export const Btn = (props) => {
    return (
        <Button variant={props.variant} color={props.color}>
            {props.text}
        </Button>
    )
}

export default Btn
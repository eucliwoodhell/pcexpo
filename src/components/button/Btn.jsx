import React from 'react'
import Button from '@material-ui/core/Button'

const Btn = () => {
    return (
        <Button variant="text" color={this.props.color}>
            {this.props.text}
        </Button>
    )
}

export default Btn
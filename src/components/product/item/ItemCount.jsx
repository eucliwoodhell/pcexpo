import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import { IconButton, Paper, InputBase, makeStyles } from '@material-ui/core'
import { React, useState } from 'react'

const useStyles = makeStyles((theme) => ({
    iconButton: {
        padding: 10,
    },
    paper: {
        padding: '2px 0px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        // marginLeft: theme.spacing(1),
        flex: 1,
        align: 'center',
        textAlign: 'center',
        textAlignLast: 'center'
    },
}));

export const ItemCount = () => {
    const classes = useStyles()
    const [qty, setQty] = useState(0)

    return (
        <div>
            <Paper className={classes.paper}>
                <IconButton className={classes.iconButton} onClick={() => { setQty(qty + 1) }}>
                    <AddIcon />
                </IconButton>
                <InputBase disabled className={classes.input} value={qty}>

                </InputBase>
                <IconButton className={classes.iconButton} onClick={() => { setQty((qty === 0 ? 0 : qty - 1)) }}>
                    <RemoveIcon />
                </IconButton>
            </Paper>
        </div>
    )
}

export default ItemCount
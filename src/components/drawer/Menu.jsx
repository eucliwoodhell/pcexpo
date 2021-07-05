import React from 'react'
import Bar from '../navBar/Bar'
import Dra from './Dra'
import { Hidden, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}))

const Drawer = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const callOpen = () => {
        setOpen(!open)
    }

    return (
        <div className={classes.root}>
            <Bar callOpen={callOpen}  />
            {/* <Hidden xsDown>
                <Dra 
                    variant="permanent" 
                    open={true}/>
            </Hidden> */}
            <Hidden smUp>
                <Dra 
                    variant="temporary" 
                    open={open}
                    onClose={callOpen}/>
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
            </div>
        </div>
    )
}

export default Drawer

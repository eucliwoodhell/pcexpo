import React from 'react'
import Bar from '../navBar/Bar'
import Dra from './Dra'
import ItemListContainer from '../product/itemList/ItemListContainer'
import { Hidden, makeStyles, Container } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: grey[100]
    },
    // toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        marginTop: '100px',
        marginBottom: '100px'
        // padding: theme.spacing(12),
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
            {/* <div className={classes.content}>
                <div className={classes.toolbar}>
                </div>
            </div> */}
            <Container className={classes.content}>
                <ItemListContainer/>
            </Container>
        </div>
    )
}

export default Drawer

import React from 'react'
import Bar from '../navBar/Bar'
import Dra from './Dra'
import { Hidden } from '@material-ui/core'

const Drawer = (props) => {
    const [open, setOpen] = React.useState(false)
    const callOpen = () => {
        setOpen(!open)
    }
    return (
        <>
            <Bar callOpen={callOpen} title={props.title} />
            {/* <Hidden xsDown>
                <Dra 
                    variant="permanent" 
                    open={true}/>
            </Hidden> */}
            <Hidden smUp>
                <Dra 
                    variant="temporary" 
                    open={open}
                    onClose={callOpen}
                    title={props.title}/>
            </Hidden>
        </>
    )
}

export default Drawer

import React from 'react'

import {
    makeStyles,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core'

const drawerWidth = 260

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    item:{
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        fontSize: 24,
        fontWeight: 'bold',
    },
    divider: {
        marginTop: theme.spacing(1),
    },
}))

const Dra = (props) => {
    const classes = useStyles()
    return (
        <Drawer 
            className={classes.drawer}
            classes={{paper:classes.drawerPaper}}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}>
            <div className={classes.toolbar}></div>
            <Divider/>
            <List>
                <ListItem className={classes.item}>{props.title}</ListItem>
                <Divider className={classes.divider} />
                {['Home', 'About', 'Cart'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

        </Drawer>
    )
}

export default Dra

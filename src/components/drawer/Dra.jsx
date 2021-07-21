import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    makeStyles,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core'
import { sections } from '../../config/Autoload'

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
                <NavLink to="/" style={{ textDecoration: 'none', color: 'unset' }}>
                    <ListItem className={classes.item}>{props.title}</ListItem>
                </NavLink>
                <Divider className={classes.divider} />
                {/* Menu Phone */}
                {sections.map((element) => (
                    <NavLink to={element.url} key={element.name} style={{ textDecoration: 'none', color: 'unset' }} >
                        <ListItem button>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary={element.name} />
                        </ListItem>
                    </NavLink>
                ))}
                <ListItem button>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Cart" />
                </ListItem>
                <Divider className={classes.divider} />
                <ListItem button>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Login" />
                </ListItem>

            </List>

        </Drawer>
    )
}

export default Dra

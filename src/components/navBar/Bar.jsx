import React from 'react'
import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Container,
  Grid,
  Typography,
  Hidden,
  MenuItem
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { NavLink } from 'react-router-dom'

import Logo from '../logo/Logo'
import { CartWidget } from '../cart/CartWidget'
import { sections } from '../../config/Autoload'

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  toolbarNav: {
    marginLeft: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: 'none',
    color: '#53575A',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
  logo: {
    height: '32px',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-block',
      fontWeight: 'bold',
      paddingTop: '5px',
    },
  },
  brand: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
  grid: {
    flexWrap: 'nowrap',
    paddingRight: '32px',
    height: 60,
    // justifyContent: 'space-between'
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12
  },
}))

const Bar = (props) => {
  const classes = useStyles()
  return (
    <AppBar position="fixed">
      <Container component="header" maxWidth="xl">
        <Grid container className={classes.grid}>
          <div className={classes.brand}>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'unset' }}>
              <Logo className={classes.logo} />
              <Typography
                component="h2"
                variant="h5"
                noWrap
                className={classes.title}
              >
                {props.title}
              </Typography>
            </NavLink>
          </div>
          
          <Toolbar className={classes.toolbarNav}>

            {/* Items menu */}
            <Hidden xsDown>
              {/* Menu Page */}
              {sections.map((element) => (
                <NavLink to={element.url} key={element.name} style={{ textDecoration: 'none', color: 'unset' }} >
                  <MenuItem className={classes.toolbarLink}>
                    {element.name}
                  </MenuItem>
                </NavLink>
              ))}

              {/* Page Cart */}
              <MenuItem>
                <CartWidget />
              </MenuItem>
            
            </Hidden>

            <Hidden mdUp>
              <div className={classes.toolbarButtons}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  className={classes.menuButton}
                  onClick={() => props.callOpen()}>
                  <MenuIcon />
                </IconButton>
              </div>
            </Hidden>
          </Toolbar>

        </Grid>
      </Container>
    </AppBar>
  )
}

export default Bar
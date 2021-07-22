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
  MenuItem, Menu
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
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
  marginLeft: "auto",
  rightToolbar: {
    marginRight: -12
  },
  AppBar: {
    paddingBottom: '10px'
  },
  links:{
    textDecoration: 'none', 
    color: 'unset'
  }
}))


const Bar = (props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const createOption = (element) => {
    if (element.items) {
      const children = []
      for (const key in element.items) {
        children.push(<NavLink key={element.items[key]} to={`${element.url}${element.items[key]}`} className={classes.links}>
            <MenuItem onClick={handleClose}>{element.items[key]}</MenuItem>
          </NavLink>)
      }
      return <div key={element.name}>
        <MenuItem className={classes.toolbarLink} onClick={handleClick}> {element.name} </MenuItem>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={!!anchorEl}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
          {children}
          </Menu>
        </div>
    } else {
      return <NavLink to={element.url} key={element.name} className={classes.links} >
        <MenuItem className={classes.toolbarLink}>
          {element.name}
        </MenuItem>
      </NavLink>
    }
  }

  return (
    <AppBar position="absolute" className={classes.AppBar}>
      <Container component="header" maxWidth="xl">
        <Grid container className={classes.grid}>
          <div className={classes.brand}>
            <NavLink to="/" className={classes.links}>
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
              {sections.map((items) => (
                createOption(items) 
              ))}

              <MenuItem>
                <AccountCircleIcon/>
              </MenuItem>

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
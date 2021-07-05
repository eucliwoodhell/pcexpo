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
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Logo from '../logo'
const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  toolbarNav: {
    overflowX: 'auto',
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
}))

const Bar = (props) => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container component="header" maxWidth="xl">
        <Grid container className={classes.grid}>
          <div className={classes.brand}>
            <Logo className={classes.logo} />
            <Typography
              component="h2"
              variant="h5"
              noWrap
              className={classes.title}
            >
              PCExpo
            </Typography>
          </div>
          <Toolbar className={classes.toolbarNav}>
            <Hidden smDown>
              <Typography className={classes.toolbarLink}>
                Home
              </Typography>
              <Typography className={classes.toolbarLink}>
                About
              </Typography>
            </Hidden>
            <div>
              
            </div>
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
import React from 'react'
import ItemListContainer from '../../components/product/itemList/ItemListContainer'
import Carousel from '../../components/carousel/Carousel'
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: grey[100],
  },
}));

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Carousel/>
      <ItemListContainer/>
    </div>
  )
}

export default Home

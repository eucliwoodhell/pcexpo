import React from 'react'
import ItemListContainer from '../../components/product/itemList/ItemListContainer'
import CarouselContainer from '../../components/carousel/CarouselContainer'
import { makeStyles } from '@material-ui/core'

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
      <CarouselContainer/>
      <ItemListContainer/>
    </div>
  )
}

export default Home

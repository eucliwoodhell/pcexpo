import { Grid, makeStyles  } from '@material-ui/core';
import { React, useState, useEffect} from 'react'
import Item from '../item/Item'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export const ItemListContainer = () => {
    const [items, setItems] = useState()

    useEffect(() => {
        fetch("https://mocki.io/v1/b294a546-1cff-4aef-aa56-42d718106461")
            .then((response) => response.json())
            .then((res) => {
                // console.log(res)
                setItems(res.Products)
            })
            .catch((err) => console.log(`Response with errors: ${err}`))
    }, []);

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {!items ? 'Loading' : items.map((element) => {
                    return <Item key={element.id} items={element} size={4}/>
                })}
            </Grid>
        </div>
    )
}

export default ItemListContainer
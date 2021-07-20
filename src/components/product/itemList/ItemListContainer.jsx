import { Grid, makeStyles, Container  } from '@material-ui/core';
import { React, useState, useEffect} from 'react'
import Item from '../item/Item'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // marginTop: 'px',
        // backgroundColor: grey[100],
        // backgroundColor: 'black'
    },
    content: {
    //     flexGrow: 1,
        marginTop: '100px',
        marginBottom: '100px',
    //     // padding: theme.spacing(12),
    },
}));

export const ItemListContainer = () => {
    const [items, setItems] = useState()

    useEffect(() => {
        fetch("https://mocki.io/v1/b294a546-1cff-4aef-aa56-42d718106461")
            .then((response) => response.json())
            .then((res) => {
                setItems(res.Products)
            })
            .catch((err) => console.log(`Response with errors: ${err}`))
    }, []);
    
    // const getProducts = async () => {
    //     let call = fetch("https://mocki.io/v1/b294a546-1cff-4aef-aa56-42d718106461")
    //     let data = await call
    //     data = data.text()
    //     data = JSON.parse(data)
    //     console.log(data);
    //     // return 
    // }
    // console.log(items);

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <Grid container justify="center" spacing={3}>
                    {!items ? 'Loading' : items.map((element) => {
                        return <Item key={element.id} items={element} size={4}/>
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default ItemListContainer
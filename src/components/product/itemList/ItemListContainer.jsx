import { Grid, makeStyles, Container, Paper } from '@material-ui/core'
import { React, useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { getFirebaseAppStore } from '../../../services/firebase'

import Item from '../item/Item'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        marginTop: '100px',
        marginBottom: '130px',
    },
}));


const getProducts = (products, category) => {
    if (category) {
        products = products.reduce( (acc, obj) => {
            if (obj.category === category) {
                acc.push(obj)
            }
            return acc
        }, [])
    }
    return products
}


export const ItemListContainer = () => {
    const { id } = useParams()
    const [items, setItems] = useState()
    const isMountedRef = useRef(null);

    useEffect(() => {
        fetch("https://mocki.io/v1/b294a546-1cff-4aef-aa56-42d718106461")
            .then((response) => response.json())
            .then((res) => {
                console.log(isMountedRef.current);
                if (isMountedRef.current) {
                    setItems(getProducts(res.Products, id))
                }
            })
            .catch((err) => console.log(`Response with errors: ${err}`))
        return () => isMountedRef.current = false
    }, [id]);

    useEffect(() => {
        isMountedRef.current = true
    })

    useEffect(() =>{
        const firebase = getFirebaseAppStore()
        const collection = firebase.collection('producto')
        // .where("id", "==", 100)
        .get()
        .then((res) =>{
            console.log(res.docs)
            res.forEach(docs => {
                console.log(docs.data())
            })
        })
    })

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <Paper>
                    <Grid container justify="center" spacing={3}>
                        {!items ? 'Loading' : items.map((element) => {
                            return <Item key={element.id} items={element} size={4} />
                        })}
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default ItemListContainer
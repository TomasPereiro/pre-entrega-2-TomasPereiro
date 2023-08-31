import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        let products = []
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((json) => products = json)
            .then(
                () => {
                    const filteredProduct = products.find(prod => prod.id == id)
                    setItem(filteredProduct)

                }
            )
    }, [id])

    return (
        <ItemDetail item={item} />
    )
}
export default ItemDetailContainer;


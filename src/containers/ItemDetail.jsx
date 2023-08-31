import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({ item }) => {
    useEffect(() => {
        console.log(item)

    }, [item])

    return (
        <Card style={{ width: '18rem', height: '35rem' }}>

            <Card.Body>

                <Card.Img style={{ width: '10rem', height: '10rem' }} variant="top" src={item.image} />
                <Card.Title style={{ width: '10rem', height: '10rem' }} >{item.title}</Card.Title>
                <Card.Text>
                    {item.price}
                </Card.Text>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Card.Text>
                    {item.category}
                </Card.Text>

            </Card.Body>
        </Card>

    )
}
export default ItemDetail;
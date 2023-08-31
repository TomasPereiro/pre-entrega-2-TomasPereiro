import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"


//creo el componente y su estado
const ItemListContainer = () => {
    const [items, setItems] = useState([])
    //obtengo mis productos con fetch
    const { id } = useParams()

    useEffect(() => {
        let products = []
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((json) => products = json)
            .then(
                () => {
                    const filteredProducts = products.filter(prod => prod.category === id)
                    if (filteredProducts.length > 0) return setItems(filteredProducts)
                    setItems(products)
                

                }


            )


    }, [id])







 
    return (
        <Container>
            <Row>
                {items.map(item => (
                    <Col key={item.id} lg={4} className='mb-4'>
                        <Card style={{ width: '18rem', height: '28rem' }}>
                            
                            <Card.Body>
                               
                                <Card.Img style={{ width: '10rem', height: '10rem'  }} variant="top" src= {item.image}/>
                                <Card.Title style={{ width: '10rem', height: '10rem'  }} >{item.title}</Card.Title>
                                <Card.Text>
                                   {item.price}
                                </Card.Text>
                                <Link to={`/item/${item.id}`}>Details</Link>
                            </Card.Body>
                        </Card>

                    </Col>


                ))
                }

            </Row>
        </Container>


    )
}

export default ItemListContainer;
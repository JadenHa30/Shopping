import React from 'react';
import {Button, 
    Col, 
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';
import {Link} from 'react-router-dom';


export default function Product(props){
    const {id,name,price,image} = props;
    return(
        <Col md={4} className="mb-5">
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">
                    <Link to={`/products/${id}`}>{name}</Link>
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{price}$</CardSubtitle>
                <Button color="primary" outline>Add to cart</Button>
            </CardBody>
        </Col>
    );
}
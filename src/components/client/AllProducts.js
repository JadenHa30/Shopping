import React from 'react';
import {
    Container,
    Row,
    Col,
    Pagination, 
    PaginationItem, 
    PaginationLink
  } from 'reactstrap';

import NavbarClient from './NavbarClient.js';
import ProductList from './ProductList.js';
import Sidebarclient from './SidebarClient.js';
import Footer from './Footer.js';

export default function AllProducts(){
    
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col md={3}>
                        <Sidebarclient/>
                    </Col>
                    <Col md={9}>
                        <ProductList/>
                        
                    </Col>
                </Row>
            </Container>
        </>
    );
}

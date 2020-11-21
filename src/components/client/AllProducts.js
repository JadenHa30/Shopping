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
                        <Pagination className="mt-5 d-flex justify-content-center" aria-label="Page navigation example">
                            <PaginationItem>
                                <PaginationLink first href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink previous href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                1
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                3
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                4
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                5
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink last href="#" />
                            </PaginationItem>
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
import React from 'react'
import { Col, Row } from 'reactstrap'
import './../../assets/style/common_input.scss'

function CommonQuantityInput(props) {
    return (
        <>
            <Row className="quantity-input">
                <Col md={2} className="minus" onClick={()=>props.onChange&&props.onChange(+1)}>+</Col>
                <Col md={2} className="quantity">{props.value || 1}</Col>
                <Col md={2} className="plus" onClick={()=>props.value>=1 ? (props.onChange&&props.onChange(-1)) : props.value}>-</Col>
            </Row>
        </>
    )
}


export default CommonQuantityInput


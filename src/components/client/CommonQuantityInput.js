import React from 'react'
import { Col, Row } from 'reactstrap'
import './../../assets/style/common_input.scss'

function CommonQuantityInput(props) {
    return (
        <>
            <Row className="quantity-input">
                <Col md={2} className="minus" onClick={()=>props.onChange(+1,true)}>+</Col>
                <Col md={3} className="quantity">
                    <input value={props.value} onChange={event=>{props.onChange(Number(event.target.value), false)}}/>
                </Col>
                <Col md={2} className="plus" onClick={()=> props.value>1 && (props.onChange(-1,true))}>-</Col>
            </Row>
        </>
    )
}


export default CommonQuantityInput


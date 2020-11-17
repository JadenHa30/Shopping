import React from 'react'
import { Col, Row } from 'reactstrap'
import './../../assets/style/common_input.scss'

function CommonQuantityInput(props) {
    return (
        <>
            <Row className="quantity-input">
                <Col md={2} className="minus" onClick={()=>props.onChange&&props.onChange(+1,true)}>+</Col>
                <Col md={3} className="quantity">
                    <input value={props.value || 0} onChange={event=>{props.onChange&&props.onChange(Number(event.target.value), false)}}/>
                </Col>
                <Col md={2} className="plus" onClick={()=>props.value>=1 ? (props.onChange&&props.onChange(-1,true)) : props.value}>-</Col>
            </Row>
        </>
    )
}


export default CommonQuantityInput


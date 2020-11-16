import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

export default class ImageContainer extends Component {
    state = {
        selected: 0
    }
    handleSelect(index){
        this.setState({
            selected: index
        })
    }
    componentDidMount(){
        this.setState({
            items: this.props.items
        })
    }

    render() {
        return (
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    <img src={(typeof this.state.items) !== 'string' ? this.props.items[this.state.selected]: this.state.items}></img>
                </Row>

                {/* If 1 image, no return. Else return that array */}
                {(typeof this.state.items) !== 'string' && <Row className="d-flex justify-content-center">
                    {this.props.items.map((item, index)=>{
                        return (
                            <Col md={2}>
                                <img className="img-items" src={item} onClick={()=>this.handleSelect(index)}></img>
                            </Col>
                        )
                    })}
                </Row>}
            </Container>
        )
    }
}

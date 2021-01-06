import React from 'react'
import { Col, Row } from 'reactstrap'
import Linkedin from '../assets/icon/Linkedin'
import Email from '../assets/icon/Email'
import Phone from '../assets/icon/Phone'
import Git from '../assets/icon/Git'

export default function Contact() {
    return (
        <div id="contact" className="mt-5">
            <h2>Contact Information</h2>
            <p className="mt-5 mb-5">I am always willing to do new challenges, projects and opportunities.
                <br/> Do not hesitate to contact me. 
                <br/>It will be a great honor for me to work with you.</p>
            <Row>
                <Col md={6} className="contact">
                    <Phone/>
                    <p>+358 4578733005</p>
                </Col>
                <Col md={6} className="contact">
                    <Email/>
                    <p>duongha300595@gmail.com</p>
                </Col>
                <Col md={6} className="contact">
                    <Linkedin/>
                    <p>linkedin.com/in/duong-ha-57734b172/</p>
                </Col>
                <Col md={6} className="contact">
                    <Git/>
                    <p>github.com/duongha1</p>
                </Col>
            </Row>
        </div>
    )
}

import React, { Component } from 'react'
import {
    Container
  } from 'reactstrap';
import Contact from './Contact';
import Intro from './Intro';
import Projects from './Projects';


export default function MainContent() {
        return (
            <Container className="mt-5">
                <Intro/>
                <Projects/>
                <Contact/>
            </Container>
        )
}

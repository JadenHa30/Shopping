import React  from 'react';
import { Container } from 'reactstrap';
import Bars from '../assets/icon/BarsSolid'
import {Link} from 'react-scroll'


export default class Navbar extends React.Component{
    state={
        open: false
    }
    toggleMenu=()=>{
        this.setState({
            open: !this.state.open
        })
        console.log("yes")
    }
    render(){
        return (
            <Container>
                <div className="d-flex mt-5 nav-custom">
                    <div className="nav-left">
                        <div className="logo mr-3"><span>D</span></div>
                        <div className="d-block">
                            <h3>Duong Ha</h3>
                            <p>Web Developer</p>
                        </div>
                    </div>
                    <div className="menu" onMouseEnter={this.toggleMenu}>
                    {!this.state.open && <Bars />}
                    </div>
                    {this.state.open && 
                        <ul onMouseLeave={this.toggleMenu}>
                            <li><Link to="intro" spy={true} smooth={true}>About me</Link></li>
                            <li><Link to="projects" spy={true} smooth={true}>My Projects</Link></li>
                            <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                        </ul>
                    }
                </div>
            </Container>
        );
    }
}

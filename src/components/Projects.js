import axios from 'axios'
import React from 'react'
import { Row,Col } from 'reactstrap'

export default class Projects extends React.Component {
    state={
        project:[],
        isHovering: false,
        index: 0
    }
    componentDidMount(){
        axios.get("https://5f57af681a07d600167e72d2.mockapi.io/projects")
            .then(res=>{
                this.setState({
                    project: res.data
                })
                console.log(this.state.project)
            })
    }
    handleHover=(index)=>{
        this.toggleHover()
        this.setState({
            index: index
        })
    }
    toggleHover=()=>{
        this.setState({
            isHovering: !this.state.isHovering
        })
    }
    render(){
        return (
            <div id="projects" className="mt-5">
                <h2>Projects</h2>
                <Row>
                    {
                        this.state.project.map((project,index)=>{
                            return <Col md={6}>
                                        <a href={project.link}>
                                            <div className="project m-3">
                                                <img src={project.img} 
                                                    key={index}
                                                    onMouseEnter={()=>this.handleHover(index)}
                                                    
                                                />
                                                { //if the current index equals to index in state and isHovering is true then showing div
                                                    (this.state.index == index && this.state.isHovering) && 
                                                    <div className="description" onMouseLeave={this.handleHover}>
                                                        <h3>{project.name}</h3>
                                                        <p>{project.des}</p>
                                                        <a href={project.video}>Video Demo</a>
                                                    </div> 
                                                }                            
                                            </div>
                                        </a>
                                    </Col>
                        })
                    }
                </Row>
                
            </div>
        )
    }
}

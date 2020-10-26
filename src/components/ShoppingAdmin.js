import React, { Component } from 'react';
import "../admin.scss";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

class Shopping extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sidebar_open: true
         }
    }
    toggleSidebar = () => {
        this.setState({
            sidebar_open:!this.state.sidebar_open
        });
    }
    render() { 
        return (
            <div className="row">
                {/* sidebar close */}
                <div className="col-md-3" style={{'display':this.state.sidebar_open ? 'block' : 'none'}}>
                    <Sidebar></Sidebar>
                </div>
                <div className={this.state.sidebar_open?'col-md-9':'col-md-12'}>
                    <Navbar toggleSidebar={this.toggleSidebar}></Navbar>
                    <MainContent></MainContent>
                </div>
            </div>
        );
    }
}
 
export default Shopping;
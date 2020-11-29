import React, { Component } from 'react';
import "./../../assets/style/admin.scss"
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
    componentDidMount(){
        //when user has not login
        const token = window.localStorage.getItem('admin_token');
        if(!token){
            this.props.history.push('/admin/login')
        }
    }
    toggleSidebar = () => {
        this.setState({
            sidebar_open:!this.state.sidebar_open
        });
    }
    render() { 
        return (
            <div className="container-fluid">
                <div className="row">
                    {/* sidebar close */}
                    <div className="col-md-3 bg" style={{'display':this.state.sidebar_open ? 'block' : 'none'}}>
                        <Sidebar></Sidebar>
                    </div>
                    <div className={this.state.sidebar_open?'col-md-9':'col-md-12'}>
                        <Navbar toggleSidebar={this.toggleSidebar}></Navbar>
                        <MainContent></MainContent>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Shopping;
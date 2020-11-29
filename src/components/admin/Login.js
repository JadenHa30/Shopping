import React from 'react';
import { Button,Card, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';


export default class Login extends React.Component{
    state={
        email:"",
        password:""
    }
    componentDidMount(){
        //when user has already login
        const token = window.localStorage.getItem('admin_token');
        if(token){
            this.props.history.push('/admin')
        }
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleLogin=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3001/login',{
            ...this.state
        }).then(res=>{
            console.log(res);
            const token = res.data;
            window.localStorage.setItem('admin_token', token);
            Swal.fire({
                title: "Login Succesfully",
                timer: 1000,
                icon: 'success'
            }).then(()=>{
                this.props.history.push('/admin')
            })
        }).catch(err=>{
            console.log(err)
            Swal.fire({
                title: "Login Unsuccesfully",
                timer: 1000,
                icon: 'error'
            })
        })
    }
    
    render(){
        return(
            <div className="login-page d-flex justify-content-center align-items-center">
                <Card className="login-modal">
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={3}>Email</Label>
                            <Input type="email" 
                                    name="email" 
                                    id="Email" 
                                    placeholder="with a placeholder" 
                                    onChange={this.handleChange}
                                    />
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword" sm={3}>Password</Label>
                            <Input type="password" 
                                    name="password" 
                                    id="Password" 
                                    placeholder="password placeholder"
                                    onChange={this.handleChange} 
                                    />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Card>
            </div>
        );
    }
}
import React from 'react';
import { Button,Card, Form, FormGroup, Label, Input} from 'reactstrap';

export default function Login(){
    return(
        <div className="login-page d-flex justify-content-center align-items-center">
            <Card className="login-modal">
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={3}>Email</Label>
                        <Input type="email" name="email" id="Email" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={3}>Password</Label>
                        <Input type="password" name="password" id="Password" placeholder="password placeholder" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Card>
        </div>
    );
}
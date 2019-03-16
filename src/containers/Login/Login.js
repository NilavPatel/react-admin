import React, { Component } from "react";
import './Login.css';
import { Form, Button } from 'react-bootstrap';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.state = {
            isShowErrorMessage: false
          }
    }

    onLogin(e) {
        e.preventDefault();
        var form = e.currentTarget;
        if (form.UserName.value === 'admin' && form.Password.value === 'admin123') {
            this.props.history.push("/Home");
            return;
        }
        this.setState({
            isShowErrorMessage: true
          })
    }

    render() {
        return (
            <div>
                {this.state.isShowErrorMessage && <div class="alert-text">Invalid credentials</div>}
                <Form onSubmit={this.onLogin}>
                    <Form.Group controlId="UserName">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter user name" />
                    </Form.Group>

                    <Form.Group controlId="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
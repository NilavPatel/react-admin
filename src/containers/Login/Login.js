import React, { Component } from "react";
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
            <div className="login-panel h-100">
                <div className="row justify-content-center no-gutters d-flex align-items-center h-100">
                    <div className="col col-md-4">
                        {this.state.isShowErrorMessage && <div className="alert-text">Invalid credentials</div>}
                        <Form onSubmit={this.onLogin}>
                            <Form.Group controlId="UserName" >
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter user name" />
                            </Form.Group>
                            <Form.Group controlId="Password" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="btn-block">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
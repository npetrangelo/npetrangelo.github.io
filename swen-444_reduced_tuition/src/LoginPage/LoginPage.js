import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './LoginPage.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FollowingPage from '../FollowingPage/FollowingPage'
import {NavLink} from "react-router-dom";

class LoginPage extends React.Component {

  render() {
    return (
      <Container className="SubWindow">
        <Container className="Panel">
          <Container className="InputField">
            <Form className="Form">
              <Form.Group>
                <Form.Label >Username</Form.Label>
                <Form.Control type="username" placeholder="Username"/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
            </Form>
            <NavLink to="/following">
              <Button className="LoginButton">
                Login
              </Button>
            </NavLink>
          </Container>
        </Container>
      </Container>
  );
  }
}

export default LoginPage;
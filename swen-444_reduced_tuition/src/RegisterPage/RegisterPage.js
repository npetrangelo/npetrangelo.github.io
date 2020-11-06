import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {NavLink} from "react-router-dom";

class RegisterPage extends React.Component {
  
    render() {
      return (
        <Container className="SubWindow">
          <Container className="Panel">
			  <Container className="Title">
				Register
			  </Container>
			  <Container>
				<Form bsPrefix="input-group mb-3">
					<Form.Group>
						<Form.Label>Username</Form.Label>
						<Form.Control type="username" placeholder="Username"/>
					</Form.Group>
					<Form.Group>
						<Form.Label>E-mail</Form.Label>
						<Form.Control type="email" placeholder="JohnDoe@gmail.com"/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password"/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type="password" placeholder="Password"/>
					</Form.Group>
				</Form>
				<NavLink to="/profile">
					<Button>
						Register
					</Button>
				</NavLink>
		      </Container>
	      </Container>
		</Container>
			)
    }

}

export default RegisterPage;
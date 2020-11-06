import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NavBarComponent from '../NavBar/NavBarComponent'
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import './PublishPage.css';

class PublishPage extends React.Component {

  PostAlert() {
    alert("Success! Your image has been posted!");
  }

  render() {
    return (
      <Container fluid className="Background">
        <Row>
          <NavBarComponent selected="publish"/>
        </Row>
        <Row className="PubPage">
          <Col>
            <Form.Group controlId="formBasicNameOfArt">
              <Form.Label>Name of Art</Form.Label>
              <Form.Control type="text" placeholder="Enter text here..." />
            </Form.Group>

            <Form.Group controlId="formBasicTag">
              <Form.Label className="PubPage">Tag</Form.Label>
              <Row>
                <Form.Check className="Checkboxes" type="checkbox" label="Sculpture" />
                <Form.Check className="Checkboxes" type="checkbox" label="Painting" />
                <Form.Check className="Checkboxes" type="checkbox" label="Drawing" />
                <Form.Check className="Checkboxes" type="checkbox" label="Digital" />
              </Row>
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label className="PubPage">Description</Form.Label>
              <Form.Control as="textarea" placeholder="Enter text here..." rows={3} />
            </Form.Group>

            <Form.Group controlId="formBasicPrice">
              <Form.Label className="PubPage">Price</Form.Label>
              <Form.Control type="text" placeholder="$" />
            </Form.Group>

            <Form.Group>
              <Form.File id="exampleFormAddImage" label="Upload Image" />
            </Form.Group>
          </Col>

          <Col>
            <Button className="PostButton" type="submit" onClick={this.PostAlert}>
              Post
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PublishPage;
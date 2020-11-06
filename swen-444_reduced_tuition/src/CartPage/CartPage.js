import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NavBarComponent from '../NavBar/NavBarComponent'
import {Container, Row, Col, Button} from 'react-bootstrap';
import './CartPage.css';

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/mountain-painting-chip-stoutus.jpg";


class Listing extends React.Component {
  render() {
    return (
        <Row className="FeatureBox">
          <Col>
            <img src={this.props.src} width="150" height="150"/>
          </Col>
          <Col>
            {this.props.name}
          </Col>
          <Col>
            {this.props.price}
          </Col>
        </Row>
    );
  }
}

class CartPage extends React.Component {

  render() {
    return (
      <Container fluid className="Background">
        <Row>
          <NavBarComponent selected="cart"/>
        </Row>
        <Row>
          <Col className="LeftPanel">
            <Listing src={img1} name="img1" price="$"/>
            <Listing src={img2} name="img2" price="$"/>
            <Listing src={img3} name="img3" price="$"/>
          </Col>
          <Col className="RightPanel">
            <Container className="FeatureBox">
              <p>Total $</p>
              <p>+ Tax $</p>
              <Button className="Button" type="submit" onClick={this.PostAlert}>
                Checkout
              </Button>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CartPage;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './NavBarComponent.css';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.unselected = {
      color: "#FFFFFF"
    }
    this.selected = {
      color: "#14274e",
      outlineWidth: 0,
      backgroundColor: "#F1F6F9",
      zIndex: 0,
    }
    this.profileStyle = this.unselected;
    this.browseStyle = this.unselected;
    this.cartStyle = this.unselected;
    this.followingStyle = this.unselected;
    this.publishStyle = this.unselected;
    this.settingsStyle = this.unselected;
    switch(this.props.selected) {
      case "personalprofile":
        this.profileStyle = this.selected;
        break;
      case "browse":
        this.browseStyle = this.selected;
        break;
      case "cart":
        this.cartStyle = this.selected;
        break;
      case "following":
        this.followingStyle = this.selected;
        break;
      case "publish":
        this.publishStyle = this.selected;
        break;
      case "settings":
        this.settingsStyle = this.selected;
        break;
      case "none":
        this.profileStyle = this.unselected;
        this.browseStyle = this.unselected;
        this.cartStyle = this.unselected;
        this.followingStyle = this.unselected;
        this.publishStyle = this.unselected;
        this.settingsStyle = this.unselected;
        break;
    }
  }
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="NavBarButton" style={this.profileStyle}>
            <NavLink to="/personalprofile" style={this.profileStyle}>
              Profile Page
            </NavLink>
          </Col>
          <Col className="NavBarButton" style={this.browseStyle}>
            <NavLink to="/browse" style={this.browseStyle}>
              Browse
            </NavLink>
          </Col>
          <Col className="NavBarButton" style={this.cartStyle}>
            <NavLink to="/cart" style={this.cartStyle}>
              Cart
            </NavLink>
          </Col>
          <Col className="NavBarButton" style={this.followingStyle}>
            <NavLink to="/following" style={this.followingStyle}>
              Following
            </NavLink>
          </Col>
          <Col className="NavBarButton" style={this.publishStyle}>
            <NavLink to="/publish" style={this.publishStyle}>
              Publish
            </NavLink>
          </Col>
          <Col className="NavBarButton" style={this.settingsStyle}>
            <NavLink to="/settings" style={this.settingsStyle}>
              Settings
            </NavLink>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default NavBarComponent;
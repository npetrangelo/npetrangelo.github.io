import React from 'react';
import Button from 'react-bootstrap/Button';

import '../App.css';
import './LandingPage.css';
import NavBarComponent from '../NavBar/NavBarComponent'
import { Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

class LandingPage extends React.Component {

    render() {
        var url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mona_Lisa_%28copy%2C_Hermitage%29.jpg/358px-Mona_Lisa_%28copy%2C_Hermitage%29.jpg";
        return (
            <Container className="SubWindow">
                <Container className="Panel">
                    <Container className="Title">
                        ArtShare
                    </Container>
                    <img src={url} alt="Mona Lisa"/>
                    <br/>
                    <Container className="ButtonPanel">
                        <NavLink to="/login">
                            <Button className="Button">
                                LOGIN
                            </Button>
                        </NavLink>
                        <NavLink to="/register">
                            <Button className="Button">
                                REGISTER
                            </Button>
                        </NavLink>
                    </Container>
                </Container>
            </Container>
          );
    }
}

export default LandingPage;

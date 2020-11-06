import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './Profile.css';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import NavBarComponent from '../NavBar/NavBarComponent';
import Settings from '../SettingsPage/SettingsPage';

import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/download.jfif";
import img4 from "./Images/images.jfif";
import img5 from "./Images/colorful-acrylic-paintings.jpg";
import img6 from "./Images/images2.jfif";
import img7 from "./Images/img3.jpg";
import img8 from "./Images/mountain-painting-chip-stoutus.jpg";
import img9 from "./Images/img4.jpg"; 
import img10 from "./Images/img5.jpg";
import img11 from "./Images/img6.jpg";
import img12 from "./Images/images3.jfif";


class ProfilePage extends React.Component{

    constructor(props){
        super(props);
        this.userID = "User8580382";
        this.descriptionData = this.updateUserDescription();
        this.linkedArtists = this.updateLinkedArtists();
    }
    
    updateUserDescription(newText){
        if(newText == null){
            newText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
                nisi ut aliquip ex ea commodo consequat."
        
        }
        return newText;
    }

    updateLinkedArtists(artist){
        if(artist == null && this.linkedArtists == "No Linked Artists"){
            return "No Linked Artists";
        }else if(artist == null){
            return this.linkedArtists;
        }else{
            return "Test Artist";
        }
    }

    followUser(){
        var btn = document.getElementById("followButton");
        if(btn.innerHTML == "Follow"){
            btn.innerHTML = "Unfollow";
            alert("Now following!");
        }else{
            btn.innerHTML = "Follow";
        }
    }

    render(){
        var blankProfileImage = 'https://www.oseyo.co.uk/wp-content/uploads/2020/05/empty-profile-picture-png-2.png';

        return(
            <Container className="SubPage">
                <div className="NavBar">
                    <NavBarComponent />
                </div>
                <Col className="LeftPanel"> 
                    <img src={blankProfileImage} alt = "BlankProfileImage" width="200" height="200" className="profileImg"/>
                    <p id="userDescription" className="textSpacer">
                        {this.descriptionData}
                    </p>
                    <Container className="SubBox">
                        <p className="SubBoxText">
                            Linked Artists
                        </p>
                        
                        <Row className="rowSpacer">
                            <img src={blankProfileImage} alt = "BlankProfileImage" width="100" height="100" className="profileImg"/>
                        </Row>
                        <Row className="rowSpacer">
                            <img src={blankProfileImage} alt = "BlankProfileImage" width="100" height="100" className="profileImg"/>
                        </Row>
                    </Container>
                </Col>
                <Col className="CenterPanel" xs={8}> 
                    <p className="TitleText">
                        {this.userID}
                    </p>
                    <Container className="FeatureBox">
                        <p className="SubBoxText">
                            Featured Posts
                        </p>
                        <Row  className="FeatureImages">
                            <Col>
                                <NavLink to="/post">
                                    <Button className="imageButton">
                                        <img src={img1} alt = "BlankProfileImage" width="225" height="225"/>
                                    </Button>
                                </NavLink>
                            </Col>
                            <Col>
                            <NavLink to="/post">
                                    <Button className="imageButton">
                                        <img src={img2} alt = "BlankProfileImage" width="225" height="225"/>
                                    </Button>
                                </NavLink>
                            </Col>
                            <Col>
                            <NavLink to="/post">
                                    <Button className="imageButton">
                                        <img src={img3} alt = "BlankProfileImage" width="225" height="225"/>
                                    </Button>
                                </NavLink>
                            </Col>
                            <Col>
                            <NavLink to="/post">
                                    <Button className="imageButton">
                                        <img src={img4} alt = "BlankProfileImage" width="225" height="225"/>
                                    </Button>
                                </NavLink>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="FeatureBox">
                        <p className="SubBoxText">
                            Posts
                        </p>
                        <NavLink to="/post">
                            <Button className="imageButton">
                                <img src={img1} alt = "BlankProfileImage" width="170" height="170"/>
                            </Button>
                        </NavLink>
                        <NavLink to="/post">
                            <Button className="imageButton">
                                <img src={img2} alt = "BlankProfileImage" width="170" height="170"/>
                            </Button>  
                        </NavLink>
                        <NavLink to="/post">                         
                            <Button className="imageButton">
                                <img src={img3} alt = "BlankProfileImage" width="170" height="170"/>
                            </Button>
                        </NavLink>
                        <NavLink to="/post">
                            <Button className="imageButton">
                                <img src={img4} alt = "BlankProfileImage" width="170" height="170"/>
                            </Button>
                        </NavLink>
                        <NavLink to="/post">
                            <Button className="imageButton">
                                <img src={img5} alt = "BlankProfileImage" width="170" height="170"/>
                            </Button>
                        </NavLink>
                        <NavLink to="/post">
                            <Button className="imageButton">
                                <img src={img6} alt = "BlankProfileImage" width="170" height="170"/>
                            </Button>
                        </NavLink>
                        <NavLink to="/post">
                            <Button className="imageButton">
                                <img src={img7} alt = "BlankProfileImage" width="170" height="170"/>
                            </Button>
                        </NavLink>
                        <NavLink to="/post">
                            <Button className="imageButton">
                                <img src={img8} alt = "BlankProfileImage" width="170" height="170"/>
                            </Button>
                        </NavLink>
                        <NavLink to="/post">
                            <Button className="imageButton">
                                <img src={img9} alt = "BlankProfileImage" width="170" height="170"/>
                            </Button>
                        </NavLink>
                        <NavLink to="/post">
                            <Button className="imageButton">
                                <img src={img10} alt = "BlankProfileImage" width="170" height="170"/>
                            </Button>
                        </NavLink>
                        <NavLink to="/post">
                            <Button className="imageButton">
                                <img src={img11} alt = "BlankProfileImage" width="170" height="170"/>
                            </Button>
                        </NavLink>
                        <NavLink to="/post">
                            <Button className="imageButton">
                                <img src={img12} alt = "BlankProfileImage" width="170" height="170"/>
                            </Button>
                        </NavLink>
                            
                    </Container>
                </Col>
                <Col className="RightPanel"> 
                    <Container className="textSpacer">
                        <Button id="followButton" className="profileButton" onClick={this.followUser}>
                            Follow
                        </Button>
                    </Container>
                    <Container className="FeatureBox">
                        <p className="SubBoxText">
                            Categories
                        </p>
                        <div class="chip">
                            Acrylic
                        </div>
                        <div class="chip">
                            Painting
                        </div>
                        <div class="chip">
                            Canvas
                        </div>
                        <div class="chip">
                            Expert
                        </div>
                        <div class="chip">
                            Oil
                        </div>
                        <div class="chip">
                            Landscapes
                        </div>
                        <div class="chip">
                            Nature
                        </div>
                        <div class="rowSpacer">

                        </div>
                        <Button className="profileButton">
                            Add Category
                        </Button>
                    </Container>
                </Col>
            </Container>
        );
    }
}
export default ProfilePage;
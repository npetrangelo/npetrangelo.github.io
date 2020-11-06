import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './Profile.css';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import NavBarComponent from '../NavBar/NavBarComponent';

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

class ImageLink extends React.Component {
    render() {
        return (
            <Link to={{
                pathname: this.props.to,
                state: this.props.src
            }}>
                <Button className="imageButton">
                    <img src={this.props.src} alt="BlankProfileImage" width={this.props.width} height={this.props.height}/>
                </Button>
            </Link>
        );
    }
}

class PersonalProfilePage extends React.Component {

    constructor(props){
        super(props);
        this.userID = "User8580382 (You)";
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

    render() {
        var blankProfileImage = 'https://www.oseyo.co.uk/wp-content/uploads/2020/05/empty-profile-picture-png-2.png';

        return(
            <Container className="SubPage">
                <div className="NavBar">
                    <NavBarComponent selected="personalprofile"/>
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
                        <Row className="FeatureImages">
                            <Col>
                                <ImageLink to="/post" src={img1} width="225" height="225"/>
                            </Col>
                            <Col>
                                <ImageLink to="/post" src={img2} width="225" height="225"/>
                            </Col>
                            <Col>
                                <ImageLink to="/post" src={img3} width="225" height="225"/>
                            </Col>
                            <Col>
                                <ImageLink to="/post" src={img4} width="225" height="225"/>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="FeatureBox">
                        <p className="SubBoxText">
                            Posts
                        </p>
                        <ImageLink to="/post" src={img1} width="170" height="170"/>
                        <ImageLink to="/post" src={img2} width="170" height="170"/>
                        <ImageLink to="/post" src={img3} width="170" height="170"/>
                        <ImageLink to="/post" src={img4} width="170" height="170"/>
                        <ImageLink to="/post" src={img5} width="170" height="170"/>
                        <ImageLink to="/post" src={img6} width="170" height="170"/>
                        <ImageLink to="/post" src={img7} width="170" height="170"/>
                        <ImageLink to="/post" src={img8} width="170" height="170"/>
                        <ImageLink to="/post" src={img9} width="170" height="170"/>
                        <ImageLink to="/post" src={img10} width="170" height="170"/>
                        <ImageLink to="/post" src={img11} width="170" height="170"/>
                        <ImageLink to="/post" src={img12} width="170" height="170"/>
                            
                    </Container>
                </Col>
                <Col className="RightPanel"> 
                    <Container className="textSpacer">
                        <Button className="profileButton" onClick={this.loadSettingsPage}>
                            Edit Profile
                        </Button>
                    </Container>
                    <Container className="FeatureBox">
                        <p className="SubBoxText">
                            Categories
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        </p>
                        <div class="chip">
                            Acrylic
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        </div>
                        <div class="chip">
                            Painting
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        </div>
                        <div class="chip">
                            Canvas
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        </div>
                        <div class="chip">
                            Expert
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        </div>
                        <div class="chip">
                            Oil
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        </div>
                        <div class="chip">
                            Landscapes
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        </div>
                        <div class="chip">
                            Nature
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
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

export default PersonalProfilePage;
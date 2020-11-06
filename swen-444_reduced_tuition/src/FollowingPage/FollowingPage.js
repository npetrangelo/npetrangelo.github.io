import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './Following.css';
import NavBarComponent from "../NavBar/NavBarComponent";
import { Container, Row, Col, Form, Button} from 'react-bootstrap';

import ferrari from './SWEN-444_Project_PNGs/ferrari.png';
import dino from './SWEN-444_Project_PNGs/Dino_Nugs.jpg';
import ABC from './SWEN-444_Project_PNGs/ABC.jpg';
import Koko from './SWEN-444_Project_PNGs/Koko.jpg';
import MagiGirl from './SWEN-444_Project_PNGs/Magi-girl.jpg';
import Don from './SWEN-444_Project_PNGs/Don.jpg';
import Google from './SWEN-444_Project_PNGs/G.png';
import Revive from './SWEN-444_Project_PNGs/revival_stream.jpg';
import User169 from './SWEN-444_Project_PNGs/69.jpg';
import Doggo from './SWEN-444_Project_PNGs/doggo.jpg';
import Kachow from './SWEN-444_Project_PNGs/kachow.jpg';
import Jink from './SWEN-444_Project_PNGs/jink.png';
import Roo from './SWEN-444_Project_PNGs/roo.jpg';

import post1 from './SWEN-444_Project_PNGs/post1.jpg';
import post2 from './SWEN-444_Project_PNGs/post2.jpg';
import post3 from './SWEN-444_Project_PNGs/post3.jpg';
import post4 from './SWEN-444_Project_PNGs/post4.jpg';
import post5 from './SWEN-444_Project_PNGs/post5.png';
import post6 from './SWEN-444_Project_PNGs/post6.jpg';

class FollowingPage extends React.Component {

    render() {
        return (
            <Container fluid className="Background">
                <Row>
                    <NavBarComponent selected="following" />
                </Row>

                <Row>
                    <Col xs={6}>
                        <Row className="SearchBar">
                            <Form className="SearchIndent">
                                <input type="text" placeholder="Search.."/>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </Row>

                        <Row>
                            <Row className="Post">
                                <Col>
                                    <Container className="IndividualPost">
                                        <Row>
                                            <img class="ImgPost" src={post1} />
                                        </Row>

                                        <Row>
                                            <Button className="Button_Post" style={{display: "flex"}} href="/profile">
                                                <Col>
                                                    <img class="Img" src={User169} />
                                                </Col>

                                                <Col>
                                                    <div class="Users"><text class="whiteTextUser">User169</text></div>
                                                </Col>
                                            </Button>
                                        </Row>
                                    </Container>
                                </Col>

                                <Col>
                                    <Container className="IndividualPost">
                                        <Row>
                                            <img class="ImgPost" src={post2} />
                                        </Row>

                                        <Row>
                                            <Button className="Button_Post" style={{display: "flex"}} href="/profile">
                                                <Col>
                                                    <img class="Img" src={Google} />
                                                </Col>

                                                <Col>
                                                    <div class="Users"><text class="whiteTextUser">Google</text></div>
                                                </Col>
                                            </Button>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>

                            <Row className="Post">
                                <Col>
                                    <Container className="IndividualPost">
                                        <Row>
                                            <img class="ImgPost" src={post3} />
                                        </Row>

                                        <Row>
                                            <Button className="Button_Post" style={{display: "flex"}} href="/profile">
                                                <Col>
                                                    <img class="Img" src={Kachow} />
                                                </Col>

                                                <Col>
                                                    <div class="Users"><text class="whiteTextUser">Malakachowsky</text></div>
                                                </Col>
                                            </Button>
                                        </Row>
                                    </Container>
                                </Col>

                                <Col>
                                    <Container className="IndividualPost">
                                        <Row>
                                            <img class="ImgPost" src={post4} />
                                        </Row>

                                        <Row>
                                            <Button className="Button_Post" style={{display: "flex"}} href="/profile">
                                                <Col>
                                                    <img class="Img" src={Doggo} />
                                                </Col>

                                                <Col>
                                                    <div class="Users"><text class="whiteTextUser">Dog</text></div>
                                                </Col>
                                            </Button>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>

                            <Row className="Post">
                                <Col>
                                    <Container className="IndividualPost">
                                        <Row>
                                            <img class="ImgPost" src={post5} />
                                        </Row>

                                        <Row>
                                            <Button className="Button_Post" style={{display: "flex"}} href="/profile">
                                                <Col>
                                                    <img class="Img" src={ABC} />
                                                </Col>

                                                <Col>
                                                    <div class="Users"><text class="whiteTextUser">ABCorBust</text></div>
                                                </Col>
                                            </Button>
                                        </Row>
                                    </Container>
                                </Col>

                                <Col>
                                    <Container className="IndividualPost">
                                        <Row>
                                            <img class="ImgPost" src={post6} />
                                        </Row>
                                        
                                        <Row>
                                            <Button className="Button_Post" style={{display: "flex"}} href="/profile">
                                                <Col>
                                                    <img class="Img" src={Don} />
                                                </Col>

                                                <Col>
                                                    <div class="Users"><text class="whiteTextUser">The Don</text></div>
                                                </Col>
                                            </Button>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Row>
                    </Col>

                    <Col>
                        <div class="FixedHeightContainer">
                            <h2 class="whiteTextHeader">Following</h2>
                            <div class="Content">
                                <Container fluid>
                                    <Row>
                                        <Button className="Button_Follow" style={{display: "flex"}} href="/profile">
                                            <Col>
                                                <img class="Img" src={ferrari} />
                                            </Col>

                                            <Col>
                                                <div class="Users"><text class="whiteTextUser">FerrariSenpai</text></div>
                                            </Col>
                                        </Button>
                                    </Row>

                                    <Row>
                                        <Button className="Button_Follow" style={{display: "flex"}} href="/profile">
                                            <Col>
                                                <img class="Img" src={dino} />
                                            </Col>

                                            <Col>
                                                <div class="Users"><text class="whiteTextUser">DinoNugs</text></div>
                                            </Col>
                                        </Button>
                                    </Row>

                                    <Row>
                                        <Button className="Button_Follow" style={{display: "flex"}} href="/profile">
                                            <Col>
                                                <img class="Img" src={ABC} />
                                            </Col>

                                            <Col>
                                                <div class="Users"><text class="whiteTextUser">ABCorBust</text></div>
                                            </Col>
                                        </Button>
                                    </Row>

                                    <Row>
                                        <Button className="Button_Follow" style={{display: "flex"}} href="/profile">
                                            <Col>
                                                <img class="Img" src={Koko} />
                                            </Col>

                                            <Col>
                                                <div class="Users"><text class="whiteTextUser">Koko</text></div>
                                            </Col>
                                        </Button>
                                    </Row>

                                    <Row>
                                        <Button className="Button_Follow" style={{display: "flex"}} href="/profile">
                                            <Col>
                                                <img class="Img" src={MagiGirl} />
                                            </Col>

                                            <Col>
                                                <div class="Users"><text class="whiteTextUser">SuperMagiGirl</text></div>
                                            </Col>
                                        </Button>
                                    </Row>

                                    <Row>
                                        <Button className="Button_Follow" style={{display: "flex"}} href="/profile">
                                            <Col>
                                                <img class="Img" src={Don} />
                                            </Col>

                                            <Col>
                                                <div class="Users"><text class="whiteTextUser">TheDon</text></div>
                                            </Col>
                                        </Button>
                                    </Row>

                                    <Row>
                                        <Button className="Button_Follow" style={{display: "flex"}} href="/profile">
                                            <Col>
                                                <img class="Img" src={Google} />
                                            </Col>

                                            <Col>
                                                <div class="Users"><text class="whiteTextUser">Google</text></div>
                                            </Col>
                                        </Button>
                                    </Row>

                                    <Row>
                                        <Button className="Button_Follow" style={{display: "flex"}} href="/profile">
                                            <Col>
                                                <img class="Img" src={Revive} />
                                            </Col>

                                            <Col>
                                                <div class="Users"><text class="whiteTextUser">RevivalStream</text></div>
                                            </Col>
                                        </Button>
                                    </Row>

                                    <Row>
                                        <Button className="Button_Follow" style={{display: "flex"}} href="/profile">
                                            <Col>
                                                <img class="Img" src={User169} />
                                            </Col>

                                            <Col>
                                                <div class="Users"><text class="whiteTextUser">User169</text></div>
                                            </Col>
                                        </Button>
                                    </Row>

                                    <Row>
                                        <Button className="Button_Follow" style={{display: "flex"}} href="/profile">
                                            <Col>
                                                <img class="Img" src={Doggo} />
                                            </Col>

                                            <Col>
                                                <div class="Users"><text class="whiteTextUser">Dog</text></div>
                                            </Col>
                                        </Button>
                                    </Row>

                                    <Row>
                                        <Button className="Button_Follow" style={{display: "flex"}} href="/profile">
                                            <Col>
                                                <img class="Img" src={Kachow} />
                                            </Col>

                                            <Col>
                                                <div class="Users"><text class="whiteTextUser">Malakachowsky</text></div>
                                            </Col>
                                        </Button>
                                    </Row>

                                    <Row>
                                        <Button className="Button_Follow" style={{display: "flex"}} href="/profile">
                                            <Col>
                                                <img class="Img" src={Jink} />
                                            </Col>

                                            <Col>
                                                <div class="Users"><text class="whiteTextUser">Jinkies</text></div>
                                            </Col>
                                        </Button>
                                    </Row>

                                    <Row>
                                        <Button className="Button_Follow" style={{display: "flex"}} href="/profile">
                                            <Col>
                                                <img class="Img" src={Roo} />
                                            </Col>

                                            <Col>
                                                <div class="Users"><text class="whiteTextUser">Roo</text></div>
                                            </Col>
                                        </Button>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Col>
                </Row>                
            </Container>
        );
    }
}

export default FollowingPage;
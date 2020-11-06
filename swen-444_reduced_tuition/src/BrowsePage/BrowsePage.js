import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './Browse.css';
import NavBarComponent from '../NavBar/NavBarComponent'
import { Container, Button, Row, Col } from 'react-bootstrap';
import post1 from "../FollowingPage/SWEN-444_Project_PNGs/post1.jpg";
import User169 from "../FollowingPage/SWEN-444_Project_PNGs/69.jpg";
import post2 from "../FollowingPage/SWEN-444_Project_PNGs/post2.jpg";
import Google from "../FollowingPage/SWEN-444_Project_PNGs/G.png";
import post3 from "../FollowingPage/SWEN-444_Project_PNGs/post3.jpg";
import Kachow from "../FollowingPage/SWEN-444_Project_PNGs/kachow.jpg";
import post4 from "../FollowingPage/SWEN-444_Project_PNGs/post4.jpg";
import Doggo from "../FollowingPage/SWEN-444_Project_PNGs/doggo.jpg";
import post5 from "../FollowingPage/SWEN-444_Project_PNGs/post5.png";
import ABC from "../FollowingPage/SWEN-444_Project_PNGs/ABC.jpg";
import post6 from "../FollowingPage/SWEN-444_Project_PNGs/post6.jpg";
import Don from "../FollowingPage/SWEN-444_Project_PNGs/Don.jpg";
import {NavLink} from "react-router-dom";

class BrowsePage extends React.Component {

  render() {
    return (
      <Container fluid className="Background">
        <Row>
          <NavBarComponent selected="browse" />
        </Row>
        <Row>
          <Col xs={9}>
            <Row className="SearchBar">
              <form className="SearchIndent">
                <input type="text" placeholder="Search.."/>
                <Button className="Button_Search" type="submit">Submit</Button>
              </form>
            </Row>

            <Row>
              <Row className="Post">
                <Col>
                  <Container className="IndividualPost">
                    <Row>
                      <NavLink to="/post">
                        <Button className="imageButton">
                          <img className="ImgPost" src={post1} />
                        </Button>
                      </NavLink>
                    </Row>

                    <Row>
                      <Button className="Button_Post" style={{display: "flex"}} href="/profile">
                        <Col>
                          <img className="Img" src={User169} />
                        </Col>

                        <Col>
                          <div className="Users"><text className="whiteTextUser">User169</text></div>
                        </Col>
                      </Button>
                    </Row>
                  </Container>
                </Col>

                <Col>
                  <Container className="IndividualPost">
                    <Row>
                      <NavLink to="/post">
                        <Button className="imageButton">
                          <img className="ImgPost" src={post2} />
                        </Button>
                      </NavLink>
                    </Row>

                    <Row>
                      <Button className="Button_Post" style={{display: "flex"}} href="/profile">
                        <Col>
                          <img className="Img" src={Google} />
                        </Col>

                        <Col>
                          <div className="Users"><text className="whiteTextUser">Google</text></div>
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
                      <NavLink to="/post">
                        <Button className="imageButton">
                          <img className="ImgPost" src={post3} />
                        </Button>
                      </NavLink>
                    </Row>

                    <Row>
                      <Button className="Button_Post" style={{display: "flex"}} href="/profile">
                        <Col>
                          <img className="Img" src={Kachow} />
                        </Col>

                        <Col>
                          <div className="Users"><text class="whiteTextUser">Malakachowsky</text></div>
                        </Col>
                      </Button>
                    </Row>
                  </Container>
                </Col>

                <Col>
                  <Container className="IndividualPost">
                    <Row>
                      <NavLink to="/post">
                        <Button className="imageButton">
                          <img className="ImgPost" src={post4} />
                        </Button>
                      </NavLink>
                    </Row>

                    <Row>
                      <Button className="Button_Post" style={{display: "flex"}} href="/profile">
                        <Col>
                          <img className="Img" src={Doggo} />
                        </Col>

                        <Col>
                          <div className="Users"><text className="whiteTextUser">Dog</text></div>
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
                      <NavLink to="/post">
                        <Button className="imageButton">
                          <img className="ImgPost" src={post5} />
                        </Button>
                      </NavLink>
                    </Row>

                    <Row>
                      <Button className="Button_Post" style={{display: "flex"}} href="/profile">
                        <Col>
                          <img className="Img" src={ABC} />
                        </Col>

                        <Col>
                          <div className="Users"><text className="whiteTextUser">ABCorBust</text></div>
                        </Col>
                      </Button>
                    </Row>
                  </Container>
                </Col>

                <Col>
                  <Container className="IndividualPost">
                    <Row>
                      <NavLink to="/post">
                        <Button className="imageButton">
                          <img className="ImgPost" src={post6} />
                        </Button>
                      </NavLink>
                    </Row>

                    <Row>
                      <Button className="Button_Post" style={{display: "flex"}} href="/profile">
                        <Col>
                          <img className="Img" src={Don} />
                        </Col>

                        <Col>
                          <div className="Users"><text className="whiteTextUser">The Don</text></div>
                        </Col>
                      </Button>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Row>
          </Col>

          <Col className="RightPanel" xs={3}>
            <Container className="FeatureBox">
              <p className="SubBoxText">
                Search Tags
              </p>
              <p className="IncludeExcludeText">
                Include
              </p>
              <div className="chip">
                Drawing
                <span className="closebtn" onClick="this.parentElement.style.display='none'">&times;</span>
              </div>
              <p className="IncludeExcludeText">
                Exclude
              </p>
              <div className="chip">
                Digital
                <span className="closebtn" onClick="this.parentElement.style.display='none'">&times;</span>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default BrowsePage;
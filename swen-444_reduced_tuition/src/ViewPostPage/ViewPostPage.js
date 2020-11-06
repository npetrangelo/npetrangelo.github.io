import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './ViewPostPage.css';
import NavBarComponent from '../NavBar/NavBarComponent';
import {
  Container,
  Row,
  Col,
  Button,
  FormControl,
} from 'react-bootstrap'

class ViewPostPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      followingArtist: false,
      inCart: false,
      personalComment: "",
      comments: [
        {
          owner: "Malakachowsky",
          comment: "vErY cOoL"
        },
        {
          owner: "Borat",
          comment: "wawawewah"
        },
      ],
      artist: "Artist Name Here",
      caption: "Caption Goes here",
    }
  }

  addComment(owner, comment) {
    const comments = this.state.comments
    comments.push({
      owner: owner,
      comment: comment
    })
    this.setState({comments: comments})
  }

  renderComments() {
    const comments = this.state.comments.map(
      comment => 
        <Row>
          <Container fluid>
            <br />
          </Container>
          <Container fluid className="Comment">
            <strong>{comment.owner}</strong>
            <br />
            {comment.comment}
          </Container>
        </Row>
    )
    return comments
  }

  changeState(key, value) {
    switch(key) {
      case "followingArtist":
        this.setState({ followingArtist: value })
        break
      case "inCart":
        this.setState({ inCart: value })
        break
      case "personalComment":
        this.setState({ personalComment: value })
    }
  }

  followButtonState() {
    if ( this.state.followingArtist == true ) {
      return "Unfollow"
    } else {
      return "Follow"
    }
  }

  cartButtonState() {
    if ( this.state.inCart == true ) {
      return "Remove From Cart"
    } else {
      return "Add to Cart"
    }
  }

  render() {
    return (
      <Container fluid className="Background">
        {/* Nav Bar */}
        <Row>
          <NavBarComponent selected="none" /> 
        </Row>
        {/* Add to Cart, Follow */}
        <Row>
          <Container fluid className="TopPanel">
            <Row>
              <Col xs={8}></Col>
              <Col className="TopPanelCol">
                <Container fluid className="TopPanelCol">
                  <Button bsPrefix="TopPanelButton"
                    onClick={() => {
                      const inCartState = this.state.inCart
                      if ( inCartState == true ) {
                        this.changeState("inCart", false)
                      } else if ( inCartState == false ) {
                        this.changeState("inCart", true)
                      }
                    }}
                  >
                    {this.cartButtonState()}
                  </Button>
                </Container>
              </Col>
              <Col className="TopPanelCol">
                <Container fluid className="TopPanelCol">
                  <Button bsPrefix="TopPanelButton"
                    onClick={() => {
                      const followingState = this.state.followingArtist
                      if ( followingState == true ) {
                        this.changeState("followingArtist", false)
                      } else if ( followingState == false ) {
                        this.changeState("followingArtist", true)
                      }
                    }}
                  >
                    {this.followButtonState()}
                  </Button>
                </Container>
              </Col>
            </Row>
          </Container>
        </Row>
        {/* Post, and Comments */}
        <Row>
          <Col xs={8}>
            <Container fluid className="PostPanel">
              <img src={this.props.location.state} alt="Missing" width="400" />
            </Container>
          </Col>
          <Col xs={4}>
            <Container fluid className="CommentPanel">
                <Container fluid className="CommentInfo">
                  <strong>{this.state.artist}</strong>
                  <br />
                  {this.state.caption}
                </Container>
                <Container fluid className="Comments">
                  {this.renderComments()}     
                </Container>
                <Container fluid bsPrefix="SubmitCommentGroup">
                  <FormControl bsPrefix="SubmitCommentInput" type="text" placeholder="Enter comment here..."
                    onChange={event => this.changeState("personalComment", event.target.value)}
                  />
                  <Button bsPrefix="SubmitCommentButton" style={{width:60}}
                    onClick={() => this.addComment("Me", this.state.personalComment)}
                  >
                    Submit
                  </Button>
                </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }

}

export default ViewPostPage;
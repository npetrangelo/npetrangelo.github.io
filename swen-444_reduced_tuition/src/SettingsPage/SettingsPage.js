import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './SettingsPage.css'
import NavBarComponent from '../NavBar/NavBarComponent'
import { 
  Container,
  Row, 
  Col, 
  Button, 
  InputGroup,
  FormControl, 
} from 'react-bootstrap';

const PROFILE = 1;
const NOTIFICATION = 2;
const FINANCE = 3;
const SHIPPING = 4;

class SettingsPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      settingCategory: PROFILE,
      count: 0,
      linkedProfiles: [],
      linkedProfileToAdd: "",
      username: "User123",
      usernameToChange: "",
      email: "JohnDoe@gmail.com",
      emailToChange: "",
      phone: "(877) 393-4448",
      phoneToChange: "",
      creditCardNumber: "XXXX XXXX XXXX XXXX",
      creditCardNumberToChange: "",
      cvv: "XXX",
      cvvToChange: "",
      street: "1725 Slough Ave",
      streetToChange: "",
      city: "Scranton, PA 18505",
      cityToChange: "",
    }
  }

  addLinkedProfile(name) {
    let newLinkedProfiles = this.state.linkedProfiles.filter(
      profile => profile !== name
    )
    newLinkedProfiles.push(name)
    this.setState({linkedProfiles: newLinkedProfiles})
  }

  removeLinkedProfile(name) {
    let newLinkedProfiles = this.state.linkedProfiles.filter(
      profile => profile !== name
    )
    this.setState({linkedProfiles: newLinkedProfiles}) 
  }

  changeState(key, value) {
    switch(key) {
      case "username":
        this.setState({ username: value, usernameToChange: "" })
        break
      case "email":
        this.setState({ email: value, emailToChange: "" })
        break
      case "phone":
        this.setState({ phone: value, phoneToChange: "" })
        break
      case "creditCardNumber":
        this.setState({ creditCardNumber: value, creditCardNumberToChange: "" })
        break
      case "cvv":
        this.setState({ cvv: value, cvvToChange: "" })
        break
      case "street":
        this.setState({ street: value, streetToChange: "" })
        break
      case "city":
        this.setState({ city: value, cityToChange: "" })
        break
    }
  }
  
  defaultSettingHandler() {
    if ( this.state.settingCategory == PROFILE ) {
      return (
        <Button bsPrefix="Category" style={{backgroundColor: "#8F8F8F"}}
          onClick={() => this.setState({settingCategory: PROFILE})}
        >
          Profile Settings
        </Button>
      )
    } else {
      return (
        <Button bsPrefix="Category"
          onClick={() => this.setState({settingCategory: PROFILE})}
        >
          Profile Settings
        </Button>
      )
    }
  }

  renderLinkedProfiles() {
    console.log(this.state.linkedProfiles)
    const linkedProfiles = this.state.linkedProfiles.map(
      profile => 
        <Row>
          <Container>
            <br />
          </Container>
          <Container className="SettingSubWindow">
            <Row>
              <Col style={{ padding: "10px 10px 10px 10px", marginLeft: "10px" }}>
                {profile}
              </Col>
              <Col xs={2}>
                <Button className="SettingButton"
                  onClick={() => this.removeLinkedProfile(profile)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </Container>
        </Row>
    )
    return linkedProfiles
  }

  renderSetting() {
    switch ( this.state.settingCategory ) {
      case PROFILE:
        return (
          <div>
            {/* Profile Image */}
            <Row className="Setting">
              <div className="SettingTitle">Profile Image</div>
              <div className="SettingContent">
                Set Profile Image
              </div>
            </Row>
            {/* Linked Profiles */}
            <Row className="Setting">
              <div className="SettingTitle">Linked Profiles</div>
              <div className="SettingContent">
                <Container>
                  <Row>
                    <InputGroup>
                      <FormControl bsPrefix="SettingInput" 
                        onChange={event => this.setState({linkedProfileToAdd: event.target.value})}
                      />
                      <InputGroup.Append>
                        <Button className="SettingButton"
                          onClick={() => {
                            if ( this.state.linkedProfileToAdd != "" ) {
                              this.addLinkedProfile(this.state.linkedProfileToAdd)
                            }
                            console.log(this.state.linkedProfiles)
                          }}
                        >
                          Add
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Row>
                  <Row>
                    <Container>
                     {this.renderLinkedProfiles()}
                    </Container>
                  </Row>
                </Container>
              </div>
            </Row>
            {/* Change Username */}
            <Row className="Setting">
              <div className="SettingTitle">Change Username</div>
              <div className="SettingContent">
                <Container>
                  <Row>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <Container style={{
                          backgroundColor: "#EBEBEB",
                          justifyContent: "center",
                          padding: "10px 10px 10px 10px"
                        }}>
                          Current Username: {this.state.username}
                        </Container>
                      </InputGroup.Prepend>
                      <FormControl bsPrefix="SettingInput"
                        onChange={event => this.setState({usernameToChange: event.target.value})}
                      />
                      <InputGroup.Append>
                        <Button className="SettingButton"
                          onClick={() => {
                            if ( this.state.usernameToChange != "" ) {
                              this.changeState("username", this.state.usernameToChange)
                            }
                          }}
                        >
                          Change
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Row>
                </Container>
              </div>
            </Row>
          </div>
        )
      case NOTIFICATION:
        return (
          <div>
            {/* Change Email */}
            <Row className="Setting">
              <div className="SettingTitle">Change Email</div>
              <div className="SettingContent">
                <Container>
                  <Row>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <Container style={{
                          backgroundColor: "#EBEBEB",
                          justifyContent: "center",
                          padding: "10px 10px 10px 10px"
                        }}>
                          Current E-mail: {this.state.email}
                        </Container>
                      </InputGroup.Prepend>
                      <FormControl bsPrefix="SettingInput"
                        onChange={event => this.setState({emailToChange: event.target.value})}
                      />
                      <InputGroup.Append>
                        <Button className="SettingButton"
                          onClick={() => {
                            if ( this.state.emailToChange != "" ) {
                              this.changeState("email", this.state.emailToChange)
                            }
                          }}
                        >
                          Change
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Row>
                </Container>
              </div>
            </Row>
            {/* Change Phone */}
            <Row className="Setting">
              <div className="SettingTitle">Change Phone</div>
              <div className="SettingContent">
                <Container>
                  <Row>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <Container style={{
                          backgroundColor: "#EBEBEB",
                          justifyContent: "center",
                          padding: "10px 10px 10px 10px"
                        }}>
                          Current Phone: {this.state.phone}
                        </Container>
                      </InputGroup.Prepend>
                      <FormControl bsPrefix="SettingInput"
                        onChange={event => this.setState({phoneToChange: event.target.value})}
                      />
                      <InputGroup.Append>
                        <Button className="SettingButton"
                          onClick={() => {
                            if ( this.state.phoneToChange != "" ) {
                              this.changeState("phone", this.state.phoneToChange)
                            }
                          }}
                        >
                          Change
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Row>
                </Container>
              </div>
            </Row>
          </div>
        )
      case FINANCE:
        return (
          <div>
            {/* Change Credit Card */}
            <Row className="Setting">
              <div className="SettingTitle">Credit Card Information</div>
              <div className="SettingContent">
                <Container fluid>
                  <Row>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <Container style={{
                          backgroundColor: "#EBEBEB",
                          justifyContent: "center",
                          padding: "10px 10px 10px 10px"
                        }}>
                          Current Card Number: {this.state.creditCardNumber}
                        </Container>
                      </InputGroup.Prepend>
                      <FormControl bsPrefix="SettingInput"
                        onChange={event => {
                          this.setState({creditCardNumberToChange: event.target.value})
                          console.log(this.state)
                        }}
                      />
                      <InputGroup.Append>
                        <Button className="SettingButton"
                          onClick={() => {
                            if ( this.state.creditCardNumberToChange != "" ) {
                              this.changeState("creditCardNumber", this.state.creditCardNumberToChange)
                              console.log(this.state)
                            }
                          }}
                        >
                          Change
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Row>
                  <Row>
                    <br />
                  </Row>
                  <Row>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <Container style={{
                          backgroundColor: "#EBEBEB",
                          justifyContent: "center",
                          padding: "10px 10px 10px 10px"
                        }}>
                          Current CVV: {this.state.cvv}
                        </Container>
                      </InputGroup.Prepend>
                      <FormControl bsPrefix="SettingInput"
                        onChange={event => {
                          this.setState({cvvToChange: event.target.value}) 
                          console.log(this.state)
                        }}
                      />
                      <InputGroup.Append>
                        <Button className="SettingButton"
                          onClick={() => {
                            if ( this.state.cvvToChange != "" ) {
                              this.changeState("cvv", this.state.cvvToChange)
                              console.log(this.state)
                            }
                          }}
                        >
                          Change
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Row>
                </Container>
              </div>
            </Row>
          </div>
        )
      case SHIPPING:
        return (
          <div>
            {/* Address */}
            <Row className="Setting">
              <div className="SettingTitle">Address</div>
              <div className="SettingContent">
                <Container>
                  <Row>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <Container style={{
                          backgroundColor: "#EBEBEB",
                          justifyContent: "center",
                          padding: "10px 10px 10px 10px"
                        }}>
                          Current Street: {this.state.street}
                        </Container>
                      </InputGroup.Prepend>
                      <FormControl bsPrefix="SettingInput"
                        onChange={event => this.setState({streetToChange: event.target.value})}
                      />
                      <InputGroup.Append>
                        <Button className="SettingButton"
                          onClick={() => {
                            if ( this.state.streetToChange != "" ) {
                              this.changeState("street", this.state.streetToChange)
                            }
                          }}
                        >
                          Change
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Row>
                  <Row>
                    <br />
                  </Row>
                  <Row>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <Container style={{
                          backgroundColor: "#EBEBEB",
                          justifyContent: "center",
                          padding: "10px 10px 10px 10px"
                        }}>
                          City/State/Zip: {this.state.city}
                        </Container>
                      </InputGroup.Prepend>
                      <FormControl bsPrefix="SettingInput"
                        onChange={event => this.setState({cityToChange: event.target.value})}
                      />
                      <InputGroup.Append>
                        <Button className="SettingButton"
                          onClick={() => {
                            if ( this.state.cityToChange != "" ) {
                              this.changeState("city", this.state.cityToChange)
                            }
                          }}
                        >
                          Change
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Row>
                </Container>
              </div>
            </Row>
          </div>
        )
    }
  }

  render() {
    return (
      <Container fluid className="Background">
          <Row>
            <NavBarComponent selected="settings"/>
          </Row>
          <Row>
            <Col xs={3} className="LeftSettings">
              <Row>
                <Container className="SettingCategories">
                  <div>
                    <Row>
                      {this.defaultSettingHandler()}
                    </Row>
                    <Row>
                      <Button bsPrefix="Category"
                        onClick={() => this.setState({settingCategory: NOTIFICATION})}
                      >
                        Notification Settings
                      </Button>
                    </Row>
                    <Row>
                      <Button bsPrefix="Category"
                        onClick={() => this.setState({settingCategory: FINANCE})}
                      >
                        Finance Settings
                      </Button>
                    </Row>
                    <Row>
                      <Button bsPrefix="Category"
                        onClick={() => this.setState({settingCategory: SHIPPING})}
                      >
                        Shipping Settings
                      </Button>
                    </Row>
                  </div>
                </Container>
              </Row>
            </Col>
            <Col className="RightSettings">
              <Row>
                <Container className="SettingPanel">
                  {this.renderSetting()}
                </Container>
              </Row>
            </Col>
          </Row>
      </Container>
    );
  }

}

export default SettingsPage;
import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col
} from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import classnames from "classnames";
import { connect } from 'react-redux';
import { addUser,findUser } from '../actions/userActions';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "2"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  state = {
    email : '',
    username : '',
    password : '',
    dob : '',
    balance : ''
  };

onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
};

onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
        email : this.state.email,
        username : this.state.username,
        password : this.state.password,
        dob : this.state.dob,
        balance : '0'
    }

    console.log(newUser);

    //add user via add user action.
      this.props.addUser(newUser);
  
      this.props.history.push('/login');
  }

    

  render() {

   
    return (
      <div className="Login">
          <Nav tabs>
            <NavItem>
              <NavLink href="/login/"
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup/"
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                SignUP
              </NavLink>
            </NavItem>
          </Nav>
          <img className="bran" src={require('./easygoimg.png')} />
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                  <Form onSubmit = {this.onSubmit}>
                    <FormGroup>
                      <Label for="exampleName">Username</Label>
                      <Input
                        type="text"
                        name = "username"
                        id="exampleName"
                        placeholder="Username"
                        onChange = {this.onChange}
                        value = {this.state.username}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password"
                        onChange = {this.onChange}
                        value = {this.state.password}
                      />
                    </FormGroup>
                    <Button color="success" >Submit</Button>
                  </Form>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                  <Form onSubmit = {this.onSubmit}>
                    <FormGroup>
                      <Label for="exampleEmail" className="headi">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Email"
                        onChange = {this.onChange}
                        value = {this.state.email}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleName" className="headi">Username</Label>
                      <Input
                        type="text"
                        name="username"
                        id="exampleName"
                        placeholder="username"
                        onChange = {this.onChange}
                        value = {this.state.username}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword" className="headi">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password"
                        onChange = {this.onChange}
                        value = {this.state.password}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleDOB" className="headi">D.O.B</Label>
                      <Input
                        type="date"
                        name="dob"
                        id="exampleDOB"
                        placeholder="Date of birth"
                        onChange = {this.onChange}
                        value = {this.state.dob}
                      />
                    </FormGroup>
                    <Button  color="success">Submit</Button>
                  </Form>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
    );
  }
}

const mapStateToProps = state => ({
      user : state.user
});


export default connect(mapStateToProps, {addUser,findUser})(Signup);

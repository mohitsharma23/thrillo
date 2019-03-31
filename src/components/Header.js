import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Header.css";
import Search from "./Search";

let dropdownOptions = [
  {
    head: "Others",
    options: ["China", "South Africa", "Russia", "USA", "Kenya"],
    open: false
  },
  {
    head: "South East Asia",
    options: [
      "China",
      "South Africa",
      "Russia",
      "USA",
      "Kenya",
      "India",
      "Egypt"
    ],
    open: false
  },
  {
    head: "Middle East",
    options: ["China", "South Africa", "Russia", "USA", "Kenya"],
    open: false
  },
  {
    head: "Indian Sub-continent",
    options: ["China", "South Africa", "Russia", "USA", "Kenya"],
    open: false
  },
  {
    head: "Oceana",
    options: ["China", "South Africa", "Russia", "USA"],
    open: false
  },
  {
    head: "Europe",
    options: ["China", "South Africa", "Russia", "USA"],
    open: false
  }
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      dropdownOptionsBool: false,
      dropdownTour: false,
      dropdownActivity: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleDropDown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  onMouseEnter = name => {
    if (name == "Tours") {
      this.setState({ dropdownTour: true });
    } else {
      this.setState({ dropdownActivity: true });
    }
  };

  onMouseLeave = name => {
    if (name == "Tours") {
      this.setState({ dropdownTour: false });
    } else {
      this.setState({ dropdownActivity: false });
    }
  };

  render() {
    return (
      <div className="bgStyle">
        <Navbar expand="md">
          <NavbarBrand href="https://www.thrillophilia.com/">
            Thrillophilia
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Getaways</NavLink>
              </NavItem>
              <Dropdown
                onMouseOver={() => this.onMouseEnter("Tours")}
                onMouseLeave={() => this.onMouseLeave("Tours")}
                isOpen={this.state.dropdownTour}
                toggle={this.toggleDropDown}
              >
                <DropdownToggle>Tours</DropdownToggle>
                <DropdownMenu>
                  <Container>
                    <DropdownItem header>Popular Tours</DropdownItem>

                    {dropdownOptions.map((item, index) => (
                      <Row>
                        <Col md="3">
                          <DropdownItem key={index}>{item.head}</DropdownItem>
                        </Col>
                      </Row>
                    ))}
                  </Container>
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                onMouseOver={() => this.onMouseEnter("Activities")}
                onMouseLeave={() => this.onMouseLeave("Activities")}
                isOpen={this.state.dropdownActivity}
                toggle={this.toggleDropDown}
              >
                <DropdownToggle>Activities</DropdownToggle>
                <DropdownMenu>
                  <Container>
                    <DropdownItem header>Popular Activities</DropdownItem>

                    {dropdownOptions.map((item, index) => (
                      <Row>
                        <Col md="3">
                          <DropdownItem key={index}>{item.head}</DropdownItem>
                        </Col>
                      </Row>
                    ))}
                  </Container>
                </DropdownMenu>
              </Dropdown>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">
                  <FontAwesomeIcon icon="gift" /> Gift an Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  <FontAwesomeIcon icon="mobile-alt" /> Get App
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="loginBtn"
                  href="https://github.com/reactstrap/reactstrap"
                >
                  <Button color="warning" size="sm">
                    Login
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div class="searchBar">
          <Container>
            <Row>
              <Col>
                <Search />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Header;

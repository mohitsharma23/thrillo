import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Socials from "./Socials";
import "../styles/Footer.css";

class Footer extends Component {
  state = {
    links: [
      { name: "About Us", href: "#", special: false },
      { name: "Thrillophilia Reviews", href: "#", special: false },
      { name: "Terms and Conditions", href: "#", special: false },
      { name: "Privacy Policy", href: "#", special: false },
      { name: "Copyright Policies", href: "#", special: false },
      { name: "Support", href: "#", special: false },
      { name: "Apps", href: "#", special: false },
      { name: "We are Hiring", href: "#", special: true },
      { name: "Gift an Experience", href: "#", special: true }
    ],
    blogs: [
      {
        name: "20 Places You Need To Visit In India With Your Best Friend",
        href: "#"
      },
      { name: "50 Best Honeymoon Destinations In India", href: "#" },
      {
        name: "25 Kickass International Trips Under 50k To Plan For 2015",
        href: "#"
      },
      { name: "52 Places To Visit In India Before You Turn 30", href: "#" },
      {
        name:
          "50 Countries Where Getting A Visa Is Easier Than Ordering A Pizza",
        href: "#"
      }
    ]
  };
  render() {
    return (
      <div>
        <div className="footer">
          <Container>
            <h2>Thrillophilia</h2>
            <Row>
              <Col md="3">
                <ul>
                  {this.state.links.map((link, index) => (
                    <li>
                      <a href={link.href} className={link.special && "special"}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md="6">
                <h6>Recent Blog Posts</h6>
                <ul>
                  {this.state.blogs.map((link, index) => (
                    <li>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md="3">
                <div className="extraLinks">
                  <ul>
                    <li>
                      <a href="#" className="special">
                        GoPro Passport Program
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6>Suppliers</h6>
                  <ul>
                    <li>
                      <a href="#" className="special">
                        List Your Activities
                      </a>
                    </li>
                    <li>
                      <a href="#" className="special">
                        Advertise with us
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6>Travel Agents</h6>
                  <ul>
                    <li>
                      <a href="#" className="special">
                        Signup as Agent
                      </a>
                    </li>
                    <li>
                      <a href="#" className="special">
                        Agent Login
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Socials />
      </div>
    );
  }
}

export default Footer;

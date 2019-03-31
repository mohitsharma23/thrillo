import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Info.css";

class Info extends Component {
  render() {
    return (
      <div className="infoClass">
        <Container>
          <Row>
            <Col md="3" className="head">
              <h5>At Thrillophilia You’ll get</h5>
            </Col>
            <Col md="9">
              <Container>
                <Row>
                  <Col md="4">
                    <Container>
                      <Row>
                        <Col md="2">
                          <FontAwesomeIcon
                            icon="binoculars"
                            style={{ color: "orange" }}
                          />
                        </Col>
                        <Col md="10">
                          <h6>Wide Range:</h6>
                          <p>10,000+ Travel Experiences in 25+ Countries</p>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                  <Col md="4">
                    <Container>
                      <Row>
                        <Col md="2">
                          <FontAwesomeIcon
                            icon="ticket-alt"
                            style={{ color: "orange" }}
                          />
                        </Col>
                        <Col md="10">
                          <h6>Easy Booking:</h6>
                          <p>Instant book with suppliers in real time</p>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                  <Col md="4">
                    <Container>
                      <Row>
                        <Col md="2">
                          <FontAwesomeIcon
                            icon="user"
                            style={{ color: "orange" }}
                          />
                        </Col>
                        <Col md="10">
                          <h6>Customer Experience:</h6>
                          <p>
                            With 98.7 CSAT we always exceed your expectations.
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Info;

import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/Listings.css";
import { cityArray } from "../cityData.js";
import City from "./City";

class Listings extends Component {
  render() {
    return (
      <div className="listMain">
        <h4>Popular Activities</h4>
        <Container>
          <Row>
            {cityArray.map((city, index) => (
              <Col md="3" className="cityCol">
                <City
                  values={city}
                  dimensions={{ height: "150px", width: "100%" }}
                />
              </Col>
            ))}
          </Row>
        </Container>

        <h4>Popular Tours</h4>
        <Container>
          <Row>
            {cityArray.slice(0, 12).map((city, index) => (
              <Col md="3" className="cityCol">
                <City
                  values={city}
                  dimensions={{ height: "150px", width: "100%" }}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Listings;

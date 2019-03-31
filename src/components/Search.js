import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import "../styles/Search.css";

class Search extends Component {
  render() {
    return (
      <div className="searchBar">
        <h3>10,000+ Travel Experiences in 25+ Countries</h3>
        <h1>BE THERE, DO THAT!</h1>
        <Container>
          <Row>
            <Col size="10">
              <div class="input-group inputBar">
                <Input
                  type="text"
                  placeholder="Search for Activities, Events, Places, etc"
                  class="form-control"
                />
                <span class="input-group-btn inputBtn">
                  <Button>Search</Button>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;

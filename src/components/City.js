import React, { Component } from "react";
import { Container } from "reactstrap";
import "../styles/City.css";

class City extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="imagebox">
        <a href="#">
          <img
            src={this.props.values.img}
            class="category-banner img-responsive"
            width={this.props.dimensions.width}
            height={this.props.dimensions.height}
          />
          <span className="imagebox-desc imagebox-desc-name">
            {this.props.values.name}
          </span>
          <span className="imagebox-desc imagebox-desc-listing">
            {this.props.values.listings} + listings
          </span>
        </a>
      </div>
    );
  }
}

export default City;

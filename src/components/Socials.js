import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Socials.css";

class Socials extends Component {
  render() {
    return (
      <div className="social">
        <div>
          <a href="#">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={["fab", "google-plus-square"]} size="2x" />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={["fab", "pinterest"]} size="2x" />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
        </div>
        <div>
          &copy; 2019 <span className="special">Thrillophilia.com</span> All
          rights reserved
        </div>
      </div>
    );
  }
}

export default Socials;

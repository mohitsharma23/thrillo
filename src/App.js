import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import CitySlider from "./components/CitySlider";
import Banner from "./components/Banners";
import Listings from "./components/Listings";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBinoculars,
  faUser,
  faTicketAlt,
  faGift,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGooglePlusSquare,
  faLinkedin,
  faPinterest,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBinoculars,
  faUser,
  faTicketAlt,
  faGift,
  faMobileAlt,
  faFacebook,
  faTwitter,
  faGooglePlusSquare,
  faLinkedin,
  faPinterest,
  faInstagram
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Info />
        <CitySlider />
        <Banner />
        <Listings />
        <Footer />
      </div>
    );
  }
}

export default App;

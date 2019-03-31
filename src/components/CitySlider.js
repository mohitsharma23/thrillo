import React, { Component } from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import "../styles/CitySlider.css";
import City from "./City";
import { cityArray } from "../cityData";

class CitySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderArr: cityArray.slice(0, 10)
    };
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="sliderBg">
        <Container>
          <h3>Curated Travel Experiences Across The Globe</h3>
          <div className="slider">
            <Slider {...settings}>
              {this.state.sliderArr.map((item, index) => (
                <div key={index}>
                  <City
                    values={item}
                    dimensions={{ height: "250px", width: "100%" }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    );
  }
}

export default CitySlider;

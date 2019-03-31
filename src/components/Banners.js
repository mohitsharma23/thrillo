import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import "../styles/Banners.css";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [
        {
          img:
            "https://images.thrillophilia.com/image/upload/s--kfW_UFKS--/c_fill,f_auto,fl_strip_profile,h_610,q_auto,w_2000/v1/banner_ads/photos/000/000/168/original/1551528610_Ladakh_Banner.png.jpg?1551528610",
          name: "Explore The Best Of Ladakh!"
        },
        {
          img:
            "https://images.thrillophilia.com/image/upload/s--ocz3xHv0--/c_fill,f_auto,fl_strip_profile,h_610,q_auto,w_2000/v1/banner_ads/photos/000/000/169/original/1520838928_ht.png.jpg?1520838928",
          name: "Best Himalayan Treks This Season"
        },
        {
          img:
            "https://images.thrillophilia.com/image/upload/s--tRTpc6cR--/c_fill,f_auto,fl_strip_profile,h_610,q_auto,w_2000/v1/banner_ads/photos/000/000/182/original/1531120301_hp1.jpg.jpg?1531120301",
          name: "Andaman & Nicobar Travel Exp"
        },
        {
          img:
            "https://images.thrillophilia.com/image/upload/s--UQI5RaOD--/c_fill,f_auto,fl_strip_profile,h_610,q_auto,w_2000/v1/banner_ads/photos/000/000/200/original/1537991495_hp-2.jpg.jpg?1537991495",
          name: "GoPro Passport Program"
        },
        {
          img:
            "https://images.thrillophilia.com/image/upload/s--KW6AADrH--/c_fill,f_auto,fl_strip_profile,h_610,q_auto,w_2000/v1/banner_ads/photos/000/000/221/original/1544529327_bang.jpg.jpg?1544529327",
          name: "Top Outdoor Experiences Around Banglore"
        }
      ],
      currIndex: 0
    };
    this.changeSlide();
  }

  changeSlide = () => {
    setInterval(() => {
      this.slider.slickNext();
      if (this.state.currIndex == 4) {
        this.setState({
          currIndex: 0
        });
      } else {
        this.setState(prevState => ({
          currIndex: prevState.currIndex + 1
        }));
      }
    }, 5000);
  };

  handleChange = i => {
    this.setState({
      currIndex: i
    });
    this.slider.slickGoTo(i, false);
  };

  test = () => {
    console.log("test");
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false
    };
    const { banners, currIndex } = this.state;
    return (
      <div className="bannerSlider">
        <Container>
          <Slider ref={c => (this.slider = c)} {...settings}>
            {banners.map((banner, index) => (
              <div key={index}>
                <img src={banner.img} height="250px" width="100%" />
                <span className="sliderCaption sliderCaptionSmall">
                  {banner.name}
                </span>
              </div>
            ))}
          </Slider>
          <div className="sliderCaption sliderCaptionBig">
            <Row>
              {banners.map((banner, index) => (
                <Col
                  onClick={() => {
                    this.handleChange(index);
                  }}
                  style={{
                    color: this.state.currIndex === index ? "black" : "grey"
                  }}
                >
                  {banner.name}
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Banner;

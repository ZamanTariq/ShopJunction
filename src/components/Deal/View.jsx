import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import styled from "styled-components";
import "../custom.css";

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: "",
      image2: "",
      image3: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/deal/")
      .then((response) => {
        this.setState({
          image1: response.data[0].imgCollection[0],
          image2: response.data[0].imgCollection[1],
          image3: response.data[0].imgCollection[2],
        });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Wrapper>
        <div className=" container-fluid slider-style my-2">
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            showIndicators={true}
            stopOnHover={true}
            swipeable={true}
          >
            <div>
              <img
                className="img-height"
                src={"/deal/" + this.state.image1}
                alt="Singapore"
              />
            </div>
            <div>
              <img
                className="img-height"
                src={"/deal/" + this.state.image2}
                alt="Japan"
              />
            </div>
            <div>
              <img
                className="img-height"
                src={"/deal/" + this.state.image3}
                alt="Las Vegas"
              />
            </div>
          </Carousel>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .container-fluid {
    width: 100%;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (max-width: 600px) {
  }
`;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default class MediaButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <div className="icon-bar  ">
            <i className="fas fa-share-alt ml-1 py-1 " title="Share"></i>
            <span className="facebook " data-social="fb" title="Facebook">
              <i className="fa fa-facebook"></i>
            </span>

            <span className="twitter" data-social="tw" title="Twitter">
              <i className="fa fa-twitter"></i>
            </span>
            <span className="pinterest" data-social="pt" title="Pinterest">
              <i className="fab fa-pinterest"></i>
            </span>
            <span className="linkedin" data-social="ln" title="Linked In">
              <i className="fa fa-linkedin"></i>
            </span>
          </div>
        </Wrapper>
      </React.Fragment>
    );
  }
}
const Wrapper = styled.div`
  /* Fixed/sticky icon bar (vertically aligned 50% from the top of the screen) */
  .icon-bar {
    position: fixed;
    top: 65%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  /* Style the icon bar links */
  .icon-bar span {
    display: block;
    text-align: center;
    padding: 8px;
    transition: all 0.3s ease;
    color: white;
    font-size: 10px;
  }

  /* Style the social media icons with color, if you want */
  .icon-bar span:hover {
    background-color: black;
    transform: scale(1.2);
  }
  .share {
    color: black;
    margin-left: 3px;
  }

  .facebook {
    background: #3b5998;
    color: white;
  }

  .twitter {
    background: #55acee;
    color: white;
  }

  .pinterest {
    background: #dd4b39;
    color: white;
  }

  .linkedin {
    background: #007bb5;
    color: white;
  }

  @media screen and (max-width: 600px) {
    .icon-bar {
      top: 65%;
    }
    .icon-bar span {
      padding: 6px;
      transition: all 0.3s ease;
      color: white;
      font-size: 7px;
    }
  }
`;

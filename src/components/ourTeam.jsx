import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class ourTeam extends Component {
  render() {
    return (
      <Wrapper>
        <div className="footer-body">
          <section>
            <h1 className="heading">Our Team</h1>
            <div className=" wrapper">
              {/* Usama */}
              <div className="footer-card">
                <img
                  src="/code.jpg"
                  alt="background-img"
                  className="card-img"
                />
                <img
                  src="/usama.jpg"
                  alt="logo_shop.jpg"
                  className="profile-img1"
                />
                <h1 className="our-name">Muhammad Usama</h1>
                <p className="job-title">
                  Lead Designer/MERN Stack/CoreUi & MaterialUi
                </p>
                <p className="about">Code can't lie.Comments can.</p>
                <Link to="/usama-detail" className="btn card-a">
                  About Me
                </Link>
                <ul className="social-media">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Zaman */}
              <div className="footer-card">
                <img
                  src="/code.jpg"
                  alt="background-img"
                  className="card-img"
                />
                <img
                  src="/hamza.jpg"
                  alt="logo_shop.jpg"
                  className="profile-img2"
                />
                <h1 className="our-name">Muhammad Hamza Jamshed</h1>
                <p className="job-title">MERN Stack </p>
                <p className="about">
                  You can't spell developer without 'Devel'
                </p>
                <Link to="/hamza-detail" className="btn">
                  About Me
                </Link>
                <ul className="social-media">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-square"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Zaman */}
              <div className="footer-card ">
                <img
                  src="/code.jpg"
                  alt="background-img"
                  className="card-img"
                />
                <img
                  src="/zaman.jpg"
                  alt="logo_shop.jpg"
                  className="profile-img3"
                />
                <h1 className="our-name">Zaman Tariq</h1>
                <p className="job-title">Wordpress/PHP/Laravel/MERN </p>
                <p className="about">Talk is cheap.Show me the Code</p>
                <Link to="/zaman-detail" className="btn">
                  About Me
                </Link>
                <ul className="social-media">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  .footer-body {
    font-size: 10px;
    font-family: "Roboto";
    margin-left: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  section {
    padding: 2rem 0;
    background-color: #fff;
  }
  .heading {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1px;
    margin-right: -3px;
    margin-bottom: 1rem;
    text-align: center;
    color: #333;
    position: relative;
  }
  .heading::after {
    content: "";
    width: 7.4rem;
    height: 0.35rem;
    background-color: #51ce76;
    position: absolute;
    bottom: -0.3rem;
    left: 50%;
    transform: translate(-50%);
    border-radius: 2rem;
  }
  .wrapper {
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
    margin-left: 1.2rem;
  }
  .footer-card {
    width: 21rem;
    background-color: #ffa704;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
  }
  .footer-card:nth-child(1) {
    background-color: rgb(204, 33, 3);
    box-shadow: 0.1rem 0.1rem 1rem rgba(100, 10, 10, 0.336);
  }
  .footer-card:nth-child(2) {
    background-color: rgb(157, 5, 218);
    box-shadow: 0.1rem 0.1rem 1rem rgba(130, 5, 134, 0.336);
  }
  .footer-card:nth-child(3) {
    background-color: rgb(17, 115, 243);
    box-shadow: 0.1rem 0.1rem 1rem rgba(3, 63, 190, 0.336);
  }
  .footer-card .card-img {
    width: 100%;
    height: 14rem;
    object-fit: cover;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 78%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 78%, 0% 100%);
  }
  .profile-img1 {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 50%;
    margin-top: -5.4rem;
    z-index: 999;
    border: 0.1rem solid #ff3705;
  }
  .profile-img2 {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 50%;
    margin-top: -5.4rem;
    z-index: 999;
    border: 0.1rem solid #6164f3;
  }
  .profile-img3 {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 50%;
    margin-top: -5.4rem;
    z-index: 999;
    border: 0.1rem solid #07b5e0;
  }
  .footer-card .our-name {
    font-size: 1.5rem;
    color: #fff;
    margin: 0.5rem 0;
    font-weight: bold;
  }
  .job-title {
    color: rgb(255, 255, 255);
    font-size: 1rem;
    font-weight: 300;
  }
  .about {
    font-size: 0.9rem;
    margin: 1rem 0;

    font-weight: bolder;
    text-align: center;
    color: rgb(252, 239, 59);
  }
  .footer-card:nth-child(1) .btn {
    padding: 0.7rem 2.2rem;
    background-color: #e00707;
    border-radius: 2rem;
    margin: 1rem 0;
    text-transform: uppercase;
    color: #eee;
    font-size: 0.8rem;
    transition: all 0.5s;
  }
  .footer-card:nth-child(2) .btn {
    padding: 0.7rem 2.2rem;
    background-color: #9400d8;
    border-radius: 2rem;
    margin: 1rem 0;
    text-transform: uppercase;
    color: #eee;
    font-size: 0.8rem;
    transition: all 0.5s;
  }
  .footer-card:nth-child(3) .btn {
    padding: 0.7rem 2.2rem;
    background-color: #0070d8;
    border-radius: 2rem;
    margin: 1rem 0;
    text-transform: uppercase;
    color: #eee;
    font-size: 0.8rem;
    transition: all 0.5s;
  }
  .footer-card .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0.5rem 0.5rem 2rem rgba(59, 46, 46, 0.2);
  }
  .footer-card .btn:active {
    transform: translateY(0);
    box-shadow: none;
  }
  .social-media {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem 0 0 0;

    margin-top: 0.3rem;

    border-top: 1px solid rgba(253, 253, 253, 0.473);

    transition: color 0.5s;
  }
  .social-media i {
    font-size: 1.7rem;
  }
  .fa-facebook-square {
    color: #3b5999;
  }
  .fa-twitter-square {
    color: #55acee;
  }
  .fa-instagram {
    color: #e6683c;
  }
  .fa-google-plus-square {
    color: #dd4b39;
    height: 40px;
  }
  .fa-facebook-square:hover,
  .fa-twitter-square:hover,
  .fa-instagram:hover,
  .fa-google-plus-square:hover {
    color: #ffffff;
  }
  @media screen and (min-width: 700px) {
    .wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    .footer-card {
      margin: 2rem;
      transition: transform 0.5s;
      margin-right: 2px;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .footer-card:nth-child(1) {
      animation: fadeIn 0.5s 0.5s backwards;
    }
    .footer-card:nth-child(2) {
      animation: fadeIn 0.5s 1s backwards;
    }
    .footer-card:nth-child(3) {
      animation: fadeIn 0.5s 1.5s backwards;
    }
  }
`;

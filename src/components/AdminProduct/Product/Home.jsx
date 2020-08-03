import React, { Component } from "react";
import styled from "styled-components";

// import AdminProductList from "./adminProductList";
import Electronic from "./Category/electronics";
import Women from "./Category/womenFashion";
import Men from "./Category/menFashion";
import AMBikes from "./Category/automotiveMotorBike";
import BabyToys from "./Category/babiesToys";
import ElectronicAccesories from "./Category/electronicAccessories";
import GroceriesPet from "./Category/groceriesPets";
import HealthBeauty from "./Category/healthBeauty";
import HomeLifeStyle from "./Category/homeLifeStyle";
import SportOutdoor from "./Category/sportsOutdoor";
import TvHomeAppliances from "./Category/tvHomeAppliances";
import WatchesBags from "./Category/watchesBagsJewleries";
import Deal from "../../Deal/View";

//Categorize by price ASCENDING
import Lessthan2500 from "./CategoryByPrice/lessThan2500";
import Greaterthan2500 from "./CategoryByPrice/greaterthan2500";
import Greaterthan5000 from "./CategoryByPrice/greaterthan5000";
import Lessthan5000 from "./CategoryByPrice/lessthan5000";
import Between5000to10000 from "./CategoryByPrice/between5000to10000";
import Between10000to15000 from "./CategoryByPrice/between10000to15000";
import Between15000to20000 from "./CategoryByPrice/between15000to20000";
import Between20000to25000 from "./CategoryByPrice/between20000to25000";
import Between25000to30000 from "./CategoryByPrice/between25000to30000";
import Between30000to35000 from "./CategoryByPrice/between30000to35000";
import Between35000to40000 from "./CategoryByPrice/between35000to40000";
import Between40000to45000 from "./CategoryByPrice/between40000to45000";
import Between45000to50000 from "./CategoryByPrice/between45000to50000";
import Greaterthan50000 from "./CategoryByPrice/greaterthan50000";
import Lessthan50000 from "./CategoryByPrice/lessthan50000";

//Categorize by price DESCINDING
import Declessthan2500 from "./CategoryByPriceDesc/lessThan2500";
import Decgreaterthan2500 from "./CategoryByPriceDesc/greaterthan2500";
import Decgreaterthan5000 from "./CategoryByPriceDesc/greaterthan5000";
import Declessthan5000 from "./CategoryByPriceDesc/lessthan5000";
import Decbetween5000to10000 from "./CategoryByPriceDesc/between5000to10000";
import Decbetween10000to15000 from "./CategoryByPriceDesc/between10000to15000";
import Decbetween15000to20000 from "./CategoryByPriceDesc/between15000to20000";
import Decbetween20000to25000 from "./CategoryByPriceDesc/between20000to25000";
import Decbetween25000to30000 from "./CategoryByPriceDesc/between25000to30000";
import Decbetween30000to35000 from "./CategoryByPriceDesc/between30000to35000";
import Decbetween35000to40000 from "./CategoryByPriceDesc/between35000to40000";
import Decbetween40000to45000 from "./CategoryByPriceDesc/between40000to45000";
import Decbetween45000to50000 from "./CategoryByPriceDesc/between45000to50000";
import Decgreaterthan50000 from "./CategoryByPriceDesc/greaterthan50000";
import Declessthan50000 from "./CategoryByPriceDesc/lessthan50000";

import SearchableHome from "../../SearchFilter";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeLessThan2500 = this.onChangeLessThan2500.bind(this);
    this.onChangeGreaterThan2500 = this.onChangeGreaterThan2500.bind(this);
    this.onChangeLessThan5000 = this.onChangeLessThan5000.bind(this);
    this.onChangeGreaterThan5000 = this.onChangeGreaterThan5000.bind(this);
    this.onChangeLessThan50000 = this.onChangeLessThan50000.bind(this);
    this.onChangeGreaterThan50000 = this.onChangeGreaterThan50000.bind(this);
    this.onChangeBetween5000to10000 = this.onChangeBetween5000to10000.bind(
      this
    );
    this.onChangeBetween10000to15000 = this.onChangeBetween10000to15000.bind(
      this
    );
    this.onChangeBetween15000to20000 = this.onChangeBetween15000to20000.bind(
      this
    );
    this.onChangeBetween20000to25000 = this.onChangeBetween20000to25000.bind(
      this
    );
    this.onChangeBetween25000to30000 = this.onChangeBetween25000to30000.bind(
      this
    );
    this.onChangeBetween30000to35000 = this.onChangeBetween30000to35000.bind(
      this
    );
    this.onChangeBetween35000to40000 = this.onChangeBetween35000to40000.bind(
      this
    );
    this.onChangeBetween40000to45000 = this.onChangeBetween40000to45000.bind(
      this
    );
    this.onChangeBetween45000to50000 = this.onChangeBetween45000to50000.bind(
      this
    );

    this.onChangeDLessThan2500 = this.onChangeDLessThan2500.bind(this);
    this.onChangeDGreaterThan2500 = this.onChangeDGreaterThan2500.bind(this);
    this.onChangeDLessThan5000 = this.onChangeDLessThan5000.bind(this);
    this.onChangeDGreaterThan5000 = this.onChangeDGreaterThan5000.bind(this);
    this.onChangeDLessThan50000 = this.onChangeDLessThan50000.bind(this);
    this.onChangeDGreaterThan50000 = this.onChangeDGreaterThan50000.bind(this);
    this.onChangeDBetween5000to10000 = this.onChangeDBetween5000to10000.bind(
      this
    );
    this.onChangeDBetween10000to15000 = this.onChangeDBetween10000to15000.bind(
      this
    );
    this.onChangeDBetween15000to20000 = this.onChangeDBetween15000to20000.bind(
      this
    );
    this.onChangeDBetween20000to25000 = this.onChangeDBetween20000to25000.bind(
      this
    );
    this.onChangeDBetween25000to30000 = this.onChangeDBetween25000to30000.bind(
      this
    );
    this.onChangeDBetween30000to35000 = this.onChangeDBetween30000to35000.bind(
      this
    );
    this.onChangeDBetween35000to40000 = this.onChangeDBetween35000to40000.bind(
      this
    );
    this.onChangeDBetween40000to45000 = this.onChangeDBetween40000to45000.bind(
      this
    );
    this.onChangeDBetween45000to50000 = this.onChangeDBetween45000to50000.bind(
      this
    );

    this.state = {
      sidebar: "All",
    };
  }

  onChangeCategory(e) {
    this.setState({
      sidebar: e.target.value,
    });
  }
  // ---ASCENDING---
  onChangeLessThan2500(e) {
    this.setState({
      sidebar: "lessthan2500",
    });
  }

  onChangeGreaterThan2500(e) {
    this.setState({
      sidebar: "greaterthan2500",
    });
  }

  onChangeLessThan5000(e) {
    this.setState({
      sidebar: "lessthan5000",
    });
  }

  onChangeGreaterThan5000(e) {
    this.setState({
      sidebar: "greaterthan5000",
    });
  }
  onChangeLessThan50000(e) {
    this.setState({
      sidebar: "lessthan50000",
    });
  }

  onChangeGreaterThan50000(e) {
    this.setState({
      sidebar: "greaterthan50000",
    });
  }

  onChangeBetween5000to10000() {
    this.setState({
      sidebar: "between5000-10000",
    });
  }
  onChangeBetween10000to15000() {
    this.setState({
      sidebar: "between10000-15000",
    });
  }

  onChangeBetween15000to20000() {
    this.setState({
      sidebar: "between15000-20000",
    });
  }

  onChangeBetween20000to25000() {
    this.setState({
      sidebar: "between20000-25000",
    });
  }

  onChangeBetween25000to30000() {
    this.setState({
      sidebar: "between25000-30000",
    });
  }

  onChangeBetween30000to35000() {
    this.setState({
      sidebar: "between30000-35000",
    });
  }

  onChangeBetween35000to40000() {
    this.setState({
      sidebar: "between35000-40000",
    });
  }

  onChangeBetween40000to45000() {
    this.setState({
      sidebar: "between40000-45000",
    });
  }

  onChangeBetween45000to50000() {
    this.setState({
      sidebar: "between45000-50000",
    });
  }
  // --END--

  // ---DESCENDING---
  onChangeDLessThan2500(e) {
    this.setState({
      sidebar: "dlessthan2500",
    });
  }

  onChangeDGreaterThan2500(e) {
    this.setState({
      sidebar: "dgreaterthan2500",
    });
  }

  onChangeDLessThan5000(e) {
    this.setState({
      sidebar: "dlessthan5000",
    });
  }

  onChangeDGreaterThan5000(e) {
    this.setState({
      sidebar: "dgreaterthan5000",
    });
  }
  onChangeDLessThan50000(e) {
    this.setState({
      sidebar: "dlessthan50000",
    });
  }

  onChangeDGreaterThan50000(e) {
    this.setState({
      sidebar: "dgreaterthan50000",
    });
  }

  onChangeDBetween5000to10000() {
    this.setState({
      sidebar: "dbetween5000-10000",
    });
  }
  onChangeDBetween10000to15000() {
    this.setState({
      sidebar: "dbetween10000-15000",
    });
  }

  onChangeDBetween15000to20000() {
    this.setState({
      sidebar: "dbetween15000-20000",
    });
  }

  onChangeDBetween20000to25000() {
    this.setState({
      sidebar: "dbetween20000-25000",
    });
  }

  onChangeDBetween25000to30000() {
    this.setState({
      sidebar: "dbetween25000-30000",
    });
  }

  onChangeDBetween30000to35000() {
    this.setState({
      sidebar: "dbetween30000-35000",
    });
  }

  onChangeDBetween35000to40000() {
    this.setState({
      sidebar: "dbetween35000-40000",
    });
  }

  onChangeDBetween40000to45000() {
    this.setState({
      sidebar: "dbetween40000-45000",
    });
  }

  onChangeDBetween45000to50000() {
    this.setState({
      sidebar: "dbetween45000-50000",
    });
  }
  // --END--

  render() {
    return (
      <React.Fragment>
        <Deal />

        {/* <Sidebar/> */}
        <div className="row ml-3">
          <div className="col-sm-2">
            <div className="pull-left">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <button
                    type="button"
                    id="dropdown"
                    data-toggle="dropdown"
                    className="btn btn-deep-orange  multi-level-dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Prize Filter
                    <i className="fas fa-filter fa-1x fil-mar-lef"></i>
                  </button>
                  <ul
                    style={{ listStyleType: "none" }}
                    className="dropdown-menu mt-2 rounded-0 white border-0 z-depth-1"
                  >
                    <li className="dropdown-item dropdown-submenu p-0">
                      <a
                        href="#"
                        data-toggle="dropdown"
                        className=" dropdown-item w-100"
                      >
                        <b>Price</b>{" "}
                        <i className="fas fa-sort-amount-down-alt"></i>{" "}
                      </a>
                      <ul
                        style={{ height: "250px", overflow: "auto" }}
                        className="dropdown-menu  rounded-0 white border-0 z-depth-1"
                      >
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeLessThan2500}
                            className="dropdown-item w-100"
                          >{`<=2500`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeGreaterThan2500}
                            className="dropdown-item w-100"
                          >{`=>2500`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeLessThan5000}
                            className="dropdown-item w-100"
                          >{`<=5000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeGreaterThan5000}
                            className="dropdown-item w-100"
                          >{`=>5000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeBetween5000to10000}
                            className="dropdown-item w-100"
                          >{`5000-10000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeBetween10000to15000}
                            className="dropdown-item w-100"
                          >{`10000-15000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeBetween15000to20000}
                            className="dropdown-item w-100"
                          >{`15000-20000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeBetween20000to25000}
                            className="dropdown-item w-100"
                          >{`20000-25000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeBetween25000to30000}
                            className="dropdown-item w-100"
                          >{`25000-30000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeBetween30000to35000}
                            className="dropdown-item w-100"
                          >{`30000-35000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeBetween35000to40000}
                            className="dropdown-item w-100"
                          >{`35000-40000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeBetween40000to45000}
                            className="dropdown-item w-100"
                          >{`40000-45000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeBetween45000to50000}
                            className="dropdown-item w-100"
                          >{`45000-50000`}</button>
                        </li>

                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeLessThan50000}
                            className="dropdown-item w-100"
                          >{`<=50000`}</button>
                        </li>

                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeGreaterThan50000}
                            className="dropdown-item w-100"
                          >{`=>50000`}</button>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-item dropdown-submenu p-0">
                      <a
                        href="#"
                        data-toggle="dropdown"
                        className=" dropdown-item w-100"
                      >
                        <b>Price</b>{" "}
                        <i className="fas fa-sort-amount-up-alt"></i>{" "}
                      </a>
                      <ul
                        style={{ height: "250px", overflow: "auto" }}
                        className="dropdown-menu  rounded-0 white border-0 z-depth-1"
                      >
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDLessThan2500}
                            className="dropdown-item w-100"
                          >{`<=2500`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDGreaterThan2500}
                            className="dropdown-item w-100"
                          >{`=>2500`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDLessThan5000}
                            className="dropdown-item w-100"
                          >{`<=5000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDGreaterThan5000}
                            className="dropdown-item w-100"
                          >{`=>5000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDBetween5000to10000}
                            className="dropdown-item w-100"
                          >{`5000-10000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDBetween10000to15000}
                            className="dropdown-item w-100"
                          >{`10000-15000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDBetween15000to20000}
                            className="dropdown-item w-100"
                          >{`15000-20000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDBetween20000to25000}
                            className="dropdown-item w-100"
                          >{`20000-25000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDBetween25000to30000}
                            className="dropdown-item w-100"
                          >{`25000-30000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDBetween30000to35000}
                            className="dropdown-item w-100"
                          >{`30000-35000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDBetween35000to40000}
                            className="dropdown-item w-100"
                          >{`35000-40000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDBetween40000to45000}
                            className="dropdown-item w-100"
                          >{`40000-45000`}</button>
                        </li>
                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDBetween45000to50000}
                            className="dropdown-item w-100"
                          >{`45000-50000`}</button>
                        </li>

                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDLessThan50000}
                            className="dropdown-item w-100"
                          >{`<=50000`}</button>
                        </li>

                        <li className="dropdown-item p-0">
                          <button
                            onClick={this.onChangeDGreaterThan50000}
                            className="dropdown-item w-100"
                          >{`=>50000`}</button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-8 ml-2 mr-2">
            <b className="pull-left">Search By Category </b>
            <Wrapper>
              <select
                className="scrollbar form-control  browser-default  custom-select mb-2 sea-set2"
                data-live-search="true"
                value={this.state.sidebar}
                onChange={this.onChangeCategory}
                placeholder="Search By Category"
              >
                <option defaultValue value="All">
                  All
                </option>
                <option value="Electronic Devices">Electronic Devices</option>
                <option value="Electronic Accessories">
                  Electronic Accessories
                </option>
                <option value="TV & Home Appliances">
                  TV & Home Appliances
                </option>
                <option value="Health & Beauty">Health & Beauty</option>
                <option value="Babies & Toys">Babies & Toys</option>
                <option value="Groceries & Pets">Groceries & Pets</option>
                <option value="Home & Lifestyle">Home & Lifestyle</option>
                <option value="Women Fashion">Women Fashion</option>
                <option value="Men Fashion">Men Fashion</option>
                <option value="Watches, Bags & Jewelery">
                  Watches, Bags & Jewelery
                </option>
                <option value="Sports & Outdoor">Sports & Outdoor</option>
                <option value="Automotive & Motorbike">
                  Automotive & Motorbike
                </option>
              </select>
            </Wrapper>
          </div>
        </div>

        {/* <Sidebar/> */}

        <div className="container-fluid">
          {this.state.sidebar === "All" ? (
            <React.Fragment>
              <SearchableHome />
            </React.Fragment>
          ) : this.state.sidebar === "Electronic Devices" ? (
            <React.Fragment>
              <Electronic />
            </React.Fragment>
          ) : this.state.sidebar === "Electronic Accessories" ? (
            <React.Fragment>
              <ElectronicAccesories />
            </React.Fragment>
          ) : this.state.sidebar === "Health & Beauty" ? (
            <React.Fragment>
              <HealthBeauty />
            </React.Fragment>
          ) : this.state.sidebar === "Babies & Toys" ? (
            <React.Fragment>
              <BabyToys />
            </React.Fragment>
          ) : this.state.sidebar === "Groceries & Pets" ? (
            <React.Fragment>
              <GroceriesPet />
            </React.Fragment>
          ) : this.state.sidebar === "Home & Lifestyle" ? (
            <React.Fragment>
              <HomeLifeStyle />
            </React.Fragment>
          ) : this.state.sidebar === "Women Fashion" ? (
            <React.Fragment>
              <Women />
            </React.Fragment>
          ) : this.state.sidebar === "Men Fashion" ? (
            <React.Fragment>
              <Men />
            </React.Fragment>
          ) : this.state.sidebar === "Watches, Bags & Jewelery" ? (
            <React.Fragment>
              <WatchesBags />
            </React.Fragment>
          ) : this.state.sidebar === "Sports & Outdoor" ? (
            <React.Fragment>
              <SportOutdoor />
            </React.Fragment>
          ) : this.state.sidebar === "Automotive & Motorbike" ? (
            <React.Fragment>
              <AMBikes />
            </React.Fragment>
          ) : this.state.sidebar === "TV & Home Appliances" ? (
            <React.Fragment>
              <TvHomeAppliances />
            </React.Fragment>
          ) : this.state.sidebar === "lessthan2500" ? (
            <React.Fragment>
              <Lessthan2500 />
            </React.Fragment>
          ) : this.state.sidebar === "greaterthan2500" ? (
            <React.Fragment>
              <Greaterthan2500 />
            </React.Fragment>
          ) : this.state.sidebar === "lessthan5000" ? (
            <React.Fragment>
              <Lessthan5000 />
            </React.Fragment>
          ) : this.state.sidebar === "greaterthan5000" ? (
            <React.Fragment>
              <Greaterthan5000 />
            </React.Fragment>
          ) : this.state.sidebar === "lessthan50000" ? (
            <React.Fragment>
              <Lessthan50000 />
            </React.Fragment>
          ) : this.state.sidebar === "greaterthan50000" ? (
            <React.Fragment>
              <Greaterthan50000 />
            </React.Fragment>
          ) : this.state.sidebar === "between5000-10000" ? (
            <React.Fragment>
              <Between5000to10000 />
            </React.Fragment>
          ) : this.state.sidebar === "between10000-15000" ? (
            <React.Fragment>
              <Between10000to15000 />
            </React.Fragment>
          ) : this.state.sidebar === "between15000-20000" ? (
            <React.Fragment>
              <Between15000to20000 />
            </React.Fragment>
          ) : this.state.sidebar === "between20000-25000" ? (
            <React.Fragment>
              <Between20000to25000 />
            </React.Fragment>
          ) : this.state.sidebar === "between25000-30000" ? (
            <React.Fragment>
              <Between25000to30000 />
            </React.Fragment>
          ) : this.state.sidebar === "between30000-35000" ? (
            <React.Fragment>
              <Between30000to35000 />
            </React.Fragment>
          ) : this.state.sidebar === "between35000-40000" ? (
            <React.Fragment>
              <Between35000to40000 />
            </React.Fragment>
          ) : this.state.sidebar === "between40000-45000" ? (
            <React.Fragment>
              <Between40000to45000 />
            </React.Fragment>
          ) : this.state.sidebar === "between45000-50000" ? (
            <React.Fragment>
              <Between45000to50000 />
            </React.Fragment>
          ) : this.state.sidebar === "dlessthan2500" ? (
            <React.Fragment>
              <Declessthan2500 />
            </React.Fragment>
          ) : this.state.sidebar === "dgreaterthan2500" ? (
            <React.Fragment>
              <Decgreaterthan2500 />
            </React.Fragment>
          ) : this.state.sidebar === "dlessthan5000" ? (
            <React.Fragment>
              <Declessthan5000 />
            </React.Fragment>
          ) : this.state.sidebar === "dgreaterthan5000" ? (
            <React.Fragment>
              <Decgreaterthan5000 />
            </React.Fragment>
          ) : this.state.sidebar === "dlessthan50000" ? (
            <React.Fragment>
              <Declessthan50000 />
            </React.Fragment>
          ) : this.state.sidebar === "dgreaterthan50000" ? (
            <React.Fragment>
              <Decgreaterthan50000 />
            </React.Fragment>
          ) : this.state.sidebar === "dbetween5000-10000" ? (
            <React.Fragment>
              <Decbetween5000to10000 />
            </React.Fragment>
          ) : this.state.sidebar === "dbetween10000-15000" ? (
            <React.Fragment>
              <Decbetween10000to15000 />
            </React.Fragment>
          ) : this.state.sidebar === "dbetween15000-20000" ? (
            <React.Fragment>
              <Decbetween15000to20000 />
            </React.Fragment>
          ) : this.state.sidebar === "dbetween20000-25000" ? (
            <React.Fragment>
              <Decbetween20000to25000 />
            </React.Fragment>
          ) : this.state.sidebar === "dbetween25000-30000" ? (
            <React.Fragment>
              <Decbetween25000to30000 />
            </React.Fragment>
          ) : this.state.sidebar === "dbetween30000-35000" ? (
            <React.Fragment>
              <Decbetween30000to35000 />
            </React.Fragment>
          ) : this.state.sidebar === "dbetween35000-40000" ? (
            <React.Fragment>
              <Decbetween35000to40000 />
            </React.Fragment>
          ) : this.state.sidebar === "dbetween40000-45000" ? (
            <React.Fragment>
              <Decbetween40000to45000 />
            </React.Fragment>
          ) : this.state.sidebar === "dbetween45000-50000" ? (
            <React.Fragment>
              <Decbetween45000to50000 />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="container">Not Such Type Category Found</div>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  .form-control:focus {
    border-color: #f57c00;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset,
      0px 0px 8px rgba(255, 167, 4, 0.575);
  }
`;

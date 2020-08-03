import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import NavBar from "./components/NavBar";

import Footer from "./components/Footer";

import Default from "./components/Default";

// ADMIN

import Home from "./components/AdminProduct/Product/Home";
import userLogin from "./components/User/Login";
import userRegister from "./components/User/Register";
import userProfile from "./components/User/profile";
//  MERCHANT
import merchantLogin from "./components/Merchant/Login";
import merchantRegister from "./components/Merchant/Register";
import merchantProfile from "./components/Merchant/merchantProfile";

import adminPanel from "./components/adminPanel";

import productPanel from "./components/AdminProduct/Product/productPanel";
import merchantProductPanel from "./components/AdminProduct/Product/merchantProductPanel";
import Dashboard from "./components/Dashboard";
import Material from "./components/Material";

import merchantProductList from "./components/AdminProduct/Product/merchantProductList";
import Create from "./components/MerchantProduct/Create";
import Edit from "./components/MerchantProduct/Edit";
import Index from "./components/MerchantProduct/Index";
import Detail from "./components/MerchantProduct/Detail";
//Dispaly Home screen Booking page
import BookingDetail from "./components/MerchantProduct/bookingDetail";

import adminProductList from "./components/AdminProduct/Product/adminProductList";
import CreateAdminProduct from "./components/adminProducts/Create";
import EditAdminProduct from "./components/adminProducts/Edit";
import IndexAdminProduct from "./components/adminProducts/Index";
import DisplayUsers from "./components/Admin/displayUsers";
import DisplayMerchants from "./components/Admin/merchantDetails/displayMerchants";
import EditUser from "./components/Admin/editUser";
import EditMerchant from "./components/Admin/merchantDetails/editMerchant";
import DetailAdminProduct from "./components/adminProducts/Detail";
import Login from "./components/Login";
import Register from "./components/Register";

import Cart from "./components/Cart";

import ourTeam from "./components/ourTeam";

import mainCategory from "./components/AdminProduct/Product/Category/mainCategory";
import createDeal from "./components/Deal/Create";
// Categorize by category
import newCat from "./components/AdminProduct/Product/Category/newCat";
import Men from "./components/AdminProduct/Product/Category/menFashion";
import Electronic from "./components/AdminProduct/Product/Category/electronics";
import ElectronicAccesories from "./components/AdminProduct/Product/Category/electronicAccessories";
import TvHomeAppliances from "./components/AdminProduct/Product/Category/tvHomeAppliances";
import WatchesBagsJewlery from "./components/AdminProduct/Product/Category/watchesBagsJewleries";
import HealthBeauty from "./components/AdminProduct/Product/Category/healthBeauty";
import Women from "./components/AdminProduct/Product/Category/womenFashion";
import BabiesToys from "./components/AdminProduct/Product/Category/babiesToys";
import HomeLifeStyle from "./components/AdminProduct/Product/Category/homeLifeStyle";
import SportsOutdoor from "./components/AdminProduct/Product/Category/sportsOutdoor";
import AutoMotiveMotorBike from "./components/AdminProduct/Product/Category/automotiveMotorBike";
import GroceriesPet from "./components/AdminProduct/Product/Category/groceriesPets";

//Categorize by price ASCENDING
import lessthan2500 from "./components/AdminProduct/Product/CategoryByPrice/lessThan2500";
import greaterthan2500 from "./components/AdminProduct/Product/CategoryByPrice/greaterthan2500";
import greaterthan5000 from "./components/AdminProduct/Product/CategoryByPrice/greaterthan5000";
import lessthan5000 from "./components/AdminProduct/Product/CategoryByPrice/lessthan5000";
import between5000to10000 from "./components/AdminProduct/Product/CategoryByPrice/between5000to10000";
import between10000to15000 from "./components/AdminProduct/Product/CategoryByPrice/between10000to15000";
import between15000to20000 from "./components/AdminProduct/Product/CategoryByPrice/between15000to20000";
import between20000to25000 from "./components/AdminProduct/Product/CategoryByPrice/between20000to25000";
import between25000to30000 from "./components/AdminProduct/Product/CategoryByPrice/between25000to30000";
import between30000to35000 from "./components/AdminProduct/Product/CategoryByPrice/between30000to35000";
import between35000to40000 from "./components/AdminProduct/Product/CategoryByPrice/between35000to40000";
import between40000to45000 from "./components/AdminProduct/Product/CategoryByPrice/between40000to45000";
import between45000to50000 from "./components/AdminProduct/Product/CategoryByPrice/between45000to50000";
import greaterthan50000 from "./components/AdminProduct/Product/CategoryByPrice/greaterthan50000";
import lessthan50000 from "./components/AdminProduct/Product/CategoryByPrice/lessthan50000";

//Categorize by price DESCINDING
import declessthan2500 from "./components/AdminProduct/Product/CategoryByPriceDesc/lessThan2500";
import decgreaterthan2500 from "./components/AdminProduct/Product/CategoryByPriceDesc/greaterthan2500";
import decgreaterthan5000 from "./components/AdminProduct/Product/CategoryByPriceDesc/greaterthan5000";
import declessthan5000 from "./components/AdminProduct/Product/CategoryByPriceDesc/lessthan5000";
import decbetween5000to10000 from "./components/AdminProduct/Product/CategoryByPriceDesc/between5000to10000";
import decbetween10000to15000 from "./components/AdminProduct/Product/CategoryByPriceDesc/between10000to15000";
import decbetween15000to20000 from "./components/AdminProduct/Product/CategoryByPriceDesc/between15000to20000";
import decbetween20000to25000 from "./components/AdminProduct/Product/CategoryByPriceDesc/between20000to25000";
import decbetween25000to30000 from "./components/AdminProduct/Product/CategoryByPriceDesc/between25000to30000";
import decbetween30000to35000 from "./components/AdminProduct/Product/CategoryByPriceDesc/between30000to35000";
import decbetween35000to40000 from "./components/AdminProduct/Product/CategoryByPriceDesc/between35000to40000";
import decbetween40000to45000 from "./components/AdminProduct/Product/CategoryByPriceDesc/between40000to45000";
import decbetween45000to50000 from "./components/AdminProduct/Product/CategoryByPriceDesc/between45000to50000";
import decgreaterthan50000 from "./components/AdminProduct/Product/CategoryByPriceDesc/greaterthan50000";
import declessthan50000 from "./components/AdminProduct/Product/CategoryByPriceDesc/lessthan50000";
//Sort

import SortByTitle from "./components/AdminProduct/Product/Sort/SortByTitle";
import SortByPrice from "./components/AdminProduct/Product/Sort/SortByPrice";

import DSortByTitle from "./components/AdminProduct/Product/SortDesc/DSortByTitle";
import DSortByPrice from "./components/AdminProduct/Product/SortDesc/DSortByPrice";
//All Bookings
import DisplayBookingsDetail from "./components/User/Function/bookingsDetail/displayBookingsDetail";
import DisplayMerchantBooking from "./components/Merchant/bookingsDetail/displayBooking";
import DisplayMerchantConfirmBooking from "./components/Merchant/confirmBooking/displayMerchantConfirmBooking ";
import DisplayUsersConfirmBookings from "./components/User/Function/confirmBookings/displayUsersConfirmBookings";
//Display Register user their Products
import ProductTable from "./components/MerchantProduct/registerMerchantProducts/productTable";
//Merchant order
import CustomersOrders from "./components/Merchant/customersOrders/customersOrders";
import SentOrders from "./components/Merchant/customersOrders/sentOrders.jsx";
import RecievedOrdersRecord from "./components/User/Function/order/recievedOrdersRecord";
//footer Pges
import Subscribe from "./components/Subscribe";
import FAQ from "./components/FAQ";
import contactUs from "./components/contactUs";
import ourServices from "./components/ourServices";
import becomeMember from "./components/becomeMember";

import FavouriteProductList from "./components/User/Function/favourite/favouriteProductList";
import AdminProfile from "./components/Admin/adminRegister/adminProfile";
import AdminRegister from "./components/Admin/adminRegister/Register";
import AdminSignIn from "./components/Admin/adminRegister/Login";

import MediaButton from "./components/MediaButton";
import SearchFilter from "./components/SearchFilter";
import NewCart from "./components/User/Function/cartDetails/cartNew";
import PendingOrders from "./components/User/Function/order/pendingOrders";
import IncDecBtn from "./components/IncDecBtn";

// Team Detail
import AboutUS from "./components/aboutUs";

//Related Products

import RelatedProduct from "./components/adminProducts/RelatedProducts/RelatedProduct";
import RelatedProductDetail from "./components/adminProducts/RelatedProducts/RelatedProductDetail";

import EditMerchantProductByAdmin from "./components/MerchantProduct/EditMerchantProductByAdmin";

import GoBottomtoTop from "./components/GoBottomtoTop";

import ChatBot from "./components/Chatbot";
import ShopDetail from "./components/MerchantProduct/shopDetail";
import TermsConditions from "./components/termsCondition";
import ClientMsg from "./components/clientMSG";
import map from "./components/map";

import AdminDB from "././components/AdminDB";
import AdminOrders from "./components/adminProducts/adminOrders/adminOrders";
import LoginAdminProduct from "./components/adminProducts/particularAdminProducts/loginAdminProducts";
import DeliverdOrders from "./components/adminProducts/adminOrders/deliverdOrders";
import barChart from "./components/AdminPanelChart/ProductsChart/BarChart";
import resetPassword from "./components/ResetPassword";
import forgetPassword from "./components/forgetpassword";
//MerchantReset
import MerchantResetPassword from "./components/Merchant/merchantForgetPassword/merchantResetPassword";
import MerchantForgetPassword from "./components/Merchant/merchantForgetPassword/merchantForgetPassword";

import AdminTopProduct from "./components/AdminTopProducts/MainPage";
import Popup from "./components/popup";
import EditProfile from "./components/User/editProfile";
import ZamanDetail from "./components/TeamDetail/zamandetail";
import HamzaDetail from "./components/TeamDetail/hamzadetail";
import UsamaDetail from "./components/TeamDetail/usamadetail";

import MerchantSideBar from "./components/merchantSideBar";
import ShopDisplay from "./components/Merchant/shopDisplay/shopDisplay";

///                  ADMIN PANEL LINK'S        ///
import AdminMainPage from "./components/AdminPanelChart/AdminMainPage";
import DisplayAdmin from "./components/Admin/displayAdmin";
import DisplayUser from "./components/Admin/displayUsers";
import DispalyMerchant from "./components/Admin/merchantDetails/displayMerchants";
import DisplayAdminProduct from "./components/adminProducts/Index";
import DisplayMerchantProduct from "./components/MerchantProduct/Index";
import UserChart from "./components/AdminPanelChart/UsersChart/UserChart";
import ProductChart from "./components/AdminPanelChart/ProductsChart/ProductChart";
import Calender from "./components/AdminPanelChart/Calender";
import UserStatus from "./components/AdminPanelChart/OnlineVsOffline";

import InvestByCategory from "./components/AdminPanelChart/Investment/InvestByCategory";
import SaleByCategory from "./components/AdminPanelChart/Sale/SaleByCategory";
import SaleByTitle from "./components/AdminPanelChart/Sale/SaleByTitle";
import SaleMonthlyReport from "./components/AdminPanelChart/Report/SaleMonthlyReport";
import SaleYearlyReport from "./components/AdminPanelChart/Report/SaleYearlyReport";
import SaleBarChart from "./components/AdminPanelChart/SaleChart/BarChart";
import DisplayUserRejectBookings from "./components/User/Function/rejectBookings/displayUsersRejectBookings";

import HowToBuy from "./components/howToBuy";
// import MonthlyStat from "./components/AdminPanelChart/SaleChart/monthly";

import EditUserDiscount from "./components/User/Discount/editUserDiscount";
import MerchantSaleTitle from "./components/Merchant/merchantSales/merchantSalesTitle";
import MerchantSaleCategory from "./components/Merchant/merchantSales/merchantSalesCategory";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MediaButton />

        <GoBottomtoTop />

        <NavBar />
        <ChatBot />

        <div>
          <Switch>
            <Route path="/bar" component={barChart} />
            <Route exact path="/" component={Home} />
            <Route path="/how-to-buy" component={HowToBuy} />
            <Route path="/sidebarMerchant" component={MerchantSideBar} />
            <route path="/popup" component={Popup} />
            <Route path="/usama-detail" component={UsamaDetail} />
            <Route path="/hamza-detail" component={HamzaDetail} />
            <Route path="/zaman-detail" component={ZamanDetail} />

            <Route path="/admins" component={AdminDB} />

            <Route path="/inc" component={IncDecBtn} />
            <Route path="/search" component={SearchFilter} />
            <Route path="/newcart" component={NewCart} />
            <Route path="/map" component={map} />
            <Route path="/clientmsg" component={ClientMsg} />
            <Route path="/cart" component={Cart} />
            <Route path="/about-us" component={AboutUS} />
            <Route path="/tcc" component={TermsConditions} />

            <Route
              path="/merchant-product-list"
              component={merchantProductList}
            />

            <Route path="/material" component={Material} />
            <Route path="/dashboard" component={Dashboard} />

            <Route path="/user-register" component={userRegister} />
            <Route path="/user-login" component={userLogin} />
            <Route path="/user-profile" component={userProfile} />
            <Route path="/edit-user-profile" component={EditProfile} />
            <Route path="/mycart" component={NewCart} />
            <Route path="/myorders" component={PendingOrders} />
            <Route path="/recievedOrders" component={RecievedOrdersRecord} />

            <Route path="/mybookings" component={DisplayBookingsDetail} />
            <Route
              path="/myconfirmBookings"
              component={DisplayUsersConfirmBookings}
            />
            <Route
              path="/user-reject-bookings"
              component={DisplayUserRejectBookings}
            />
            <Route
              path="/favouriteProductList"
              component={FavouriteProductList}
            />
            <Route path="/shop/:id" component={ShopDetail} />

            {/* Merchant Register */}
            <Route path="/merchant-login" component={merchantLogin} />
            <Route path="/merchant-register" component={merchantRegister} />
            <Route path="/merchant-profile" component={merchantProfile} />

            <Route path="/admin-panel" component={adminPanel} />
            <Route path="/product-panel" component={productPanel} />
            <Route
              path="/merchant-product-panel"
              component={merchantProductPanel}
            />

            {/* Merchant-Activitie's */}
            <Route
              path="/merchant-product-list"
              component={merchantProductList}
            />
            <Route path="/create-merchant-product" component={Create} />
            <Route path="/edit-merchant-product/:id" component={Edit} />
            <Route
              path="/change-merchant-product/:id"
              component={EditMerchantProductByAdmin}
            />
            <Route path="/index-merchant-product" component={Index} />
            <Route path="/merchant-product-detail/:id" component={Detail} />
            <Route
              path="/merchant-product-bookingDetail/:id"
              component={BookingDetail}
            />

            <Route path="/merchant-products" component={ProductTable} />
            <Route path="/merchant-shop" component={ShopDisplay} />

            <Route path="/bookingRequests" component={DisplayMerchantBooking} />
            <Route
              path="/confirmBookings"
              component={DisplayMerchantConfirmBooking}
            />
            <Route path="/orders" component={CustomersOrders} />
            <Route path="/sentorders" component={SentOrders} />

            {/* Admin-Activitie's */}
            <Route path="/admin-Profile" component={AdminProfile} />
            <Route path="/admin-signin" component={AdminSignIn} />
            <Route path="/admin-signup" component={AdminRegister} />
            <Route
              path="/create-admin-product"
              component={CreateAdminProduct}
            />
            <Route path="/admin-orders" component={AdminOrders} />
            <Route path="/admin-deliverdOrders" component={DeliverdOrders} />
            <Route
              path="/edit-admin-product/:id"
              component={EditAdminProduct}
            />
            <Route path="/myAdminProducts" component={LoginAdminProduct} />
            <Route path="/index-admin-product" component={IndexAdminProduct} />
            <Route
              path="/admin-product-detail/:id"
              component={DetailAdminProduct}
            />
            <Route path="/user-list" component={DisplayUsers} />
            <Route path="/merchant-list" component={DisplayMerchants} />
            <Route path="/edit-users-detail/:id" component={EditUser} />
            <Route
              path="/edit-user-discount/:id"
              component={EditUserDiscount}
            />
            <Route path="/edit-merchants-detail/:id" component={EditMerchant} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/our-team" component={ourTeam} />
            <Route path="/product-category" component={mainCategory} />
            <Route path="/create-deal" component={createDeal} />

            {/* CATEGORIZE BY CATEGORY */}
            <Route path="/category" component={newCat} />
            <Route path="/category-electronic" component={Electronic} />
            <Route path="/category-men" component={Men} />
            <Route path="/category-women" component={Women} />
            <Route
              path="/category-electronic-accesories"
              component={ElectronicAccesories}
            />
            <Route
              path="/category-tv-home-appliances"
              component={TvHomeAppliances}
            />
            <Route
              path="/category-watches-bags-jewlery"
              component={WatchesBagsJewlery}
            />
            <Route path="/category-health-beauty" component={HealthBeauty} />

            <Route path="/category-babies-toys" component={BabiesToys} />
            <Route path="/category-home-life-style" component={HomeLifeStyle} />
            <Route path="/category-sports-outdoor" component={SportsOutdoor} />
            <Route
              path="/category-auto-motive-motor-bike"
              component={AutoMotiveMotorBike}
            />
            <Route path="/category-groceries-pet" component={GroceriesPet} />

            {/* Sort by Title */}

            {/* Sort by Price */}

            {/* CATEGORIZE BY PRICE ASCENDING*/}
            <Route path="/price-less-2500" component={lessthan2500} />
            <Route path="/price-greater-2500" component={greaterthan2500} />
            <Route path="/price-less-5000" component={lessthan5000} />
            <Route path="/price-greater-5000" component={greaterthan5000} />
            <Route
              path="/price-between-5000to10000"
              component={between5000to10000}
            />
            <Route
              path="/price-between-10000to15000"
              component={between10000to15000}
            />
            <Route
              path="/price-between-15000to20000"
              component={between15000to20000}
            />
            <Route
              path="/price-between-20000to25000"
              component={between20000to25000}
            />
            <Route
              path="/price-between-25000to30000"
              component={between25000to30000}
            />
            <Route
              path="/price-between-30000to35000"
              component={between30000to35000}
            />
            <Route
              path="/price-between-35000to40000"
              component={between35000to40000}
            />
            <Route
              path="/price-between-40000to45000"
              component={between40000to45000}
            />
            <Route
              path="/price-between-45000to50000"
              component={between45000to50000}
            />
            <Route path="/price-greater-50000" component={greaterthan50000} />
            <Route path="/price-less-50000" component={lessthan50000} />

            {/* CATEGORIZE BY PRICE DESCINDING*/}
            <Route path="/dec-price-less-2500" component={declessthan2500} />
            <Route
              path="/dec-price-greater-2500"
              component={decgreaterthan2500}
            />
            <Route path="/dec-price-less-5000" component={declessthan5000} />
            <Route
              path="/dec-price-greater-5000"
              component={decgreaterthan5000}
            />
            <Route
              path="/dec-price-between-5000to10000"
              component={decbetween5000to10000}
            />
            <Route
              path="/dec-price-between-10000to15000"
              component={decbetween10000to15000}
            />
            <Route
              path="/dec-price-between-15000to20000"
              component={decbetween15000to20000}
            />
            <Route
              path="/dec-price-between-20000to25000"
              component={decbetween20000to25000}
            />
            <Route
              path="/dec-price-between-25000to30000"
              component={decbetween25000to30000}
            />
            <Route
              path="/dec-price-between-30000to35000"
              component={decbetween30000to35000}
            />
            <Route
              path="/dec-price-between-35000to40000"
              component={decbetween35000to40000}
            />
            <Route
              path="/dec-price-between-40000to45000"
              component={decbetween40000to45000}
            />
            <Route
              path="/dec-price-between-45000to50000"
              component={decbetween45000to50000}
            />
            <Route
              path="/dec-price-greater-50000"
              component={decgreaterthan50000}
            />
            <Route path="/dec-price-less-50000" component={declessthan50000} />

            {/* Sort */}
            <Route path="/sort-by-title" component={SortByTitle} />
            <Route path="/sort-by-price" component={SortByPrice} />

            {/* Sort */}
            <Route path="/dec-sort-by-title" component={DSortByTitle} />
            <Route path="/dec-sort-by-price" component={DSortByPrice} />

            <Route path="/subscribe" component={Subscribe} />
            <Route path="/faq" component={FAQ} />
            <Route path="/contact-us" component={contactUs} />
            <Route path="/b" component={becomeMember} />
            <Route path="/our-services" component={ourServices} />

            {/* Team Detail */}

            {/* Related Products       */}
            <Route path="/admin-related-products" component={RelatedProduct} />
            <Route
              path="/related-product-detail/:id"
              component={RelatedProductDetail}
            />
            <Route path="/forget-password" component={forgetPassword} />
            <Route path="/change-password/:slug" component={resetPassword} />
            <Route
              path="/merchant-forget-password"
              component={MerchantForgetPassword}
            />
            <Route
              path="/merchant-change-password/:slug"
              component={MerchantResetPassword}
            />
            <Route path="/mpn" component={AdminTopProduct} />
            {/* <Route path="/category-revenue" component={CategoryRevenue}/>
          
           
            <Route path="/admin-dashboard/sales/monthly" component={MonthlyReport}/> */}
            <Route
              path="/admin-dashboard/users/admin"
              component={DisplayAdmin}
            />
            <Route
              path="/admin-dashboard/users/customers"
              component={DisplayUser}
            />
            <Route
              path="/admin-dashboard/users/merchants"
              component={DispalyMerchant}
            />
            <Route
              path="/admin-dashboard/products/admin"
              component={DisplayAdminProduct}
            />
            <Route
              path="/admin-dashboard/products/merchants"
              component={DisplayMerchantProduct}
            />
            <Route
              path="/admin-dashboard/statistics/users"
              component={UserChart}
            />
            <Route
              path="/admin-dashboard/statistics/products"
              component={ProductChart}
            />
            <Route
              path="/admin-dashboard/statistics/month"
              component={SaleBarChart}
            />
            <Route path="/admin-dashboard/calender" component={Calender} />
            <Route path="/admin-dashboard/user-status" component={UserStatus} />

            <Route
              path="/admin-dashboard/invest/category"
              component={InvestByCategory}
            />
            <Route path="/admin-dashboard/sale/title" component={SaleByTitle} />
            <Route
              path="/admin-dashboard/sale/category"
              component={SaleByCategory}
            />
            <Route
              path="/admin-dashboard/report/monthly"
              component={SaleMonthlyReport}
            />
            <Route
              path="/admin-dashboard/report/yearly"
              component={SaleYearlyReport}
            />
            {/* <Route
              path="/s"
              component={MonthlyStat}
            /> */}

            <Route path="/admin-dashboard" component={AdminMainPage} />

            <Route path="/merchant-sale-title" component={MerchantSaleTitle} />
            <Route
              path="/merchant-sale-category"
              component={MerchantSaleCategory}
            />

            <Route component={Default} />
          </Switch>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

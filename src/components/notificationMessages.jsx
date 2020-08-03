
import {message} from 'antd';

export const ProductAddtoCartSuccessfully = () => {
    message.config({
      top:"60"
      
    })
     message.success('Product Added to cart Succesfully');
   };
export const ProductAlreadyIntheCart = () => {
    message.config({
      top:"60"

    })
     message.warning('Product is already in the cart ');
   }; 
   export const ProductAddToFavourites = () => {
    message.config({
      top:"60"
      
    })
     message.success('Product Added to To your Favourite List Succesfully');
   };
export const ProductAlreadyIntheFavourites = () => {
    message.config({
      top:"60"
      
    })
     message.warning('Product is already in your favourite List ');
   };  
   export const successfullyLogin = () => {
    message.config({
      top:"60"
      
    })
     message.success('Welcome to ShopInn !');
   };
 export const successfullyUpdateProfile = () => {
    message.config({
      top:"60"
      
    })
     message.success('Your Profile has been Succesfully update!');
   };
 export const ResetPasswordMail = () => {
    message.config({
      top:"60"
      
    })
     message.success('Password Reset link sent to yout email .Please check the your email.Link Will be Valid For 30 min');
   }; 
   export const successfullyLoginMerchant = () => {
    message.config({
      top:"60"
      
    })
     message.success('Welcome to your shop in ShopInn  !');
   };   
   export const invalidEmailPasswordError = () => {
    message.config({
      top:"60"
      
    })
     message.warning('Invalid Email or Password !');
   };
   export const fillAllFields = () => {
  
    message.config({
      top:"60"
      
    })
     message.error('Fill All Fields !');
  };
  //Registration
export const  successfullyRegistered = () => {
    message.config({
      top:"60"
      
    })
     message.success('Thanks for Registration !');
  };
  export const AlreadyHaveAccount = () => {
    message.config({
      top:"60"
      
    })
     message.error('Already have Account  with this Email!');
  };
  //order Placement
  export const orderPlacementMessage = () => {
    message.config({
      top:"60"
      
    })
     message.success('Your order Has been successfully placed see orders details in order tab');
  };
//Cart Update/ edit
export const cartUpdated = () => {
    message.config({
      top:"60"
      
    })
     message.success('Your cart has been Successfully updated with the changes');
  };
   //order Placement
export const SuccessfullyCreateProduct = () => {
    message.config({
      top:"60"
      
    })
     message.success('Your Product has been successfully Created');
  };
  export const successfullyUploaded = () => {
    message.config({
      top:"60"
      
    })
     message.success('Your Product has been Succesfully Updated !');
  };

  export const  UpdateError = () => {
    message.config({
      top:"60"
      
    })
     message.error('Sorry Unable to Update ');
  };


export const CreateProductError = () => {
    message.config({
      top:"60"
      
    })
     message.warning('Unable to create product');
  };
 export const ConfirmBooking = () => {
    message.config({
      top:"60"
      
    })
     message.success('Your Products has been Successfully Booked');
  };
export const BookingError = () => {
    message.config({
      top:"60"
      
    })
     message.warning('Unable to Book Your Product ');
  };

  export const AcceptBookingRequest = () => {
    message.config({
      top:"60"
      
    })
     message.success('You have succesfully accepted the user booking Request');
  };

  export const SelectBookingDate = () => {
    message.config({
      top:"60"
      
    })
     message.warning("Please Select Booking Date");
  };
  

  export const LinkNotValid = () => {
    message.config({
      top:"60"
      
    })
     message.alert(" Link Not Valid link will be valid for 15 min.Please sent the reset link Again");
  };
  
  
  export const FillRequiredFilleds = () => {
    message.config({
      top:"60"
      
    })
     message.warning("You are required to enter the required important fields");
  };
  


  export const OutOfStock = () => {
    message.config({
      top:"60"
      
    })
     message.warning("Your Order quantity is not up to the stock");
  };



  export const UpgradeBookingStock = () => {
    message.config({
      top:"60"
      
    })
     message.warning("Please Upgrade your stock in order to accept boking request");
  };
  

  export const  changeDateForBooking = () => {
    message.config({
      top:"60"
      
    })
     message.warning("Please Select another Date for booking" );
  };
  
  export const RejectBookingRequest= () => {
    message.config({
      top:"60"
      
    })
     message.warning("Booking request has been rejected successfully" );
  };
  
  
  
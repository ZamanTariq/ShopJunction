import axios from 'axios'


export const register = newMerchant =>{
    return axios.post('http://localhost:5000/newmerchant/signup' ,{
        merchantName: newMerchant.merchantName,
        password: newMerchant.password,
        phoneNumber: newMerchant.phoneNumber,
        email: newMerchant.email,
        shopName: newMerchant.shopName,
        shopDetail: newMerchant.shopDetail,
        cnic: newMerchant.cnic,
        shopAddress: newMerchant.shopAddress


    })
    .then(res=>{
        console.log('Registered')
    })
    .catch(res=>{
        console.log("Merchant Already Exist")
    })
}

export const login= user=>{
    return axios.post('http://localhost:5000/newmerchant/signin',{
    email:user.email,
    password:user.password
    })
    .then(res =>{
        localStorage.setItem('merchanttoken',res.data)
        return res.data
    })
    .catch(err=>{
        console.log(err)
    })
}

export const getProfile=user=>{
    return axios
    .get('http://localhost:5000/merchant/profile',{

    })
    .then(res =>{
        console.log(res)
        return res.data
    })
    .catch(err=>{
        console.log(err)
    })



}



export const getMerchantShopProfile=(id)=>{
    return axios
      .get("http://localhost:5000/newmerchant/profile/"+id)
      .then()
      .catch(err => {
        console.log("Error" + err);
      });
}
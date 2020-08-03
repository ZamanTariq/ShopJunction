import axios from 'axios'
import jwt_decode from "jwt-decode";

export const login= user=>{
    return axios.post('http://localhost:5000/newUser/signin',{
    email:user.email,
    password:user.password,
 
    })
    .then(res =>{
       
        localStorage.setItem('usertoken',res.data)
        
        return res.data
    
    })
    .catch(err=>{
        console.log(err)
        
    })
}



export const getProfile=user=>{
    return axios
    .get('http://localhost:5000/newUser/profile',{

    })
    .then(res =>{
        console.log(res)
        return res.data
    })
    .catch(err=>{
        console.log(err)
    })

}



export const getUserId=()=>{  
    const token=localStorage.usertoken
    const decoded=jwt_decode(token)
   return decoded._id
  }

  export const getUserAddress=()=>{
  const token=localStorage.usertoken
    const decoded=jwt_decode(token)
   return decoded.address
}
export const getUserEmail=()=>{
  const token=localStorage.usertoken
    const decoded=jwt_decode(token)
    
   return decoded.email
}
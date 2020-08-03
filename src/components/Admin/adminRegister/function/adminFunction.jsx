import axios from "axios";

export const register = (newAdmin) => {
  return axios
    .post("http://localhost:5000/newAdmin/signup", {
      adminName: newAdmin.merchantName,
      password: newAdmin.password,
      phoneNumber: newAdmin.phoneNumber,
      email: newAdmin.email,
      shopName: newAdmin.shopName,
      shopDetail: newAdmin.shopDetail,
      cnic: newAdmin.cnic,
      shopAddress: newAdmin.shopAddress,
    })
    .then((res) => {
      console.log("Registered");
    })
    .catch((res) => {
      console.log("Admin Already Exist");
    });
};

export const login = (newAdmin) => {
  return axios
    .post("http://localhost:5000/newAdmin/signin", {
      email: newAdmin.email,
      password: newAdmin.password,
    })
    .then((res) => {
      localStorage.setItem("admintoken", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProfile = (newAdmin) => {
  return axios
    .get("http://localhost:5000/newAdmin/profile", {})
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

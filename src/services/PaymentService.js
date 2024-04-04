import axios  from "axios";
import {getToken  } from '../services/AuthService';

//using interceptor,to intercept all API Request 

axios.interceptors.request.use(function (config) {
  
    config.headers["Authorization"]=getToken();
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });

const REST_API_BASE_URL3='http://localhost:8083/api/payments';


export const ListPayments=()=>axios.get(REST_API_BASE_URL3);

export const createPayment=(payment)=>axios.post(REST_API_BASE_URL3,payment);
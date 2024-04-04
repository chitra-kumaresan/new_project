import axios from "axios";
import {getToken  } from '../services/AuthService';

//using interceptor, to intercept all API Request
 
axios.interceptors.request.use(function (config) {

    config.headers["Authorization"]=getToken();
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });


const REST_API_BASE_URL2='http://localhost:8083/api/buses';

export const listBuses=()=>axios.get(REST_API_BASE_URL2);


export const createBus=(buses)=>axios.post(REST_API_BASE_URL2+ "/saveBus",buses);

export const getBus=(id)=>axios.get(REST_API_BASE_URL2+ "/"+ id);

export const deleteBus=(id)=>axios.delete(REST_API_BASE_URL2+ "/"+ id);

export const updateBus=(id,bus)=>axios.put(REST_API_BASE_URL2+ "/"+ id, bus);

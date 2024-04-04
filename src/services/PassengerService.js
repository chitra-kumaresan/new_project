import axios from "axios";
import {getToken  } from '../services/AuthService';

//using interceptor,to intercept all API Request
axios.interceptors.request.use(function (config) {
    config.headers["Authorization"]=getToken();
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });

const REST_API_BASE_URL='http://localhost:8083/api/passengers';

export const listPassengers=()=> axios.get(REST_API_BASE_URL);

export const createPassenger=(passenger)=>axios.post(REST_API_BASE_URL+ "/savePassenger",passenger);

export const getPassenger=(id)=> axios.get(REST_API_BASE_URL+ "/"+ id);

export const updatePassenger=(id,pass)=>axios.put(REST_API_BASE_URL+ "/"+ id, pass);

export const getPassengerByEmail=(email)=> axios.get(REST_API_BASE_URL+ "/email"+ "/" + email);
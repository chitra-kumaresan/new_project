import axios from "axios";

import {getToken } from '../services/AuthService';


//using interceptors to intercept all api request
axios.interceptors.request.use(function (config) {
    config.headers["Authorization"]=getToken();
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });


const REST_API_BASE_URL1='http://localhost:8083/api/bookings';

export const listBookings=()=>axios.get(REST_API_BASE_URL1);

export const booking=()=>axios.get(REST_API_BASE_URL1);

export const createBooking=(booking)=>axios.post(REST_API_BASE_URL1+ "/saveBooking",booking);

 
export const getBookingById=(id)=> axios.get(REST_API_BASE_URL1+ "/id"+ "/" + id);

export const getBookingByEmail=(email)=> axios.get(REST_API_BASE_URL1+ "/email"+ "/" + email);
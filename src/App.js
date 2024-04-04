import logo from './logo.svg';
import './App.css';
import ListPassengerComponent from './components/ListPassengerComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBookingComponent from './components/ListBookingComponent';
import ListBusComponent from './components/ListBusComponent';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import PassengerComponent from './components/PassengerComponent';
import PaymentComponent from './components/PaymentComponent';
import BusComponent from './components/BusComponent';
import FrontPageComponent from './components/FrontPageComponent';
import LoginComponent from './components/LoginComponent';
import BusDestinationComponent from './components/BusDestinationComponent';
import UserProfileComponent from './components/UserProfileComponent';
import ListUserComponent from './components/ListUserComponent';
import UserUpdateComponent from './components/UserUpdateComponent';
import PassengerUpdateComponent from './components/PassengerUpdateComponent';
import LabelComponent from './components/LabelComponent';
import TicketComponent from './components/TicketComponent';
import MyBookingComponent from './components/MyBookingComponent';
import BusUpdataComponent from './components/BusUpdataComponent';
import Register from './components/Register';
import AdminFrontPageComponent from './components/AdminFrontPageComponent';



function App() {
return (
<>
<BrowserRouter>
<HeaderComponent />
  
<Routes>
<Route path='/admin' element={<AdminFrontPageComponent />}></Route>
<Route path='/passengers/:id' element={<ListPassengerComponent /> }></Route>
<Route path='/bus' element={<BusDestinationComponent />}></Route>
<Route path='/booking' element={<ListBookingComponent />}></Route>
<Route path='/Add Passenger/:id' element={<PassengerComponent />}></Route>
<Route path='/success' element={<PaymentComponent />}></Route>
<Route path='/label' element={<LabelComponent/>}></Route>
<Route path='/front' element={<FrontPageComponent />}></Route> 
<Route path='/login' element={<LoginComponent />}></Route>
<Route path='/list' element={<ListBusComponent />}></Route>
<Route path='/user123/:email' element={<UserProfileComponent />}></Route>
<Route path='/hello' element={<ListUserComponent/>}></Route>
<Route path='/change-password/:username' element={<UserUpdateComponent/>}></Route>
<Route path='/suc' element={<BusComponent/>}></Route>
<Route path='/passupdate/:id' element={<PassengerUpdateComponent/>}></Route>
<Route path='/tic' element={<TicketComponent/>}></Route>
<Route path='/my' element={<MyBookingComponent/>}></Route>
<Route path='/update-bus/:id' element={<BusUpdataComponent/>}></Route>
<Route path='/reg' element={<Register/>}></Route>

</Routes>
</BrowserRouter> 
</>);
}

export default App;

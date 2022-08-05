import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Reservation from './pages/Reservation/Reservation';
import Purchase from './pages/Purchase/Purchase';
import Mypage from './pages/Mypage/Mypage';
import Signup from './pages/Login/Signup';
import Kakao from './pages/Login/Kakao';
import PassengerData from './pages/Purchase/PassengerData';
import CheckReservation from './pages/CheckReservation/CheckReservation';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/logining" element={<Kakao />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/passengerdata" element={<PassengerData />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/checkreservation" element={<CheckReservation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

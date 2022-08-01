import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Reservation from './pages/Reservation/Reservation';
import Purchase from './pages/Purchase/Purchase';
import PassengerData from './pages/Purchase/PassengerData';
import CheckReservation from './pages/CheckReservation/CheckReservation';
import Loading from './pages/Loading/Loading';

const NavbarLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route element={<NavbarLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/passengerdata" element={<PassengerData />} />
          <Route path="/checkreservation" element={<CheckReservation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

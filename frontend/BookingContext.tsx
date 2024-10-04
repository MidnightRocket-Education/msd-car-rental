import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const bookCar = (car) => {
    setBookings([...bookings, car]);
  };

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
    setBookings([]);
  };

  return (
    <BookingContext.Provider value={{ bookings, bookCar, loggedIn, login, logout }}>
      {children}
    </BookingContext.Provider>
  );
};
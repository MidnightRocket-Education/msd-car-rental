import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const storedBookings = await AsyncStorage.getItem('bookings');
        if (storedBookings) {
          console.log('Loaded bookings from AsyncStorage:', storedBookings);
          const parsedBookings = JSON.parse(storedBookings);
          setBookings(Array.isArray(parsedBookings) ? parsedBookings : []);
        } else {
          console.log('No bookings found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error loading bookings from AsyncStorage:', error);
      }
    };

    loadBookings();
  }, []);

  const bookCar = (car) => {
    const updatedBookings = [...bookings, car];
    setBookings(updatedBookings);

    AsyncStorage.setItem('bookings', JSON.stringify(updatedBookings))
      .then(() => {
        console.log('Bookings saved to AsyncStorage:', updatedBookings);
      })
      .catch(error => console.error('Error saving bookings to AsyncStorage:', error));
  };

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  const setRating = (bookingId, newRating) => {
    const updatedBookings = bookings.map(booking =>
      booking.id === bookingId ? { ...booking, rating: newRating } : booking
    );
    setBookings(updatedBookings);

    AsyncStorage.setItem('bookings', JSON.stringify(updatedBookings))
      .then(() => {
        console.log('Updated ratings saved to AsyncStorage');
      })
      .catch(error => console.error('Error saving ratings to AsyncStorage:', error));
  };

  return (
    <BookingContext.Provider value={{ bookings, bookCar, loggedIn, login, logout, setRating }}>
      {children}
    </BookingContext.Provider>
  );
};
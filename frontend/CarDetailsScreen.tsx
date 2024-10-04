import React, { useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { BookingContext } from './BookingContext';
import { dummyCars } from './data/dummyCars';

const CarDetailsScreen = ({ route, navigation }) => {
  const { carId } = route.params;
  const car = dummyCars.find((car) => car.id === carId);
  const { bookCar } = useContext(BookingContext);

  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showPickupPicker, setShowPickupPicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);

  const handleBooking = () => {
    const bookingDetails = {
      ...car,
      pickupDate,
      returnDate,
    };
    bookCar(bookingDetails);
    navigation.navigate('Profile');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <Text style={styles.carName}>{car.name}</Text>
      <Text style={styles.carDetails}>Location: {car.location}</Text>
      <Text style={styles.carDetails}>Price: ${car.price}/hr</Text>
      <Text style={styles.carDetails}>Seats: {car.seats}</Text>
      <Text style={styles.carDetails}>Fuel: {car.fuelType}</Text>

      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowPickupPicker(true)}
      >
        <Text style={styles.dateButtonText}>
          {pickupDate ? `Pickup: ${pickupDate.toDateString()}` : 'Select Pickup Date'}
        </Text>
      </TouchableOpacity>
      {showPickupPicker && (
        <DateTimePicker
          value={pickupDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPickupPicker(false);
            if (selectedDate) setPickupDate(selectedDate);
          }}
        />
      )}

      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowReturnPicker(true)}
      >
        <Text style={styles.dateButtonText}>
          {returnDate ? `Return: ${returnDate.toDateString()}` : 'Select Return Date'}
        </Text>
      </TouchableOpacity>
      {showReturnPicker && (
        <DateTimePicker
          value={returnDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowReturnPicker(false);
            if (selectedDate) setReturnDate(selectedDate);
          }}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  carName: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  carDetails: {
    color: '#ccc',
    marginBottom: 5,
  },
  dateButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  dateButtonText: {
    color: '#6EC1E4',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6EC1E4',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CarDetailsScreen;
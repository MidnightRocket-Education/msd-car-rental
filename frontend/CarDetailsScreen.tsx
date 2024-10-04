import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, ScrollView, Platform } from 'react-native';
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
    const booking = {
      id: new Date().toISOString(),
      name: car.name,
      location: car.location,
      price: car.price,
      startDate: pickupDate.toISOString(),
      endDate: returnDate.toISOString(),
    };

    bookCar(booking);
    navigation.navigate('Bookings');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <Text style={styles.carName}>{car.name}</Text>
      <Text style={styles.carDetails}>Location: {car.location}</Text>
      <Text style={styles.carDetails}>Price: ${car.price}/hr</Text>
      <Text style={styles.carDetails}>Seats: {car.seats}</Text>
      <Text style={styles.carDetails}>Fuel: {car.fuelType}</Text>

      {/* Date Pickers */}
      <Button title="Select Pickup Date" onPress={() => setShowPickupPicker(true)} />
      {showPickupPicker && (
        <DateTimePicker
          value={pickupDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPickupPicker(Platform.OS === 'ios');
            setPickupDate(selectedDate || pickupDate);
          }}
        />
      )}

      <Button title="Select Return Date" onPress={() => setShowReturnPicker(true)} />
      {showReturnPicker && (
        <DateTimePicker
          value={returnDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowReturnPicker(Platform.OS === 'ios');
            setReturnDate(selectedDate || returnDate);
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
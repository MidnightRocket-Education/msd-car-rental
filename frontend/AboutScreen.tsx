import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = ({ car }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.carName}>{car.name}</Text>
      <Text style={styles.carDetails}>Location: {car.location}</Text>
      <Text style={styles.carDetails}>Price: ${car.price}/hr</Text>
      <Text style={styles.carDetails}>Seats: {car.seats}</Text>
      <Text style={styles.carDetails}>Fuel: {car.fuelType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000',
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
});

export default AboutScreen;
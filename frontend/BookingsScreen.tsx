import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { BookingContext } from './BookingContext';
import { format } from 'date-fns';

const BookingsScreen = () => {
  const { bookings } = useContext(BookingContext);

  const currentBookings = bookings.filter(
    (booking) => new Date(booking.endDate) >= new Date()
  );
  const oldBookings = bookings.filter(
    (booking) => new Date(booking.endDate) < new Date()
  );

  const renderBookingItem = ({ item }) => {
    const formattedStartDate = format(new Date(item.startDate), 'dd MMM yyyy, hh:mm a');
    const formattedEndDate = format(new Date(item.endDate), 'dd MMM yyyy, hh:mm a');

    return (
      <View style={styles.bookingItem}>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.date}>From: {formattedStartDate}</Text>
        <Text style={styles.date}>To: {formattedEndDate}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Bookings</Text>

      <Text style={styles.sectionHeader}>Current:</Text>
      <FlatList
        data={currentBookings}
        keyExtractor={(item) => item.id}
        renderItem={renderBookingItem}
      />

      <Text style={styles.sectionHeader}>Old:</Text>
      <FlatList
        data={oldBookings}
        keyExtractor={(item) => item.id}
        renderItem={renderBookingItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    color: '#6EC1E4',
    marginVertical: 10,
  },
  bookingItem: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  location: {
    color: '#fff',
    fontSize: 16,
  },
  date: {
    color: '#ccc',
    fontSize: 14,
  },
});

export default BookingsScreen;
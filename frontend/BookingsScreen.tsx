import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { BookingContext } from './BookingContext';
import { format } from 'date-fns';
import { Ionicons } from '@expo/vector-icons';

const BookingsScreen = ({ navigation }) => {
  const { bookings, loggedIn } = useContext(BookingContext);

  const dummyOldBookings = [
    {
      id: '1',
      name: 'Toyota Corolla',
      location: 'New York',
      startDate: '2023-09-25T10:00:00',
      endDate: '2023-09-27T14:00:00',
      rating: 3,
    },
    {
      id: '2',
      name: 'Honda Civic',
      location: 'Los Angeles',
      startDate: '2023-08-15T09:00:00',
      endDate: '2023-08-16T16:00:00',
      rating: 4, 
    },
  ];

  const currentBookings = bookings.filter(booking => new Date(booking.endDate) >= new Date());
  const [oldBookings, setOldBookings] = useState(dummyOldBookings);

  const setRating = (bookingId, newRating) => {
    const updatedBookings = oldBookings.map(booking =>
      booking.id === bookingId ? { ...booking, rating: newRating } : booking
    );
    setOldBookings(updatedBookings);
  };

  if (!loggedIn) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.subtext}>Log in to view your bookings.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile', { screen: 'Login' })}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Bookings</Text>

      <Text style={styles.sectionHeader}>Current:</Text>
      <FlatList
        data={currentBookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingItem}>
            <Text style={styles.location}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.date}>From: {format(new Date(item.startDate), 'dd MMM yyyy, hh:mm a')}</Text>
            <Text style={styles.date}>To: {format(new Date(item.endDate), 'dd MMM yyyy, hh:mm a')}</Text>
          </View>
        )}
      />

      <Text style={styles.sectionHeader}>Old:</Text>
      <FlatList
        data={oldBookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingItem}>
            <Text style={styles.location}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.date}>From: {format(new Date(item.startDate), 'dd MMM yyyy, hh:mm a')}</Text>
            <Text style={styles.date}>To: {format(new Date(item.endDate), 'dd MMM yyyy, hh:mm a')}</Text>

            <View style={styles.ratingContainer}>
              {Array.from({ length: 5 }).map((_, index) => (
                <TouchableOpacity key={index} onPress={() => setRating(item.id, index + 1)}>
                  <Ionicons
                    name={index < item.rating ? 'star' : 'star-outline'}
                    size={20}
                    color="#FFD700"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
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
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  button: {
    backgroundColor: '#6EC1E4',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonSecondary: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  subtext: {
    color: '#fff',
    marginBottom: 30,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
});

export default BookingsScreen;
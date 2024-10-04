import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { BookingContext } from './BookingContext';

const ProfileScreen = ({ navigation }) => {
  const { bookings, loggedIn, logout } = useContext(BookingContext); 

  return (
    <View style={styles.container}>
      {loggedIn ? (
        <View>
          <Text style={styles.header}>My Bookings</Text>
          {bookings.length === 0 ? (
            <Text style={styles.noBookings}>You have no bookings yet</Text>
          ) : (
            <FlatList
              data={bookings}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.bookingItem}>
                  <Text style={styles.carName}>{item.name}</Text>
                  <Text style={styles.carDetails}>Location: {item.location}</Text>
                  <Text style={styles.carDetails}>Price: ${item.price}/hr</Text>
                </View>
              )}
            />
          )}
          <TouchableOpacity style={styles.buttonSecondary} onPress={logout}>
            <Text style={styles.buttonText}>Log out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.centeredContainer}>
          <Text style={styles.subtext}>Log in to book cars and rent cars out</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  noBookings: {
    color: '#ccc',
    textAlign: 'center',
  },
  bookingItem: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  carName: {
    color: '#fff',
    fontSize: 18,
  },
  carDetails: {
    color: '#ccc',
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
});

export default ProfileScreen;

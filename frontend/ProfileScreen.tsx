import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BookingContext } from './BookingContext';

const ProfileScreen = ({ navigation }) => {
  const { loggedIn, logout } = useContext(BookingContext); 

  return (
    <View style={styles.container}>
      {loggedIn ? (
        <View>
          <View style={styles.profileHeader}>
            <Text style={styles.profileName}>Vivek Misra</Text>
            <Text style={styles.profileEmail}>vimis22@student.sdu.dk</Text>
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.detailLabel}>First Name:</Text>
            <Text style={styles.detailValue}>Vivek</Text>
            <Text style={styles.detailLabel}>Last Name:</Text>
            <Text style={styles.detailValue}>Misra</Text>
            <Text style={styles.detailLabel}>Phone Number:</Text>
            <Text style={styles.detailValue}>+45-xxxxxxxx</Text>
          </View>
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
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileName: {
    fontSize: 22,
    color: '#fff',
  },
  profileEmail: {
    fontSize: 16,
    color: '#ccc',
  },
  profileDetails: {
    marginTop: 10,
  },
  detailLabel: {
    color: '#6EC1E4',
    fontSize: 16,
    marginTop: 10,
  },
  detailValue: {
    color: '#fff',
    fontSize: 18,
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
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
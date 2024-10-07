import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BookingContext } from './BookingContext';
import { dummyCars } from './data/dummyCars';

const Tab = createMaterialTopTabNavigator();

const CarDetailsScreen = ({ route, navigation }) => {
  const { carId } = route.params;
  const car = dummyCars.find((car) => car.id === carId);
  const { bookCar, loggedIn } = useContext(BookingContext);

  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showPickupPicker, setShowPickupPicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);

  const handleBooking = () => {
    if (!loggedIn) {
      navigation.navigate('Profile', { screen: 'Login' });
      return;
    }

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

  const handleMessageOwner = () => {
    if (!loggedIn) {
      navigation.navigate('Profile', { screen: 'Login' }); 
    } else {
      navigation.navigate('ChatScreen', { userName: car.ownerName }); 
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <Tab.Navigator>
        <Tab.Screen name="About" >
          {() => <AboutTab car={car} onMessageOwner={handleMessageOwner} />}
        </Tab.Screen>
        <Tab.Screen name="Gallery">
          {() => <GalleryTab car={car} />}
        </Tab.Screen>
        <Tab.Screen name="Reviews">
          {() => <ReviewsTab car={car} />}
        </Tab.Screen>
      </Tab.Navigator>

      <View style={styles.datePickerContainer}>
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
      </View>

      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>{loggedIn ? 'Book Now' : 'Log in to book'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const AboutTab = ({ car, onMessageOwner }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.tabContainer}>
        <Text style={styles.carName}>{car.name}</Text>
        <Text style={styles.carDetails}>Location: {car.location}</Text>
        <Text style={styles.carDetails}>Price: ${car.price}/hr</Text>
        <Text style={styles.carDetails}>Seats: {car.seats}</Text>
        <Text style={styles.carDetails}>Fuel: {car.fuelType}</Text>

        <Text style={styles.ownerLabel}>Owner:</Text>
        <TouchableOpacity onPress={onMessageOwner}>
          <Text style={styles.ownerName}>{car.ownerName}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};


const GalleryTab = ({ car }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.tabContainer}>
        <Text style={styles.galleryLabel}>Gallery Images for {car.name}</Text>
        <View style={styles.galleryPlaceholder}>
          <Text style={styles.galleryPlaceholderText}>Image Gallery Placeholder</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const ReviewsTab = ({ car }) => {
  const dummyReviews = [
    { id: '1', reviewer: 'John Doe', comment: 'Great car!' },
    { id: '2', reviewer: 'Jane Smith', comment: 'Smooth ride, loved it!' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.tabContainer}>
        <Text style={styles.reviewLabel}>Reviews for {car.name}</Text>
        {dummyReviews.map((review) => (
          <View key={review.id} style={styles.reviewItem}>
            <Text style={styles.reviewer}>{review.reviewer}</Text>
            <Text style={styles.comment}>{review.comment}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: 200,
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
  ownerLabel: {
    fontSize: 16,
    color: '#6EC1E4',
    marginTop: 10,
  },
  ownerName: {
    fontSize: 18,
    color: '#6EC1E4',
  },
  tabContainer: {
    backgroundColor: '#000',
    padding: 20,
  },
  galleryLabel: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  galleryPlaceholder: {
    height: 200,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryPlaceholderText: {
    color: '#fff',
  },
  reviewLabel: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  reviewItem: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  reviewer: {
    color: '#6EC1E4',
    fontSize: 16,
    marginBottom: 5,
  },
  comment: {
    color: '#ccc',
  },
  datePickerContainer: {
    marginVertical: 0,
  },
  button: {
    backgroundColor: '#6EC1E4',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CarDetailsScreen;
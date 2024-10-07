import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { dummyCars } from './data/dummyCars';
import { mockFetchCars } from './mockApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [fuelType, setFuelType] = useState('All');
  const [seats, setSeats] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const persistedData = await AsyncStorage.getItem('cars');
        if (persistedData) {
          setFilteredCars(JSON.parse(persistedData));
        } else {
          const data = await mockFetchCars();
          setFilteredCars(data);
          await AsyncStorage.setItem('cars', JSON.stringify(data));
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchData();
  }, []);

  const applyFilters = (searchTerm, fuel, seatCount, priceRange) => {
    let filteredData = dummyCars;

    if (searchTerm) {
      filteredData = filteredData.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (fuel !== 'All') {
      filteredData = filteredData.filter((car) => car.fuelType === fuel);
    }

    if (seatCount > 0) {
      filteredData = filteredData.filter((car) => car.seats >= seatCount);
    }

    filteredData = filteredData.filter((car) => car.price >= priceRange[0] && car.price <= priceRange[1]);

    setFilteredCars(filteredData);
  };

  const filtersApplied = () => {
    return search || fuelType !== 'All' || seats > 0 || priceRange[0] > 0 || priceRange[1] < 100;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search for Cars</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Enter car name or location"
        value={search}
        onChangeText={setSearch}
      />

      {filtersApplied() && <Text style={styles.filterStatus}>Filters Applied</Text>}

      <TouchableOpacity style={styles.filterToggle} onPress={() => setShowFilters(!showFilters)}>
        <Text style={styles.filterToggleText}>{showFilters ? 'Hide Filters' : 'Show Filters'}</Text>
      </TouchableOpacity>

      {showFilters && (
        <>
        <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>Fuel Type:</Text>
            <View style={styles.pickerContainer}>
                <Picker
                selectedValue={fuelType}
                style={styles.picker}
                onValueChange={(itemValue) => {
                    setFuelType(itemValue);
                    applyFilters(search, itemValue, seats, priceRange);
                }}
                >
                <Picker.Item label="All" value="All" />
                <Picker.Item label="Gasoline" value="Gasoline" />
                <Picker.Item label="Electric" value="Electric" />
                </Picker>
            </View>
        </View>

        <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>Seats:</Text>
            <View style={styles.pickerContainer}>
                <Picker
                selectedValue={seats}
                style={styles.picker}
                onValueChange={(itemValue) => {
                    setSeats(itemValue);
                    applyFilters(search, fuelType, itemValue, priceRange);
                }}
                >
                <Picker.Item label="Any" value={0} />
                <Picker.Item label="2" value={2} />
                <Picker.Item label="4" value={4} />
                <Picker.Item label="5" value={5} />
                </Picker>
            </View>
        </View>



        <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>Price Range: ${priceRange[0]} - ${priceRange[1].toFixed(0)}</Text>
            <Slider
                style={{ width: 150, height: 40 }}
                minimumValue={0}
                maximumValue={150}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                value={priceRange[1]} 
                onValueChange={(value) => {
                setPriceRange([priceRange[0], value]);
                applyFilters(search, fuelType, seats, [priceRange[0], value]);
                }}
            />
        </View>
        </>
      )}

      <FlatList
        data={filteredCars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.carItem}>
            <Image source={{ uri: item.image }} style={styles.carImage} />
            <View style={styles.carInfo}>
              <Text style={styles.carName}>{item.name}</Text>
              <Text style={styles.carDetails}>{item.location}</Text>
              <Text style={styles.carDetails}>${item.price}/hr</Text>
              <Text style={styles.carDetails}>Seats: {item.seats}</Text>
              <Text style={styles.carDetails}>Fuel: {item.fuelType}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CarDetails', { carId: item.id })}
              >
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
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
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  filterToggle: {
    backgroundColor: '#6EC1E4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  filterToggleText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  filterStatus: {
    color: '#6EC1E4',
    marginBottom: 10,
    fontSize: 16,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  filterLabel: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  picker: {
    height: 50,
    color: '#fff', 
    backgroundColor: '#333', 
  },
  pickerContainer: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
  },
  pickerItem: {
    color: '#fff', 
  },
  carItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  carImage: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  carInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  carName: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  carDetails: {
    color: '#ccc',
  },
  button: {
    backgroundColor: '#6EC1E4',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;
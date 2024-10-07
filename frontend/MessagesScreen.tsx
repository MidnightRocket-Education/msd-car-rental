import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { BookingContext } from './BookingContext';

const messages = [
  { id: '1', name: 'Denisa Noway', message: 'Hi, thanks for the car!' },
  { id: '2', name: 'John Doe', message: 'Thank you, it was a smooth ride!' },
];

const MessagesScreen = ({ navigation }) => {
  const { loggedIn } = useContext(BookingContext);

  if (!loggedIn) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.subtext}>Log in to view your messages.</Text>
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
      <Text style={styles.header}>Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', { userName: item.name })}>
            <View style={styles.messageItem}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>You: {item.message}</Text>
            </View>
          </TouchableOpacity>
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
  centeredContainer: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  messageItem: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  message: {
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

export default MessagesScreen;
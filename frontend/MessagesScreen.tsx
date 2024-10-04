import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const messages = [
  { id: '1', name: 'Denisa noway', message: 'Hi thanks for the car' },
  { id: '2', name: 'Denisa noway', message: 'Hi thanks for the car' },
];

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.message}>You: {item.message}</Text>
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
});

export default MessagesScreen;
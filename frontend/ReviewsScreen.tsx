import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const dummyReviews = [
  { id: '1', name: 'John Doe', review: 'Great car, smooth ride!', rating: 5 },
  { id: '2', name: 'Jane Smith', review: 'Good car, but a little expensive.', rating: 4 },
];

const ReviewsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyReviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.review}>{item.review}</Text>
            <Text style={styles.rating}>Rating: {item.rating}/5</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000',
  },
  reviewItem: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 16,
  },
  review: {
    color: '#ccc',
    marginTop: 5,
  },
  rating: {
    color: '#6EC1E4',
    fontSize: 14,
  },
});

export default ReviewsScreen;
import React from "react";
import { View, StyleSheet } from "react-native";

// Definer types for props
interface CardProps {
    children: React.ReactNode; // 'children' is expected to be any valid React node
  }
  
  const Card: React.FC<CardProps> = (props) => {
    return (
      <View style={styles.cardStyle}>
        {props.children}
      </View>
    );
  };

const styles = StyleSheet.create({
  cardStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0, // Rettet stavefejl
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, // Rettet fra komma til punktum
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#fff',
  },
});

export {Card};

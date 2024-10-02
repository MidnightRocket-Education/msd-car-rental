import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Definer types for props
interface ButtonProps {
    onPress: () => void;
    children: React.ReactNode;
  }

  const Button: React.FC<ButtonProps> = (props) => {
    return (
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonTekst}>{props.children}</Text>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    marginHorizontal: 25,
    backgroundColor: "rgb(42,55,86)",
    justifyContent: "center",
    flex:1
  },
  buttonTekst: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold", // Rettet stavefejl
    fontSize: 15,
  },
});

export { Button };

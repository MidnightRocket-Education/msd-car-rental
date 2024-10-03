import React from "react";
import { Text, TextInput, View, StyleSheet, TextInputProps } from 'react-native';

// Define the props interface for the Input component
interface InputProps extends TextInputProps {
    label: string;            
    value: string;           
    onChangeText: (text: string) => void; // Function to handle text changes
    placeholder?: string;    // Optional placeholder text
    
}

// Define the Input component
const Input: React.FC<InputProps> = ({ label, value, onChangeText, placeholder, ...rest }) => {
    return (
        <View style={styles.inputContainer}>
            <Text>{label}</Text>
            <TextInput
                style={styles.textInput}
        
                onChangeText={onChangeText}
                placeholder={''}
                {...rest} // Spread any other props
            />
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column', // Change to 'column' for label above input
        alignItems: 'flex-start', // Align items to the start
        height: 40, // Fixed height for the input container
        marginVertical: 10, // Optional margin for spacing
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        flex:2,
        paddingHorizontal: 10, // Padding for the input text
    },
});

export { Input };

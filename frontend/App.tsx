import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import LoginForm from './login'; // Importer LoginForm komponenten

const App = () => {
    // Funktion til at håndtere login
    const handleLogin = () => {
        Alert.alert('Log ind knap blev trykket!');
    };

    return (
        <View style={styles.container}>
            <LoginForm title="Welcome!" onLogin={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Dynamisk højde
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;

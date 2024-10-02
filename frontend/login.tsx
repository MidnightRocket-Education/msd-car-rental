import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

interface Props {
    title: string;
    onLogin: () => void;
}

class LoginForm extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headers}>Login page</Text>
                <Text>{this.props.title}</Text>

                {/* Login-knap */}
                <TouchableOpacity style={styles.button} onPress={this.props.onLogin}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        flex: 1, // Fleksibel højde
        justifyContent: 'center',
        alignItems: 'center',
    },
    headers: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    }
});

export default LoginForm;

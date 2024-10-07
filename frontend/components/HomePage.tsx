import { StatusBar} from "expo-status-bar";
import {ScrollView, Button, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

export default function homePage(){
    return (
        <View style={styles.container}>
            <View style={styles.navbarColor}>
                <TextInput style={styles.locationBar} placeholder="Location"></TextInput>
                <View style={styles.twosearchBar}>
                    <TextInput style={styles.searchBar} placeholder="Pickup"></TextInput>
                    <TextInput style={styles.searchBar} placeholder="Pickup"></TextInput>
                </View>
            </View>
            <Text style={styles.brandsTitle}>Brands</Text>
            <View>
                <ScrollView horizontal style={styles.brandsContainer}>
                    {['Brand','Brand','Brand','Brand','Brand','Brand'].map(function (brand, index) {
                        return (
                            <View key={index} style={styles.brandCircles}>
                                <Text>Brand</Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
            <View>
                <ScrollView horizontal style={styles.brandsContainer}>
                    {['Brand','Brand','Brand','Brand','Brand','Brand'].map(function (brand, index) {
                        return (
                            <View key={index} style={styles.brandnameBoxes}>
                                <Text>Brand</Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
            <Text style={styles.brandsTitle}>Popular Cars</Text>
            <View style={styles.largeimageFrames}>
                <View>
                    <View style={styles.carimageBig}>X</View>
                    <View style={styles.twosearchBar}>
                        <Text style={styles.carrentalInfo}>Car Name</Text>
                        <Text style={styles.carrentalInfo}>1000 KR,- / hrs</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.carimageBig}>X</View>
                    <View>
                        <Text style={styles.carrentalInfo}>Car Name</Text>
                        <Text style={styles.carrentalInfo}>1000 KR,- / hrs</Text>
                    </View>
                </View>
            </View>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white'
    },
    navbarColor: {
        backgroundColor: '#0096ff',
    },
    locationBar: {
        padding: 8,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 16,
        marginTop: 16,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: 'white',
    },
    twosearchBar: {
        flexDirection: 'row',
    },
    searchBar: {
        padding: 8,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 16,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: 'white',
    },
    brandsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    brandsContainer: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    brandCircles: {
        padding: 8,
        backgroundColor: 'grey',
        borderRadius: 16,
        height: 50,
        marginRight: 8,
        marginLeft: 4,
    },
    brandnameBoxes: {
        padding: 8,
        backgroundColor: 'white',
        marginRight: 8,
        marginLeft: 4,
    },
    largeimageFrames: {
        flexDirection: 'column',
    },
    carimageBig: {
        marginTop: 10,
        backgroundColor: 'grey',
        height: 100,
        borderRadius: 16,
    },
    carrentalInfo: {
        padding: 8,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 16,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: 'white',
    }
})
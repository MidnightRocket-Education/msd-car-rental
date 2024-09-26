import { StatusBar} from "expo-status-bar";
import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";

interface ChildViewProps{
    text: string;
}

export default function homePage(text:ChildViewProps){
    return (
        <View>
            <View style={styles.navbarbox}>
                <Text>{text.text}</Text>
            </View>
            <View>
                <View>
                    <label>
                        X: <input style={styles.address_inputfield} name="myInput"/>
                    </label>
                </View>
                <View style={styles.pickupbox}>
                    <label>
                    X: <input name="myInput"/>
                    </label>
                    <label>
                        X: <input name="myInput"/>
                    </label>
                </View>
                <View style={styles.searchbutton}>
                    <Button title={'Search'}></Button>
                </View>
            </View>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    navbarbox: {
        backgroundColor: '#330099',
        color: 'white',
        alignItems: 'center',
        width: '100%',
        height: 50,
    },
    address_inputfield : {
        width: 352,
    },
    pickupbox : {
        flexDirection: 'row',
    },
    searchbutton: {
        borderRadius: 5,
    }
})
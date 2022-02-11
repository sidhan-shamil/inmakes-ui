import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableHighlight } from "react-native";

export default class AppTour extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={require('../assets/images/image1.png')}></Image>
                <Text style={styles.text}>App tour title</Text>
                <Text style={styles.subText}>The app tour description goes here.</Text>
                <TouchableHighlight style={styles.button}>
                    <Image style={styles.buttonImg}
                        source={require('../assets/images/group388.png')}></Image>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    image: {
        width: 351,
        height: 540,
        margin: 12,
        borderRadius: 12
    },
    text: {
        marginTop: 44,
        color: '#002333',
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 20,
        lineHeight: 24
    },
    subText: {
        fontSize: 14,
        fontFamily: 'Gilroy-Regular',
        lineHeight: 16,
        color: '#9F9F9F',
        marginTop: 4
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#00C458',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 64
    }
})
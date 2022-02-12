import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableHighlight, Image, ImageBackground, TextInput, Picker } from "react-native";

export default class StudentDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo}
                    source={require('../assets/images/inmakes-logo-L.png')}></Image>
                <ImageBackground style={styles.icon}
                    source={require('../assets/images/group385.png')}>
                    <Text style={styles.iconText} >ICON</Text>
                </ImageBackground>
                <Text style={styles.text} >Student details</Text>
                <View style={styles.ViewContainer}>
                    <TextInput style={styles.input1} placeholder='Full name' placeholderTextColor={'#446270'}></TextInput>
                    <TextInput style={styles.input2} placeholder='Email' placeholderTextColor={'#446270'}></TextInput>
                    <TextInput style={styles.input2} placeholder='Select state' placeholderTextColor={'#446270'}></TextInput>
                    <TextInput style={styles.input3} placeholder='Pin code' placeholderTextColor={'#446270'}></TextInput>
                    <TouchableHighlight style={styles.button}
                        onPress={() => this.props.navigation.navigate('SchoolBoard')}>
                        <Text style={styles.buttonText} >Register</Text>
                    </TouchableHighlight>
                </View>
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
    logo: {
        width: 169,
        height: 42,
        marginTop: 48
    },
    icon: {
        marginTop: 60,
        width: 126,
        height: 126,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconText: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 12,
        lineHeight: 15,
        color: '#000'
    },
    text: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 20,
        lineHeight: 24,
        color: '#002333',
        marginTop: 60
    },
    ViewContainer: {
        width: '100%',
        height: 420,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: '#002333',
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input1: {
        width: 311,
        height: 51,
        marginTop: 32,
        borderRadius: 4,
        borderColor: '#007345',
        borderWidth: 2,
        backgroundColor: '#062E40',
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        lineHeight: 16,
        paddingLeft: 16
    },
    input2: {
        width: 311,
        height: 51,
        marginTop: 16,
        borderRadius: 4,
        borderColor: '#13394A',
        borderWidth: 1,
        backgroundColor: '#062E40',
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        lineHeight: 16,
        paddingLeft: 16
    },
    input3: {
        width: 311,
        height: 51,
        marginTop: 16,
        marginBottom: 40,
        borderRadius: 4,
        borderColor: '#13394A',
        borderWidth: 1,
        backgroundColor: '#062E40',
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        lineHeight: 16,
        paddingLeft: 16
    },
    button: {
        width: 311,
        height: 56,
        backgroundColor: '#00C458',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 14,
        color: '#fff',
        lineHeight: 18
    }
})
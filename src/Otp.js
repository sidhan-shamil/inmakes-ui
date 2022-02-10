import React,{ Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground, TouchableHighlight, TextInput } from "react-native";

export default class Otp extends Component{
    render(){
        return(
            <View style = {styles.container}>
                    <Image style = {styles.logo}
                    source={require('../assets/images/inmakes-logo-L.jpg')}></Image>
                    <ImageBackground style = {styles.icon}
                    source={require('../assets/images/group385.png')}>
                        <Text style = {styles.iconText}>ICON</Text>
                    </ImageBackground>
                    <Text style = {styles.text}>Verification code</Text>
                    <Text style = {styles.subText}>Please type the verification code sent to</Text>
                    <Text style = {styles.number}>+91 9876543210</Text>
                    <View style = {styles.viewContainer}>
                        <View style = {styles.inputView}>
                        <TextInput style = {styles.input1}></TextInput>
                        <TextInput style = {styles.input2}></TextInput>
                        <TextInput style = {styles.input2}></TextInput>
                        <TextInput style = {styles.input2}></TextInput>
                        <TextInput style = {styles.input2}></TextInput>
                        <TextInput style = {styles.input3}></TextInput>
                        </View>
                        <TouchableHighlight style = {styles.button}>
                            <Text style = {styles.buttonText}>Resend OTP</Text>
                        </TouchableHighlight>
                        <Text style = {styles.timer}>Resend after 28s</Text>
                        <View style = {styles.viewContact}>
                            <Image style = {styles.iconImage}
                            source = {require('../assets/images/group386.png')}></Image>
                            <Text style = {styles.contactText}>Contact Us</Text>
                        </View>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    logo:{
        width: 169,
        height: 42,
        marginTop: 48
    },
    icon: {
        marginTop: 101.94,
        width: 141.29,
        height: 127.29,
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
        marginTop: 101.77
    },
    subText: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        lineHeight: 16,
        color: '#9F9F9F',
        marginTop: 4
    },
    number: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 14,
        lineHeight: 16,
        color: '#002333',
        marginTop: 32,
        marginBottom: 32
    },
    viewContainer: {
        width: '100%',
        height: 267,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: '#002333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'  
    },
    input1: {
        width: 45,
        height: 45,
        backgroundColor: '#062E40',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#13394A',
        marginTop: 32,
        marginLeft: 32,
        marginRight: 8
    },
    input2: {
        width: 45,
        height: 45,
        backgroundColor: '#062E40',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#13394A',
        marginTop: 32,
        marginRight: 8
    },
    input3: {
        width: 45,
        height: 45,
        backgroundColor: '#062E40',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#13394A',
        marginTop: 32,
        marginRight: 32
    },
    button: {
        backgroundColor: '#00C458',
        borderRadius: 4,
        marginTop: 16,
        width: 311,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timer: {
        marginTop: 8,
        fontFamily: 'Gilroy-Regular',
        fontSize: 10,
        lineHeight: 12,
        color: '#446270'
    },
    viewContact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 42,
        marginTop: 38
    },
    iconImage: {
        marginRight: 7.32,
        width: 12.21,
        height: 16.2
    },
    contactText: {
        color: '#00C458',
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Gilroy-SemiBold'
    }

})
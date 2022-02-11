import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TextInput, TouchableHighlight } from 'react-native'

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
          source={require('../assets/images/inmakes-logo.jpg')}></Image>
        <Text style={styles.viewText} >Enter your mobile number</Text>
        <Text style={styles.subText} >We will send you an OTP to verify.</Text>
        <View style={styles.viewContainer}>
          <View style={styles.inputView}>
            <TextInput style={styles.code} placeholder='+91' placeholderTextColor={'#FFFFFF'}></TextInput>
            <TextInput style={styles.mobile} placeholder='Mobile number' placeholderTextColor={'#446270'}></TextInput>
          </View>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}
              onPress={() => this.props.navigation.navigate('Otp')} >Continue</Text>
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
    width: 253,
    height: 253,
    marginTop: 144,
    paddingBottom: 415,
    marginLeft: 61,
    marginRight: 61
  },
  viewText: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Gilroy-SemiBold',
    color: '#002333'
  },
  subText: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Gilroy-Regular',
    color: '#9F9F9F',
    marginBottom: 32
  },
  viewContainer: {
    width: '100%',
    height: 195,
    backgroundColor: '#002333',
    borderTopStartRadius: 16,
    borderTopRightRadius: 16
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  code: {
    fontSize: 14,
    fontFamily: 'Gilroy-Regular',
    paddingLeft: 17,
    backgroundColor: '#062E40',
    color: '#00ff44',
    height: 51,
    lineHeight: 16,
    width: 59,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#13394A',
    marginLeft: 32,
    marginTop: 32
  },
  mobile: {
    width: 244,
    height: 51,
    lineHeight: 16,
    fontSize: 14,
    fontFamily: 'Gilroy-Regular',
    backgroundColor: '#062E40',
    borderColor: '#13394A',
    borderRadius: 4,
    borderWidth: 1,
    marginLeft: 8,
    paddingLeft: 16,
    marginTop: 32,
    marginRight: 32
  },
  button: {
    width: 311,
    height: 56,
    borderRadius: 4,
    marginLeft: 32,
    marginRight: 32,
    marginTop: 16,
    backgroundColor: '#00C458',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Gilroy-SemiBold',
    color: '#FFFFFF',
    lineHeight: 18
  }
})
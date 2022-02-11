import React, {Component} from "react";
import { StyleSheet, View, Text, Image, ImageBackground, TextInput } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class SchoolBoard extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Image style={styles.logo}
                source= {require('../assets/images/inmakes-logo-L.png')}></Image>
                <ImageBackground style={styles.icon}
                source= {require('../assets/images/group385.png')}>
                    <Text style= {styles.iconText} >ICON</Text>
                </ImageBackground>
                <Text style= {styles.text}>Select you school board</Text>
                <View style= {styles.viewContainer}>
                    <TextInput style= {styles.input}
                    placeholder= 'Select board' placeholderTextColor={'#446270'}></TextInput>
                    <TextInput style= {styles.input2}
                    placeholder= 'Select class' placeholderTextColor={'#446270'}></TextInput>
                    <TouchableHighlight style = {styles.button}>
                        <Text style = {styles.buttonText} >Continue</Text>
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
    logo:{
        marginTop: 48,
        width: 169,
        height: 42
    },
    icon: {
        marginTop: 127,
        width: 126,
        height: 126,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconText: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 12,
        lineHeight: 15,
        color: '#000000'
    },
    text: {
        color: '#002333',
        fontSize: 20,
        lineHeight: 24,
        fontFamily: 'Gilroy-SemiBold',
        marginTop: 127
    },
    viewContainer: {
        marginTop: 32,
        width: '100%',
        height: 286,
        backgroundColor: '#002333',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 311,
        height: 51,
        backgroundColor: '#062E40',
        borderRadius: 4,
        borderColor: '#007345',
        borderWidth: 2,
        marginTop: 32,
        marginBottom: 16,
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        lineHeight: 16,
        paddingLeft: 16
    },
    input2: {
        width: 311,
        height: 51,
        backgroundColor: '#062E40',
        borderRadius: 4,
        borderColor: '#13394A',
        borderWidth: 1,
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
        justifyContent: 'center',
        marginTop: 40
    },
    buttonText: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 14,
        color: '#fff',
        lineHeight: 18
    }
})
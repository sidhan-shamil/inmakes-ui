import React, {Component} from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

export default class Home extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Image style = {styles.logo}
                source={require('../assets/images/inmakes-logo-L.png')}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
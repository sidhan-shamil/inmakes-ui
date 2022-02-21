import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Subscriptions extends Component{
    render(){
        return(
            <View style= {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style= {{fontSize: 25, color: '#002333'}}>No Data</Text>
            </View>
        )
    }
}
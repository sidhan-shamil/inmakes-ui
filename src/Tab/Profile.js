import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Profile extends Component {
    render() {
        return (
            <View style={{ height: '100%', backgroundColor: '#00202F' }}>
                <ScrollView>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.header}>Profile</Text>
                        <Icon style={styles.notification} name='notifications' color={'#fff'} size={20} />
                        <View style={styles.menu}>
                            <Icon name='grid-view' size={18} color='#00C458' />
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={{ marginLeft: 16, marginTop: 16, flexDirection: 'row' }} >
                            <Image style={styles.avatar}
                                source={require('../../assets/images/avatar.png')}></Image>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.nameText}>Jane Doe</Text>
                                <Text style={styles.idText}>ID: 12345678</Text>
                            </View>
                        </View>
                        <Text style={styles.subHeading}>Personal Info</Text>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowText}>Account Settings</Text>
                            <Text style={styles.rowRightText}>Aaron Taylor</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowText}>Email</Text>
                            <Text style={styles.rowRightText}>emaidid123@server.com</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowText}>Number</Text>
                            <Text style={styles.rowRightText}>+91 9876543210</Text>
                        </View>
                        <Text style={styles.subHeading}>Course Info</Text>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowText}>Center</Text>
                            <Text style={styles.rowRightText}>Inmakes edu</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowText}>Course</Text>
                            <Text style={styles.rowRightText}>Plus Two Science</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowText}>Payment Status</Text>
                            <Text style={styles.rowRightText}>Free</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowText}>Expiry Date</Text>
                            <Text style={styles.rowRightText}>Not Applicable</Text>
                        </View>
                    </View>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttonText}>Custom Payment</Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 24,
        fontFamily: 'Gilroy-Medium',
        marginLeft: 160,
        marginTop: 44
    },
    notification: {
        marginTop: 47,
        marginLeft: 70
    },
    menu: {
        width: 32,
        height: 32,
        borderColor: '#D5D5D5',
        borderWidth: 1,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginRight: 24,
        marginLeft: 19
    },
    container: {
        marginLeft: 24,
        marginRight: 24,
        marginTop: 44,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        elevation: 4
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 23,
        borderWidth: 2,
        borderColor: '#19BD9B'
    },
    nameText: {
        color: '#4D4D4D',
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Gilroy-Bold',
        marginLeft: 11
    },
    idText: {
        color: '#4D4D4D',
        fontSize: 10,
        lineHeight: 16,
        fontFamily: 'Gilroy-Regular',
        marginLeft: 11
    },
    subHeading: {
        marginTop: 24,
        marginLeft: 16,
        color: '#4D4D4D',
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Gilroy-Bold',
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1,
        paddingBottom: 24
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 16,
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1
    },
    rowText: {
        color: '#4D4D4D',
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Gilroy-Regular'
    },
    rowRightText: {
        color: '#4D4D4D',
        fontSize: 12,
        lineHeight: 15,
        fontFamily: 'Gilroy-Bold',
        marginLeft: 24
    },
    button: {
        backgroundColor: '#00C458',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        width: '86%',
        height: 68,
        marginLeft: 24
    },
    buttonText: {
        fontSize: 12,
        lineHeight: 24,
        color: '#fff'
    }
})
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableHighlight } from "react-native";

export default class DrawerContent extends Component {
    render() {
        return (
            <View style={{ width: '100%', height: '100%', backgroundColor: '#002333' }}>
                <Image style={{ marginLeft: 32, marginTop: 40, width: 32, height: 32 }}
                    source={require('../../assets/images/close.png')}></Image>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.avatar}
                        source={require('../../assets/images/avatar.png')}></Image>
                    <View style={{ flexDirection: 'column', marginLeft: 16 }}>
                        <Text style={styles.text}>Aaron Taylor</Text>
                        <Text style={styles.subText}>ID: 1234</Text>
                    </View>
                    <Image style={styles.icon}
                        source={require('../../assets/images/group391.png')}></Image>
                </View>

                <View style={{ marginLeft: 32, marginRight: 32, marginBottom: 40, marginTop: 42 }}>
                    <View style={{ flexDirection: 'row', borderBottomColor: '#243C47', borderBottomWidth: 1, marginTop: 16 }}>
                        <View style={styles.square}></View>
                        <Text style={styles.columnText}
                            onPress={() => this.props.navigation.navigate('ExamCorner')}>Exam corner</Text>
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomColor: '#243C47', borderBottomWidth: 1, marginTop: 16 }}>
                        <View style={styles.square}></View>
                        <Text style={styles.columnText}
                            onPress={() => this.props.navigation.navigate('Subscriptions')}>Subrscriptions</Text>
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomColor: '#243C47', borderBottomWidth: 1, marginTop: 16 }}>
                        <View style={styles.square}></View>
                        <Text style={styles.columnText}
                            onPress={() => this.props.navigation.navigate('Analytics')}>Analytics</Text>
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomColor: '#243C47', borderBottomWidth: 1, marginTop: 16 }}>
                        <View style={styles.square}></View>
                        <Text style={styles.columnText}
                            onPress={() => this.props.navigation.navigate('Downloads')}>Downloads</Text>
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomColor: '#243C47', borderBottomWidth: 1, marginTop: 16 }}>
                        <View style={styles.square}></View>
                        <Text style={styles.columnText}
                            onPress={() => this.props.navigation.navigate('Notifications')}>Notifications</Text>
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomColor: '#243C47', borderBottomWidth: 1, marginTop: 16 }}>
                        <View style={styles.square}></View>
                        <Text style={styles.columnText}
                            onPress={() => this.props.navigation.navigate('Referrals')}>Referrals</Text>
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomColor: '#243C47', borderBottomWidth: 1, marginTop: 16 }}>
                        <View style={styles.square}></View>
                        <Text style={styles.columnText}
                            onPress={() => this.props.navigation.navigate('Shareapp')}>Share app</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 16 }}>
                        <View style={styles.squareRed}></View>
                        <Text style={styles.columnTextRed}
                            onPress={() => this.props.navigation.navigate('Logout')}>Logout</Text>
                    </View>
                </View>

                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>Enquire now</Text>
                </TouchableHighlight>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#00C458',
        marginLeft: 32,
        marginTop: 40
    },
    text: {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Gilroy-SemiBold',
        color: '#fff',
        marginTop: 54
    },
    subText: {
        color: '#6A828E',
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Gilroy-Regular',
        marginTop: 2
    },
    icon: {
        marginTop: 65,
        width: 6.36,
        height: 9.9,
        marginLeft: 29.59
    },
    square: {
        width: 30,
        height: 30,
        borderColor: '#00C458',
        borderRadius: 4,
        borderWidth: 1,
        marginLeft: 32
    },
    columnText: {
        marginLeft: 16,
        color: '#fff',
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Gilroy-Regular',
        marginTop: 8,
        marginBottom: 23
    },
    squareRed: {
        width: 30,
        height: 30,
        borderColor: '#E14949',
        borderRadius: 4,
        borderWidth: 1,
        marginLeft: 32
    },
    columnTextRed: {
        marginLeft: 16,
        color: '#E14949',
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Gilroy-Regular',
        marginTop: 8,
        marginBottom: 23
    },
    button: {
        width: 193,
        height: 47,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#00C458',
        marginLeft: 32,
        marginBottom: 40,
        marginRight: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 12,
        lineHeight: 15,
        color: '#00C458',
        fontFamily: 'Gilroy-SemiBold'
    }
})
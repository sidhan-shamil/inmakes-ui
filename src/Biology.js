import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Biology extends Component {
    render() {
        return (
            <View style={{ height: '100%', width: '100%' }}>
                <View style={{ height: '30%', backgroundColor: '#00202F', width: '100%' }}>
                    <Image style={styles.backArrow}
                        source={require('../assets/images/backArrow.png')}></Image>
                    <Text style={styles.heading}>Biology</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon style={{ marginLeft: 34, marginRight: 6 }}
                            name='radio-button-checked' size={12} color={'#00C458'} />
                        <Text style={styles.subHead}>12 Chapters</Text>
                        <Icon style={{ marginLeft: 24, marginRight: 6 }}
                            name='radio-button-checked' size={12} color={'#00C458'} />
                        <Text style={styles.subHead}>124 hours</Text>
                    </View>
                </View>
                <View style={{ height: '70%', width: '100%', backgroundColor: '#F9F9F9' }}>
                    <ScrollView horizontal={false}>
                        <View style={styles.cards}>
                            <Text style={styles.cardText}>Long chapter name can be shown here.</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ marginLeft: 20, marginBottom: 20, marginRight: 6 }}
                                    name='radio-button-checked' size={12} color='#9F9F9F' />
                                <Text style={styles.cardSubText}>Chapter 1</Text>
                                <Icon style={{ marginLeft: 24, marginBottom: 20, marginRight: 6 }}
                                    name='radio-button-checked' size={12} color='#9F9F9F' />
                                    <Text style= {styles.cardSubText}>3 parts</Text>
                            </View>
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.cardText}>Long chapter name can be shown here.</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ marginLeft: 20, marginBottom: 20, marginRight: 6 }}
                                    name='radio-button-checked' size={12} color='#9F9F9F' />
                                <Text style={styles.cardSubText}>Chapter 1</Text>
                                <Icon style={{ marginLeft: 24, marginBottom: 20, marginRight: 6 }}
                                    name='radio-button-checked' size={12} color='#9F9F9F' />
                                    <Text style= {styles.cardSubText}>3 parts</Text>
                            </View>
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.cardText}>Long chapter name can be shown here.</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ marginLeft: 20, marginBottom: 20, marginRight: 6 }}
                                    name='radio-button-checked' size={12} color='#9F9F9F' />
                                <Text style={styles.cardSubText}>Chapter 1</Text>
                                <Icon style={{ marginLeft: 24, marginBottom: 20, marginRight: 6 }}
                                    name='radio-button-checked' size={12} color='#9F9F9F' />
                                    <Text style= {styles.cardSubText}>3 parts</Text>
                            </View>
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.cardText}>Long chapter name can be shown here.</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ marginLeft: 20, marginBottom: 20, marginRight: 6 }}
                                    name='radio-button-checked' size={12} color='#9F9F9F' />
                                <Text style={styles.cardSubText}>Chapter 1</Text>
                                <Icon style={{ marginLeft: 24, marginBottom: 20, marginRight: 6 }}
                                    name='radio-button-checked' size={12} color='#9F9F9F' />
                                    <Text style= {styles.cardSubText}>3 parts</Text>
                            </View>
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.cardText}>Long chapter name can be shown here.</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ marginLeft: 20, marginBottom: 20, marginRight: 6 }}
                                    name='radio-button-checked' size={12} color='#9F9F9F' />
                                <Text style={styles.cardSubText}>Chapter 1</Text>
                                <Icon style={{ marginLeft: 24, marginBottom: 20, marginRight: 6 }}
                                    name='radio-button-checked' size={12} color='#9F9F9F' />
                                    <Text style= {styles.cardSubText}>3 parts</Text>
                            </View>
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.cardText}>Long chapter name can be shown here.</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ marginLeft: 20, marginBottom: 20, marginRight: 6 }}
                                    name='radio-button-checked' size={12} color='#9F9F9F' />
                                <Text style={styles.cardSubText}>Chapter 1</Text>
                                <Icon style={{ marginLeft: 24, marginBottom: 20, marginRight: 6 }}
                                    name='radio-button-checked' size={12} color='#9F9F9F' />
                                    <Text style= {styles.cardSubText}>3 parts</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backArrow: {
        width: 32,
        height: 32,
        marginLeft: 32,
        marginTop: 40
    },
    heading: {
        color: '#fff',
        fontSize: 24,
        lineHeight: 30,
        fontFamily: 'Gilroy-Bold',
        marginTop: 48,
        marginLeft: 32,
        marginBottom: 8
    },
    subHead: {
        color: '#00C458',
        fontSize: 10,
        lineHeight: 12,
        fontFamily: 'Gilroy-Medium',
        marginRight: 24
    },
    cards: {
        elevation: 4,
        width: 311,
        height: 115,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        borderColor: '#EEEEEE',
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 8,
        borderWidth: 1
    },
    cardText: {
        fontSize: 18,
        fontFamily: 'Gilroy-SemiBold',
        lineHeight: 23,
        color: '#002333',
        marginBottom: 16,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    cardSubText: {
        fontSize: 10,
        fontFamily: 'Gilroy-Medium',
        lineHeight: 12,
        color: '#9F9F9F'
    }
})
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                {/* header */}
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.menu}>
                        <Icon name='grid-view' size={18} color='#00C458' onPress={() => this.props.navigation.openDrawer()} />
                    </View>
                    <Image style={styles.logo}
                        source={require('../assets/images/inmakes-logo-L.png')}></Image>
                    <View style={styles.classes}>
                        <View style={{ width: 16, height: 16, backgroundColor: '#007345', borderRadius: 8 }}></View>
                        <Text style={styles.text}>Classes</Text>
                    </View>
                </View>
                {/* header-end */}
                {/* section-1 */}
                <ScrollView horizontal={false}>
                    <Text style={styles.contentText}>Goodmorning</Text>
                    <Text style={styles.textMain}>Aaron Taylor</Text>
                    <ImageBackground style={{ marginTop: 37, marginLeft: 32, marginRight: 32 }}
                        imageStyle={{ borderRadius: 2 }}
                        source={require('../assets/images/group389.png')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ marginLeft: 32 }}>
                                <Text style={styles.imgText}>Class</Text>
                                <Text style={styles.mainText}>Plus two science</Text>
                            </View>
                            <View style={{ marginRight: 32 }}>
                                <Icon style={{ paddingLeft: 134 }} name='keyboard-arrow-down' size={12} color={'#FFFFFF'} />
                            </View>
                        </View>
                    </ImageBackground>
                    {/* section-1-end */}
                    {/* section-2 */}
                    <View style={{ marginTop: 24, flexDirection: 'row', marginLeft: 32 }}>
                        <ScrollView horizontal={true}>
                            <View style={styles.subject}>
                                <View style={{ width: 23, height: 23, borderRadius: 11.5, marginRight: 8, backgroundColor: '#00C458' }}></View>
                                <Text style={styles.subjectText}
                                    onPress={() => this.props.navigation.navigate('Biology')}>Biology</Text>
                            </View>
                            <View style={styles.subject}>
                                <View style={{ width: 23, height: 23, borderRadius: 11.5, marginRight: 8, backgroundColor: '#00C458' }}></View>
                                <Text style={styles.subjectText}
                                    onPress={() => this.props.navigation.navigate('Biology')}>Physics</Text>
                            </View>
                            <View style={styles.subject}>
                                <View style={{ width: 23, height: 23, borderRadius: 11.5, marginRight: 8, backgroundColor: '#00C458' }}></View>
                                <Text style={styles.subjectText}
                                    onPress={() => this.props.navigation.navigate('Biology')}>Chemistry</Text>
                            </View>
                            <View style={styles.subject}>
                                <View style={{ width: 23, height: 23, borderRadius: 11.5, marginRight: 8, backgroundColor: '#00C458' }}></View>
                                <Text style={styles.subjectText}
                                    onPress={() => this.props.navigation.navigate('Biology')}>Maths</Text>
                            </View>
                            <View style={styles.subject}>
                                <View style={{ width: 23, height: 23, borderRadius: 11.5, marginRight: 8, backgroundColor: '#00C458' }}></View>
                                <Text style={styles.subjectText}
                                    onPress={() => this.props.navigation.navigate('Biology')}>English</Text>
                            </View>
                        </ScrollView>
                    </View>
                    {/* section-2-end */}
                    {/* section-3-start */}
                    <Text style={styles.recentCourses}>Recent courses</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 32 }}>
                        <ScrollView horizontal={true}>
                            <ImageBackground style={styles.videoCard} imageStyle={{ borderRadius: 2 }}
                                source={require('../assets/images/video.png')}>
                                <Image style={styles.playButton}
                                    source={require('../assets/images/group392.png')}></Image>
                                <Text style={styles.videocardText}>Course Title</Text></ImageBackground>
                            <ImageBackground style={styles.videoCard} imageStyle={{ borderRadius: 2 }}
                                source={require('../assets/images/video.png')}>
                                <Image style={styles.playButton}
                                    source={require('../assets/images/group392.png')}></Image>
                                <Text style={styles.videocardText}>Course Title</Text></ImageBackground>
                            <ImageBackground style={styles.videoCard} imageStyle={{ borderRadius: 2 }}
                                source={require('../assets/images/video.png')}>
                                <Image style={styles.playButton}
                                    source={require('../assets/images/group392.png')}></Image>
                                <Text style={styles.videocardText}>Course Title</Text></ImageBackground>
                            <ImageBackground style={styles.videoCard} imageStyle={{ borderRadius: 2 }}
                                source={require('../assets/images/video.png')}>
                                <Image style={styles.playButton}
                                    source={require('../assets/images/group392.png')}></Image>
                                <Text style={styles.videocardText}>Course Title</Text></ImageBackground>
                        </ScrollView>
                    </View>
                    {/* section-3-end */}
                    {/* section-4-start */}
                    <View style={{ marginTop: 24, marginLeft: 32, flexDirection: 'row' }}>
                        <ScrollView horizontal={true}>
                            <View style={styles.liveClass}>
                                <View style={{ width: 79, height: 79, borderRadius: 39.5, backgroundColor: '#002E43', marginTop: 38, marginBottom: 16 }}></View>
                                <Text style={styles.liveClasstext}>Target live classes</Text>
                                <Text style={styles.liveClassSubText}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                                <TouchableHighlight style={styles.button}>
                                    <Text style={styles.buttonText}>Book a free Class</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.liveClass}>
                                <View style={{ width: 79, height: 79, borderRadius: 39.5, backgroundColor: '#002E43', marginTop: 38, marginBottom: 16 }}></View>
                                <Text style={styles.liveClasstext}>Target live classes</Text>
                                <Text style={styles.liveClassSubText}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                                <TouchableHighlight style={styles.button}>
                                    <Text style={styles.buttonText}>Book a free Class</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.liveClass}>
                                <View style={{ width: 79, height: 79, borderRadius: 39.5, backgroundColor: '#002E43', marginTop: 38, marginBottom: 16 }}></View>
                                <Text style={styles.liveClasstext}>Target live classes</Text>
                                <Text style={styles.liveClassSubText}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                                <TouchableHighlight style={styles.button}>
                                    <Text style={styles.buttonText}>Book a free Class</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.liveClass}>
                                <View style={{ width: 79, height: 79, borderRadius: 39.5, backgroundColor: '#002E43', marginTop: 38, marginBottom: 16 }}></View>
                                <Text style={styles.liveClasstext}>Target live classes</Text>
                                <Text style={styles.liveClassSubText}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                                <TouchableHighlight style={styles.button}>
                                    <Text style={styles.buttonText}>Book a free Class</Text>
                                </TouchableHighlight>
                            </View>
                        </ScrollView>
                    </View>
                    {/* section-4-end */}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        width: 32,
        height: 32,
        borderColor: '#D5D5D5',
        borderWidth: 1,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginLeft: 32,
        marginRight: 8
    },
    logo: {
        marginTop: 44,
        width: 116,
        height: 26
    },
    classes: {
        width: 75,
        height: 32,
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#00C458',
        flexDirection: 'row',
        marginLeft: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    text: {
        color: '#00C458',
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 10,
        lineHeight: 13,
        marginLeft: 8
    },
    contentText: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 12,
        lineHeight: 15,
        color: '#002333',
        marginTop: 53,
        marginLeft: 32,
        marginBottom: 2
    },
    textMain: {
        fontFamily: 'Gilroy-Bold',
        color: '#002333',
        fontSize: 24,
        lineHeight: 30,
        marginLeft: 32
    },
    imgText: {
        color: '#BAC3C7',
        fontFamily: 'Gilroy-Regular',
        fontSize: 12,
        lineHeight: 14,
        marginTop: 16,
        marginBottom: 2
    },
    mainText: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 14,
        lineHeight: 16,
        color: '#FFFFFF',
        marginBottom: 16
    },
    subject: {
        backgroundColor: '#fff',
        width: 92,
        height: 39,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#002333',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight: 8
    },
    subjectText: {
        fontSize: 12,
        fontFamily: 'Gilroy-SemiBold',
        lineHeight: 15,
        color: '#002333'
    },
    recentCourses: {
        color: '#002333',
        fontSize: 12,
        fontFamily: 'Gilroy-Medium',
        lineHeight: 15,
        marginTop: 24,
        marginBottom: 8,
        marginLeft: 32
    },
    videoCard: {
        width: 213,
        height: 121,
        marginRight: 8,
        flexDirection: 'row'
    },
    playButton: {
        marginTop: 79,
        marginLeft: 10,
        width: 24,
        height: 24,
        marginRight: 8
    },
    videocardText: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 12,
        lineHeight: 15,
        color: '#FFFFFF',
        marginTop: 84
    },
    liveClass: {
        width: 238,
        height: 367,
        backgroundColor: '#002333',
        borderRadius: 8,
        paddingLeft: 32,
        marginRight: 16
    },
    liveClasstext: {
        color: '#FFFFFF',
        fontFamily: 'Gilroy-Bold',
        fontSize: 18,
        lineHeight: 23
    },
    liveClassSubText: {
        marginTop: 12,
        color: '#446270',
        fontSize: 14,
        fontFamily: 'Gilroy-Regular',
        lineHeight: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 145,
        height: 47,
        borderRadius: 4,
        backgroundColor: '#00C458',
        marginTop: 24
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 12,
        lineHeight: 15
    }
})

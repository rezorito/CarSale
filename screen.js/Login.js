import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TextInput, Dimensions, Image, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import { removeAllDataFromStorage } from '../DataPayments/DataPay';

const Login = (props) => {

    const [mdlogin, setmdlogin] = useState(true)
    const [mdsignup, setmdsigup] = useState(false)
    const navigation = useNavigation()
    
    return <ImageBackground
        source={require('../assets/khac/login.jpg')}
        resizeMode='stretch'
        style={styles.imgbgr}
    >
        <Modal
            visible={mdlogin}
            transparent={true}
            animationType='slide'
        >
            <View style={{flex: 1}}/>
            <View style={[styles.content]}>
                <View style={styles.icon}>
                    <View style={styles.icon1}>
                        <View style={styles.icon2}>
                            <Icon name={"user-lock"} size={30} color={'black'} />
                        </View>
                    </View>
                </View>
                <View style={[styles.row, { justifyContent: 'center', alignItems: 'flex-end' }]}>
                    <View style={[styles.row]}>
                        <Text style={{ color: 'white' }}>New User</Text>
                        <TouchableOpacity 
                            onPress={() => {setmdlogin(false), setmdsigup(true)}}
                            style={{ marginStart: 5 }}
                        >
                            <Text style={{ color: 'rgb(255, 230, 71)' }}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MainScreen')}
                    >
                        <Text style={{ fontSize: 20, color: 'white' }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Email or User name'
                        style={styles.textip}
                    >
                    </TextInput>
                    <Icon name={"user-tie"} size={20} style={styles.iconlg} />
                </View>
                <View style={{ marginTop: 10, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Password'
                        style={styles.textip}
                        secureTextEntry={true}
                    >
                    </TextInput>
                    <Icon name={"key"} size={20} style={styles.iconlg} />
                </View>
                <View style={[styles.row, { marginTop: 10 }]}>
                    <View>
                        <Text style={{ color: 'white' }}>Save Password</Text>
                    </View>
                    <View style={{ flex: 1 }} />
                    <View>
                        <TouchableOpacity>
                            <Text style={{ color: 'white' }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.row, { justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10 }]}>
                    <Text style={{ color: 'white' }}>Also Login With</Text>
                    <TouchableOpacity style={styles.iconas}>
                        <Icon name={"facebook-f"} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconas}>
                        <Icon name={"google-plus-g"} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        <Modal
            visible={mdsignup}
            transparent={true}
            animationType='slide'
        >
            <View style={{ flex: 1 }} />
            <View style={[styles.content, { height: '90%', paddingTop: 10, backgroundColor: 'rgba(255,255,255,0.5)', }]}>
                <View style={styles.signup}>
                    <TouchableOpacity  
                        onPress={() => {setmdsigup(false), setmdlogin(true)}}
                        style={styles.back} >
                        <Icon name={"chevron-left"} size={20} color={'black'}/>
                    </TouchableOpacity>
                    <Text style={styles.tsignup}>Sign up</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator = {false}
                    style={{marginTop: 15}}
                >
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.t}>Name {'(*)'} :</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                placeholder='First name'
                                style={[styles.textip, { flex: 1, marginEnd: 10 }]}
                            >
                            </TextInput>
                            <TextInput
                                placeholder='Last Name'
                                style={[styles.textip, { flex: 1, marginStart: 10 }]}
                            >
                            </TextInput>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.t}>User name {'(*)'} :</Text>
                        <TextInput
                            placeholder='Username'
                            style={styles.textip}
                        >
                        </TextInput>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.t}>Password {'(*)'} :</Text>
                        <TextInput
                            placeholder='Password'
                            style={styles.textip}
                            passwordRules={true}
                        >
                        </TextInput>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.t}>Confirm password {'(*)'} :</Text>
                        <TextInput
                            placeholder='Password'
                            style={styles.textip}
                        >
                        </TextInput>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.t}>Email {'(*)'} :</Text>
                        <TextInput
                            placeholder='Email'
                            style={styles.textip}
                        >
                        </TextInput>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.t}>Phone {'(*)'} :</Text>
                        <TextInput
                            placeholder='### #### ###'
                            style={styles.textip}
                            maxLength={10}
                            keyboardType='numeric'
                        >
                        </TextInput>
                    </View>
                    <Text>
                        {'(*)'} : required entry
                    </Text>
                    <TouchableOpacity 
                        onPress={() => {setmdsigup(false), setmdlogin(true)}}
                        style={styles.touch_signup}
                    >
                        <Text style={{fontSize: 20, color: 'white'}}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Modal>
    </ImageBackground>
}

const styles = StyleSheet.create(
    {
        imgbgr: {
            flex: 1,
        },
        content: {
            width: '100%',
            height: '35%',
            backgroundColor: 'rgba(255,255,255,0.3)',
            paddingTop: 10,
            paddingHorizontal: 25
        },
        icon: {
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 60,
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.5)',
            top: -60,
            alignSelf: 'center'
        },
        icon1: {
            width: 85, height: 85, 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'rgba(0,0,0,0.25)', 
            borderRadius: 60, 
            borderWidth: 1, 
            borderStyle: 'dashed', 
            borderColor: 'white' 
        },
        icon2: { 
            width: 70, 
            height: 70, 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'white', 
            borderRadius: 60 
        },
        row: {
            flexDirection: 'row'
        },
        textip: {
            backgroundColor: 'white',
            borderRadius: 30,
            paddingHorizontal: 20,
            fontSize: 15
        },
        iconlg: {
            position: 'absolute',
            right: 25
        },
        iconas: {
            marginStart: 5,
            width: 30,
            height: 30,
            borderRadius: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
        },
        back: {
            position: 'absolute',
            width: 25,
            height: 25,
            justifyContent: 'center', 
            alignItems: 'center',
            left: 0
        },
        signup: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        tsignup: {
            fontSize: 25, 
            color: 'black'
        },
        t: {
            fontSize: 20,
            color: 'black',
            marginBottom: 10
        },
        touch_signup: {
            backgroundColor: 'blrgb(0, 180, 255)ue',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            marginVertical: 15,
            borderRadius: 60
        }
    }
)

export default Login;
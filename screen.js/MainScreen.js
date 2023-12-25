import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, Image, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import { LoaiXe, SanPham } from '../components/Mainscreen';
import { useNavigation } from '@react-navigation/native';
import { removeAllDataFromStorage } from '../DataPayments/DataPay';

const win = Dimensions.get('window')
const MainScreen = (props) => {

    const navigation = useNavigation()
    const [mn,setmn] = useState(false)
    const show = () => setmn(true)
    const hide = () => setmn(false)
    return <View style={{backgroundColor: 'white'}}>
        <ImageBackground
            source={require('../assets/khac/toyota.jpg')}
            resizeMode='cover'
            style={{
                width: win.width,
                height: 300
            }}
        >
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={show}
                    style={styles.menu}
                >
                    <Icon name={"bars-staggered"} size={30} color={'white'} />
                </TouchableOpacity>
                <Text style={styles.title_app}>
                    CarSale
                </Text>
                <View style={{ flex: 1 }} />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Search')}
                    style={styles.search}
                >
                    <Icon name={"magnifying-glass"} size={30} color={'white'} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 15}}>
                <Text style={{fontSize: 23, color: 'white', top: 15, fontFamily: 'Lobster'}}>Find the <Text style={{color: 'rgb(0, 98, 255)'}}>Rignt Car /   Popular.</Text></Text>
                <View style={{ flex: 1 }} />
                <View>
                    <Image
                        source={require('../assets/khac/hyundai.webp')}
                        resizeMode='cover'
                        style={styles.img}
                    />
                    <Image
                        source={require('../assets/khac/kia.jpg')}
                        resizeMode='cover'
                        style={styles.img}
                    />
                    <Image
                        source={require('../assets/khac/mazda.jpg')}
                        resizeMode='cover'
                        style={styles.img}
                    />
                </View>
            </View>
        </ImageBackground>
        <LoaiXe/>
        <View>
            <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold', marginStart: 20, fontFamily: 'Roboto-Regular'}}>Lastest</Text>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginVertical: 20}}
            >
                <SanPham name={"Toyota"} id={1}/>
                <SanPham name={"Hyundai"} id={13}/>
                <SanPham name={"Kia"} id={20}/>
                <SanPham name={"Ford"} id={25}/>
                <SanPham name={"Mazda"} id={31}/>
            </ScrollView>
        </View>
        <Modal
            visible={mn}
            onRequestClose={hide}
            // animationType='slide'
            animationIn="slideInLeft"
            animationOut="slideOutRight"
            // style={Animated.timing}
            transparent={true}
        >
            <View style={{flexDirection: 'row'}}>
                <View style={{ width: win.width - 100, height: win.height, backgroundColor: 'white'}}>
                    <ImageBackground
                        source = {require('.././assets/khac/background-xanh-duong-02.jpg')}
                        resizeMode='cover'
                        style={{
                            height: 150,
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingStart: 15,
                        }}
                    >
                        <View
                            style={[styles.avatar,
                            {
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.18,
                                shadowRadius: 1.00,
                                elevation: 1,
                            }]}>
                            <Image
                                source={require('../assets/khac/anh-dep-41.jpg')}
                                resizeMode='cover'
                                style={styles.avatar}
                            />
                        </View>
                        <View style={{marginStart: 15, alignItems: 'center', justifyContent: 'center',}}>
                            <Text style={[styles.title_app, {fontSize: 20, color: 'black'}]}>Welcome, Nani</Text>
                            <TouchableOpacity><Text style={styles.md_head}>View profile</Text></TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={{height: 1, backgroundColor: 'rgb(180, 180, 180)'}}></View>
                    <View style={{marginTop: 25, marginStart: 25}}>
                        <TouchableOpacity>
                            <View style={styles.md_tou}>
                                <Icon name={"house"} size={25} color={"rgb(180,180,180)"} />
                                <Text style={styles.md_te}>Home</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.md_tou}>
                                <Icon name={"bell"} size={25} color={"rgb(180,180,180)"} />
                                <Text style={styles.md_te}>Notification</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {hide() ,navigation.navigate('Payments')}}
                        >
                            <View style={styles.md_tou}>
                                <Icon name={"cart-shopping"} size={25} color={"rgb(180,180,180)"} />
                                <Text style={styles.md_te}>Payments</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.md_tou}>
                                <Icon name={"circle-info"} size={25} color={"rgb(180,180,180)"} />
                                <Text style={styles.md_te}>Help</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.md_tou}>
                                <Icon name={"gear"} size={25} color={"rgb(180,180,180)"} />
                                <Text style={styles.md_te}>Settings</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Pressable onPress={hide} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />
            </View>
        </Modal>
    </View>
}

const styles = StyleSheet.create(
    {
        header : {
            height: 50,
            backgroundColor: 'rgba(240, 240, 240, 0)',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },
        menu: {
            marginHorizontal: 12,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
        search: {
            marginHorizontal: 12,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
        title_app: {
            fontSize: 25,
            fontWeight: '800',
            color: 'white',
            fontFamily: 'CrimsonText-Italic'
        },
        img: {
            width: 85,
            height: 60,
            marginVertical: 5,
            borderRadius: 15
        },
        avatar: {
            width: 80,
            height: 80,
            borderRadius: 60
        },
        md_tou: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 15,
            width: 200,
        },
        md_te: {
            fontSize: 25,
            marginStart: 15,
            color: 'black'
        },
        md_head: {
            fontSize: 15, 
            color: 'black',
            marginTop: 10,
            
        },
    }
)

export default MainScreen;
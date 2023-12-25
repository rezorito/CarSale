import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, TextInput, Touchable, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native';
import { xe_ford, xe_hyundai, xe_kia, xe_mazda, xe_toyota } from '../Xe/xe';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import { checkObjectExistence, checkObjectInAsyncStorage, getAllData, getAllDataFromStorage, getCarFromStorage, storeCarById } from '../DataPayments/DataPay';
import AsyncStorage from '@react-native-async-storage/async-storage';

const win = Dimensions.get('window')

const CTXe = ({ route, navigation }) => {
    const navi = useNavigation()
    const [name, idx] = route.params

    // const idx = route.params
    let loaixe
    if (name == 'Toyota') {
        loaixe = xe_toyota
    } else if (name == 'Hyundai') {
        loaixe = xe_hyundai
    } else if (name == 'Kia') {
        loaixe = xe_kia
    } else if (name == 'Ford') {
        loaixe = xe_ford
    } else {
        loaixe = xe_mazda
    }
    const carWithDesiredId = loaixe.find(car => car.id === idx);

    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 50 }}>
            <TouchableOpacity
                onPress={() => { navi.goBack() }}
                style={{ position: 'absolute', left: 10 }}
            >
                <Icon name={"chevron-left"} size={25} color={'rgb(90,90,90)'} />
            </TouchableOpacity>
            <Text style={[styles.titlecar,{alignSelf: 'center'}]}>DeTails</Text>
            <TouchableOpacity
                style={styles.share}>
                <Icon name={"share-nodes"} size={25} regular />
            </TouchableOpacity>
        </View>
        <Image
            source={carWithDesiredId.url}
            resizeMode='stretch'
            style={styles.img}
        />
        <View style={styles.content}>
            <View style={{alignItems: 'center' }}>
                <Text style={styles.titlecar}>{name} - {carWithDesiredId.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <Icon name={"star"} size={20} color={'rgb(255, 228, 0)'} solid style={{ marginEnd: 5 }} />
                <Text style={{ fontSize: 15, color: 'rgb(255, 228, 0)' }}>{carWithDesiredId.score}</Text>
                <Text style={styles.score}>  ( {carWithDesiredId.engine} user )</Text>
                <Text style={[styles.titlecar, { fontSize: 25, flex: 1, textAlign: 'right' }]}>{carWithDesiredId.startprice.toString()} $</Text>
            </View>
        </View>
        <View>
            <Text style={[styles.titlecar, { left: 0, marginStart: 20 }]}>Key Specs for {carWithDesiredId.name}</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scrvspecs}
            >
                <View style={[styles.itemspecs, styles.shadow]}>
                    <Image
                        source={require('../assets/ctsp/mileage.jpg')}
                        resizeMode='cover'
                        style={styles.imgspecs}
                    />
                    <Text style={styles.atrispecs}>Miluege</Text>
                    <Text style={styles.parspecs}>{carWithDesiredId.mileage} kmpl</Text>
                </View>
                <View style={[styles.itemspecs, styles.shadow]}>
                    <Image
                        source={require('../assets/ctsp/engine.png')}
                        resizeMode='cover'
                        style={styles.imgspecs}
                    />
                    <Text style={styles.atrispecs}>Engine</Text>
                    <Text style={styles.parspecs}>{carWithDesiredId.engine} cc</Text>
                </View>
                <View style={[styles.itemspecs, styles.shadow]}>
                    <Image
                        source={require('../assets/ctsp/seat.png')}
                        resizeMode='cover'
                        style={styles.imgspecs}
                    />
                    <Text style={styles.atrispecs}>Seat</Text>
                    <Text style={styles.parspecs}>{carWithDesiredId.seat} seats</Text>
                </View>
                <View style={[styles.itemspecs, styles.shadow]}>
                    <Image
                        source={require('../assets/ctsp/bhp.png')}
                        resizeMode='cover'
                        style={styles.imgspecs}
                    />
                    <Text style={styles.atrispecs}>BHP</Text>
                    <Text style={styles.parspecs}>{carWithDesiredId.engine} BHP</Text>
                </View>
            </ScrollView>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <TouchableOpacity
                style={styles.touch}
                onPress={() => { storeCarById(carWithDesiredId.id, loaixe) }}
            >
                <Text style={styles.touch_t}>ADD TO CART</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touch, { backgroundColor: 'rgb(255,95,0)' }]}>
                <Text style={[styles.touch_t, { color: 'white' }]}>BUY NOW</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create(
    {
        titlecar: {
            fontSize: 25,
            color: 'black',
            fontWeight: '500',
            fontFamily: 'Roboto',
            alignSelf: 'flex-start'
        },
        share: {
            position: 'absolute',
            right: 10,
            alignItems: 'center',
        },
        img: {
            width: win.width,
            height: 200,
            marginVertical: 10
        },
        content: {
            marginTop: 5,
            marginBottom: 10,
            marginHorizontal: 15,
            padding: 10,
            borderRadius: 15,
            backgroundColor: 'white',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.00,

            elevation: 1,
        },
        scrvspecs: {
            marginTop: 15,
            height: 150
        },
        itemspecs: {
            width: 120,
            height: 140,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 15,
            backgroundColor: 'white',
            borderRadius: 15,
        },
        imgspecs: {
            width: 60,
            height: 60,
            borderRadius: 60
        },
        atrispecs: {
            fontSize: 15
        },
        parspecs: {
            color: 'black',
            fontSize: 18,
            marginTop: 10
        },
        shadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
        },
        touch: {
            backgroundColor: 'rgb(240, 240, 240)',
            width: 150,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            flex: 1,
            marginHorizontal: 15
        },
        touch_t: {
            fontSize: 20,
            fontWeight: '500',
            fontFamily: 'Roboto'
        }
    }
)

export default CTXe;
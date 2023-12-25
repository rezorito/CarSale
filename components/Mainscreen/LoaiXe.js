import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

let listloaixe = [
    toyota = {
        id: 1,
        name: 'Toyota',
        url: require('../../assets/anhloaixe/toyota.png')
    },
    hyundai = {
        id: 2,
        name: 'Hyundai',
        url: require('../../assets/anhloaixe/hyundai.webp')
    },
    kia = {
        id: 3,
        name: 'Kia',
        url: require('../../assets/anhloaixe/kia.webp')
    },
    ford = {
        id: 4,
        name: 'Ford',
        url: require('../../assets/anhloaixe/ford.png')
    },
    mazda = {
        id: 5,
        name: 'Mazda',
        url: require('../../assets/anhloaixe/mazda.png')
    }
]

const LoaiXe = (props) => {
    const navigation = useNavigation()
    return <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    >
        <View style={styles.listitem}>
            {listloaixe.map(eachloaixe => 
                <TouchableOpacity 
                    key={eachloaixe.id}
                    onPress={() => {navigation.navigate('ScreenSP' , eachloaixe.name)}}
                    style={styles.item}
                >
                    <Image source={eachloaixe.url} resizeMode='cover' style={styles.img} />
                    <Text style={styles.text}>{eachloaixe.name}</Text>
                </TouchableOpacity>
            )}
        </View>
    </ScrollView>
}

const styles = StyleSheet.create(
    {
        listitem: {
            flexDirection: 'row'
        },
        item: {
            width: 100,
            marginVertical: 20,
            marginHorizontal: 7,
            shadowColor: "#000",
            backgroundColor: 'white',
            borderRadius: 25,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.00,

            elevation: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        img: {
            width: 80,
            height: 50,
            marginHorizontal: 1,
            marginVertical: 1
        },
        text: {
            fontSize: 20,
            color: 'black',
            marginVertical: 5,
            fontFamily: 'Roboto-Regular'
        }
    }
)

export default LoaiXe;
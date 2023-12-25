import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { xe_toyota, xe_hyundai, xe_kia, xe_ford, xe_mazda } from '../../Xe/xe';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';    
import { useNavigation } from '@react-navigation/native';


const SanPham = (props) => {
    const navi = useNavigation()
    const name = props.name
    let loaixe
    if(name == 'Toyota') {
        loaixe = xe_toyota
    } else if(name == 'Hyundai') {
        loaixe = xe_hyundai
    } else if(name == 'Kia') {
        loaixe = xe_kia
    } else if(name == 'Ford') {
        loaixe = xe_ford
    } else {
        loaixe = xe_mazda
    }
    const id = props.id
    const carWithDesiredId = loaixe.find(car => car.id === id);

    return <TouchableOpacity 
            onPress={() => {navi.navigate('CTXe',[name,id])}}
        style={styles.item}
    >
        <View key={carWithDesiredId.id} style={{ marginHorizontal: 7, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={carWithDesiredId.url} style={styles.imgbgr}>
                <View style={styles.score}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: '500' }}>{carWithDesiredId.score}</Text>
                    <Icon name={"star"} size={20} color={'white'} />
                </View>
            </ImageBackground>
            <Text style={styles.name}>{carWithDesiredId.name}</Text>
            <Text style={styles.price}>{carWithDesiredId.startprice} $</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create(
    {
        item : {
            width: 160,
            marginHorizontal: 20,
            shadowColor: "#000",
            backgroundColor: 'white',
            borderRadius: 15,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.00,
            elevation: 1,
        },
        imgbgr: {
            width: 160,
            height: 100,
            justifyContent: 'flex-end',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
        },
        score : {
            backgroundColor: 'rgba(90, 90, 90, 0.5)',
            width: 35, 
            height: 60, 
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRadius: 15, 
            left: 15,
            top: 10
        },
        name: {
            fontSize: 15, 
            color: 'black', 
            fontWeight: '500', 
            marginTop: 12,
            fontFamily: 'Roboto-Regular'
        },
        price: {
            fontSize: 18, 
            color: 'black', 
            fontWeight: '500',
            fontFamily: 'Oswald_Regular',
        }
    }
)

export default SanPham;

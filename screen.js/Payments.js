import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Touchable, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import { xe_toyota, xe_hyundai, xe_kia, xe_ford, xe_mazda } from '../Xe/xe';
import { deleteCarById, getAllDataFromStorage } from '../DataPayments/DataPay';

const Payments = (props) => {
    const navi = useNavigation()
    
    const [objectList, setObjectList] = useState([]);
    const [totalPayment, setTotalPayment] = useState(0);

    useEffect(() => {
        // Lấy dữ liệu từ AsyncStorage khi màn hình được tạo
        getAllDataFromStorage().then((data) => setObjectList(data));
    }, [objectList]);

    useEffect(() => {
        // Calculate the total startprice when objectList changes
        const total = objectList.reduce((acc, object) => {
            if (object && typeof object === 'object' && 'startprice' in object) {
                return acc + object.startprice;
            }
            return acc;
        }, 0);
        setTotalPayment(total);
    }, [objectList]);
    

    const renderObjectDetails = (object) => {
        if (!object) {
            return null; // Add a check to handle null or undefined objects
        }
        return <View
            key={object.id}
        >
            <TouchableOpacity
                style={styles.objectItem}
                onPress={() => {}}
            >
                <Image
                    source={object.url}
                    resizeMode='cover'
                    style={{ width: 150, height: 100 }}
                />
                {/* <View style={{ flex: 1 }} /> */}
                <View style={{marginStart: 10 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500'}}>{object.name}</Text>
                    <View style={{ flex: 1}} />
                    <Text style={{ fontSize: 20, color: 'black', alignContent: 'flex-end', fontWeight: '500', marginEnd: 10, marginBottom: 10 }}>{object.startprice} $</Text>
                </View>
                <View style={{ flex: 1}} />
                <TouchableOpacity 
                    onPress={() => {deleteCarById(object.id)}}
                    style={{width: 50, height: 30, alignSelf: 'center', marginEnd: 10}}
                >
                    <Text style={{fontSize: 15, color: 'red', fontWeight: '500'}}>Delete</Text>
                </TouchableOpacity>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: 'rgb(180, 180, 180)' }}></View>
        </View>


    };

    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 50, backgroundColor: 'rgb(0, 240, 255)' }}>
            <TouchableOpacity
                onPress={() => { navi.goBack() }}
                style={{ position: 'absolute', left: 10 }}
            >
                <Icon name={"chevron-left"} size={25} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.title}>Carts</Text>
        </View>
        <ScrollView style={{ flex: 1 }} >
            {objectList.map((object) => renderObjectDetails(object))}
        </ScrollView>
        <View style={{ height: 1, backgroundColor: 'rgb(180, 180, 180)' }}></View>
        <View style={{ height: 70, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, backgroundColor: 'rgb(0, 240, 255)' }}>
            <View style={{ flexDirection: 'row' }}>
                <Icon />
                <Text style={styles.payt}>Total Payment : {totalPayment} $</Text>
            </View>
            <View style={{ flex: 1 }} />
            <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: 'rgb(255, 165, 0)', width: 130, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                <Icon name={"cart-shopping"} size={25} color={'rgb(90,90,90)'} />
                <Text style={[styles.payt, { marginStart: 10 }]}>Pay</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create(
    {
        title: {
            fontSize: 25,
            alignContent: 'center',
            color: 'black',
            fontWeight: '500'
        },
        payt: {
            fontSize: 20,
            color: 'black',
            fontWeight: '400'
        },
        objectItem: {
            borderRadius: 10,
            flexDirection: 'row',
            marginVertical: 5,

        },
    }
)

export default Payments;
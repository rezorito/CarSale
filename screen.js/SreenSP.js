import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TextInput, Touchable, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import { xe_toyota, xe_hyundai, xe_kia, xe_ford, xe_mazda } from '../Xe/xe';

const ScreenSP = ({route ,navigation}) => {
    // const listloaixe = route.params
    const name = route.params
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
    const navi = useNavigation()
    
    return <View style={{ backgroundColor: 'white' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 50 }}>
            <TouchableOpacity
                onPress={() => { navi.navigate('MainScreen') }}
                style={{ position: 'absolute', left: 10 }}
            >
                <Icon name={"chevron-left"} size={25} color={'rgb(90,90,90)'} />
            </TouchableOpacity>
            <Text style={styles.titlecar}>{name}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
                style={[styles.search, styles.shadow]}
                placeholder="Search by Cars..."
            />
            <Icon name={"magnifying-glass"} size={30} color={'rgb(180,180,180)'}style={{ position: 'absolute', right: 100, elevation: 6 }} />
            <TouchableOpacity style={[styles.sliders, styles.shadow]}>
                    <Icon name={"sliders"} size={30} color={'black'} />
            </TouchableOpacity>
        </View>
        <ScrollView>
            {loaixe.map(eachloaixe =>
                <TouchableOpacity 
                    key={eachloaixe.id} 
                    style={[styles.item, styles.shadow]}
                    onPress={() => {navi.navigate('CTXe', [name, eachloaixe.id])}}
                >
                    <Image
                        source={eachloaixe.url}
                        resizeMode='contain'
                        style={styles.img}
                    />
                    <View style={{flex: 1, marginStart: 10}}>
                        <Text style={styles.namesp}>{eachloaixe.name}</Text>
                        <Text style={styles.price}>{eachloaixe.startprice} $</Text>
                    </View>
                    <View style={styles.scoresp}>
                        <Text style={{fontSize: 20, color: 'black'}}>{eachloaixe.score}</Text>
                        <Icon name={"star"} size={20} color={'black'}/>
                    </View>
                </TouchableOpacity>
            )}
        </ScrollView>
    </View>
}

const styles = StyleSheet.create(
    {
        titlecar: {
            fontSize: 25, 
            alignContent: 'center', 
            color: 'black', 
            fontWeight: '500'
        },
        search: {
            fontSize: 20,
            height: 55,
            paddingStart: 30,
            marginVertical: 10,
            marginStart: 20,
            borderRadius: 10,
            backgroundColor: 'white',
            flex: 1,
        },
        sliders: {
            width: 55, 
            height: 55, 
            justifyContent: 'center', 
            alignItems: 'center',
            marginHorizontal: 15, 
            borderRadius: 10,
            backgroundColor: 'white'
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
        item: {
            height: 100,
            flexDirection: 'row',
            marginHorizontal: 15,
            marginVertical: 20,
            backgroundColor: 'white',
            borderRadius: 10
        },
        img: {
            width: 150,
            height: 100,
            marginStart: -10,
        },
        namesp: {
            fontSize: 25,
            color: 'black',
            marginTop: 10
        },
        price: {
            fontSize: 20,
            color: 'black',
            marginTop: 10
        },
        scoresp: {
            backgroundColor: 'red',
            alignItems: 'center',
            height: 60,
            width: 35,
            paddingTop: 5,
            borderBottomStartRadius: 15,
            borderBottomRightRadius: 15,
            backgroundColor: 'yellow',
            right: 10
        }
    }
)

export default ScreenSP;
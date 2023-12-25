import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TextInput, Touchable, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import { xe_ford, xe_hyundai, xe_kia, xe_mazda, xe_toyota } from '../Xe/xe';

const Search = (props) => {
    const navigation = useNavigation()

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const allCars = [...xe_toyota, ...xe_hyundai, ...xe_kia, ...xe_ford, ...xe_mazda];

    const handleSearch = (text) => {
        const filteredResults = allCars.filter((car) =>
            car.name.toLowerCase().includes(text.toLowerCase())
        );
        setSearchTerm(text);
        setSearchResults(filteredResults);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.item, styles.shadow]}
            onPress={() => { navigation.navigate('CTXe', [getloaixe(item.id), item.id]) }}
        >
            <Image
                source={item.url}
                resizeMode='contain'
                style={styles.img}
            />
            <View style={{ flex: 1, marginStart: 10 }}>
                <Text style={styles.namesp}>{item.name}</Text>
                <Text style={styles.price}>{item.startprice} $</Text>
            </View>
        </TouchableOpacity>
    );

    const getloaixe = (id) => {
        if (id >= 0 && id <= 11) {
            return 'Toyota';
        } else if (id >= 12 && id <= 17) {
            return 'Hyundai';
        } else if (id >= 18 && id <= 23) {
            return 'Kia';
        } else if (id >= 24 && id <= 29) {
            return 'Ford';
        } else {
            return 'Mazda';
        }
    }

    return <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('MainScreen') }}
                style={{ marginStart: 10 }}
            >
                <Icon name={"chevron-left"} color={'rgb(150,150,150)'} size={30} />
            </TouchableOpacity>
            <TextInput
                style={[styles.search, styles.shadow]}
                placeholder="Search by Cars..."
                onChangeText={handleSearch}
                value={searchTerm}
            />
            <Icon name={"magnifying-glass"} size={30} color={'rgb(180,180,180)'} style={{ position: 'absolute', right: 20, elevation: 6 }} />
        </View>
        <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    </View>
}

const styles = StyleSheet.create(
    {
        search: {
            fontSize: 20,
            height: 50,
            paddingStart: 20,
            marginVertical: 10,
            marginHorizontal: 10,
            borderRadius: 20,
            backgroundColor: 'white',
            flex: 1,
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
    }
)

export default Search;
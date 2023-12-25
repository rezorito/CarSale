import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CTXe, Login, MainScreen, Payments, ScreenSP, Search } from '../screen.js';
import React from 'react';
const Stack = createNativeStackNavigator()

const App = (props) => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='MainScreen' component={MainScreen}/>
            <Stack.Screen name='Search' component={Search}/>
            <Stack.Screen name='ScreenSP' component={ScreenSP}/>
            <Stack.Screen name='CTXe' component={CTXe}/>
            <Stack.Screen name='Payments' component={Payments}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default App;
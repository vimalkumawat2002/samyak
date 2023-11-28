import React from 'react'
import {View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screen/Home'
import Product from '../screen/Product'
const stack = createStackNavigator()
function StackNav(){
    return(
        <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='home' component={Home}/>
            <stack.Screen name='product' component={Product}/>
            </stack.Navigator>
    </NavigationContainer>
    )
}
export default StackNav
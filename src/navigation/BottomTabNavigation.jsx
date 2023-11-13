import { StyleSheet,  } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigationConfig } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Leaderboard from '../screen/Leaderboard';
import Research from '../screen/Research';
import Leagues from '../screen/Leagues';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
   <NavigationContainer>
    <tab.Navigator>
        <tab.Screen name='Home' component={Home} options={{
           headerShown:false ,
           tabBarIcon:({color,size}) => (
            <Ionicons name="home" color={color} size={size} />  
          )
        }}/>
        <tab.Screen name='Leagues' component={Leagues} options={{
           headerShown:false ,
           tabBarIcon:({color,size}) => (
            <FontAwesome5 name="trophy" color={color} size={size} />  
          )
        }}/>
        <tab.Screen name='Research' component={Research} options={{
           headerShown:false ,
           tabBarIcon:({color,size}) => (
            <Ionicons name="search" color={color} size={size} />  
          )
        }}/>
        <tab.Screen name='Leaderboard' component={Leaderboard} options={{
           headerShown:false ,
           tabBarIcon:({color,size}) => (
            <MaterialIcons name="leaderboard" color={color} size={size} />  
          )
        }}/>
        <tab.Screen name='Profile' component={Profile} options={{
           headerShown:false ,
           tabBarIcon:({color,size}) => (
            <FontAwesome name="user" color={color} size={size} />  
          )  
        }}/>
    </tab.Navigator>
   </NavigationContainer>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})
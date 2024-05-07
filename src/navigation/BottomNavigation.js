


import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyWallet from '../Distributor/MyWallet';
import Home from '../screen/Home';
import OEMLogin from '../screen/OEMLogin';
import AddAmount from '../screen/AddAmount';
import Icon from 'react-native-vector-icons/FontAwesome';
import bottom from '../screen/Bottom';

import Activation from '../screen/Activation';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#4e2d87' }, tabBarLabelStyle: { color: '#ffffff' } }} >

      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ }) => {
          return (
            <View>
              <Icon name="home" size={25} color={'#ffffff'} />

            </View>
          )
        }
      }} />







      <Tab.Screen name="MyWallet" component={MyWallet} options={{
        tabBarIcon: ({ }) => {
          return (
            <View>
              <Icon name="money" size={25} color={'#ffffff'} />
            </View>
          )
        }
      }} />


      <Tab.Screen name="Activation" component={Activation} options={{
        tabBarIcon: ({ }) => {
          return (
            <View>
              <Icon name="copy" size={25} color={'#ffffff'} />
            </View>
          )
        }
      }} />



      <Tab.Screen name="OEMLogin" component={OEMLogin} options={{
        tabBarIcon: ({ }) => {
          return (
            <View>
              <Icon name="star" size={25} color={'#ffffff'} />
            </View>
          )
        }
      }} />




      <Tab.Screen name="AddAmount" component={AddAmount} options={{
        tabBarIcon: ({ }) => {
          return (
            <View>
              <Icon name="money" size={25} color={'#ffffff'} />
            </View>
          )
        }
      }} />

      <Tab.Screen name="bottom" component={bottom} options={{
        tabBarIcon: ({ }) => {
          return (
            <View>
              <Icon name="money" size={25} color={'#ffffff'} />
            </View>
          )
        }
      }} />


    </Tab.Navigator>
  )
}

export default BottomNavigation
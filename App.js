import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'
import CustomHeader from './src/navigation/CustomHeader'


const App = () => {
  return (
    <NavigationContainer>

     <AppNavigation/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})


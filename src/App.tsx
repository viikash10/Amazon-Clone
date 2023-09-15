import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

import HomeScreen from './screens/HomeScreen'
import Router from './components/Router'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#9ee4d4'} barStyle={'dark-content'}/>
      <Router/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
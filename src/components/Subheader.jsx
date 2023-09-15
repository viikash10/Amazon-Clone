import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/dist/Feather';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';

const Subheader = () => {
  return (
    <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    colors={['#88dae0', '#98e1d6', '#9ee4d4']}
    style={styles.container}
    >
    <Feather name='map-pin' size={16} color="#2c4341"></Feather>
    <Text style={styles.deliver}>Deliver to Vikash - Ujjain 456010</Text>
    <SimpleLineIcons name='arrow-down' size={10} color='#000000'></SimpleLineIcons>
    </LinearGradient>
  )
}

export default Subheader

const styles = StyleSheet.create({
    container: {
          flexDirection: 'row',
          padding: 13,
          alignItems: 'center'
    },
    deliver: {
           fontSize: 13,
           color: '#2c4341',
           paddingHorizontal: 6
    }


})
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';;
import Header from '../components/Header';;
import Subheader from '../components/Subheader';;
import Category from '../components/Category';;
import Carousel from '../components/Carousel';;
import Services from '../components/Services';;
import Deals from '../components/Deals';
import Brands from '../components/Brands';
;

const HomeScreen = () => {
  return (
    <ScrollView
    ScrollViewshowsVerticalScrollIndicator={false}>
      <Header />
      <Subheader />
      <Category />
      <Carousel />
      <Services />
      <Deals />
      <Brands />
    </ScrollView>
  );;
};;

export default HomeScreen;;

const styles = StyleSheet.create({})

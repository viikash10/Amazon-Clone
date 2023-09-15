import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import img1 from '../assets/fresh.jpeg';
import {Categories} from '../data/Category';
import {useNavigation} from '@react-navigation/native';

const Category = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={Styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {Categories.map(item => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductScreen')}
          style={Styles.category}
          key={item.id}>
          <Image source={item.image} style={Styles.imgStyle} />
          <Text style={Styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Category;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  title: {
    color: '#2c4341',
    fontSize: 10,
  },
  category: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
});

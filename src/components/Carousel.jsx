import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useReducer, useRef, useState} from 'react';
import CarouselSlider from 'react-native-snap-carousel';
import {CarouselData} from '../data/CarouselData';
import {Pagination} from 'react-native-snap-carousel';

const sliderWidth = Dimensions.get('screen').width;

const Carousel = () => {
  const Carouselref = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.imgStyle} />
      </View>
    );
  };

  return (
    <View>
      <CarouselSlider
        ref={Carouselref}
        data={CarouselData}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={500}
        onSnapToItem={index => setActiveSlide(index)}
      />

      <Pagination
        dotsLength={CarouselData.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: 'absolute',
          bottom: 0,
          left: '15%',
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        dotColor="green"
        inactiveDotColor="#ffffff"
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  slide: {},
  imgStyle: {
    height: 250,
    width: '100%',
  },
});

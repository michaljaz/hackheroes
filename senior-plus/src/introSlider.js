import React from 'react';
import { StyleSheet } from 'react-native';

const stylesSlider = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 96, 
    },
    image: {
      width: 320,
      height: 320,
      marginTop: 32,
    },
    title: {
      fontSize: 22,
      color: 'white',
      textAlign: 'center',
    },
  });
  
  const slides = [
      {
        key: '1',
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        //image: require('s1.jpg'),
        imageStyle: stylesSlider.image,
        backgroundColor: '#59b2ab',
      },
      {
        key: '2',
        title: 'Title 2',
        text: 'Other cool stuff',
        //image: require('s1.jpg'),
        imageStyle: stylesSlider.image,
        backgroundColor: '#febe29',
      },
      {
        key: '3',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        //image: require('s1.jpg'),
        imageStyle: stylesSlider.image,
        backgroundColor: '#22bcb5',
      }
    ];


export default function slider() {
    showHomePage = false;


    const onSkip = () => {
      showHomePage = true;
    };
  
  
    // renderowanie karty do wstępu do apliakcji
    const renderItem = ({ item }) => {
      return (
        <View style={stylesSlider.slide}>
          <Text style={stylesSlider.title}>{item.title}</Text>
          
          <Text style={stylesSlider.text}>{item.text}</Text>
        </View>
      );
    };


  } 

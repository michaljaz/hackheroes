import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
export const stylesSlider = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    resizeMode: 'contain',
    aspectRatio: 1,
    marginTop: 32,
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});
// ----------------------------------------------
// Tutaj dodajemy ten wstęp do aplikacji
// na start logo, potem funckjonalności
// nazwa, zdjecie, krótki opis
// każda stronka inny kolor
// dodamy na sam koniec, jak będzie dzialało
// dodam to ~cuper
// -----------------------------------------------
export const slides = [
    {
      key: '1',
      title: 'Witaj w Senior+',
      text: 'Description.\nSay something cool',
      image: require('../assets/s1.jpg'),
      imageStyle: stylesSlider.image,
      backgroundColor: '#007EFE',
    },
    {
      key: '2',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../assets/s1.jpg'),
      imageStyle: stylesSlider.image,
      backgroundColor: '#febe29',
    },
    {
      key: '3',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('../assets/s1.jpg'),
      imageStyle: stylesSlider.image,
      backgroundColor: '#da4f4a',
    }
  ];

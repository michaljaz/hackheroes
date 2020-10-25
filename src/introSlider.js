import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


export const stylesSlider = StyleSheet.create({
  image: {
    height: '70%',
    resizeMode: 'contain',
    margin: 20,
    top: 20,
  },
  image1: {
  },
  title: {
    top: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  text: {
    margin: 20,
    fontSize: 18,
    color: '#eeeeee',
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.4,
    textAlign: 'justify',
  }
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
      title: 'Witaj w Senior+\n',
      image: require('../assets/seniorPlus.png'),
      imageStyle: stylesSlider.image1,
      backgroundColor: '#fd4084',
    },
    {
      key: '2',
      title: 'Nowoczesny design',
      text: 'Prosty, przejrzysty i nowoczesny design daje przyjemność z użytkowania na każdym kroku. Prostota i funkcjonalność w jednym',
      image: require('../assets/S11.jpg'),
      imageStyle: stylesSlider.image,
      backgroundColor: '#2A2D40',
    },
    {
      key: '3',
      title: 'Dodawaj leki',
      text: 'Możesz dodać dowolny lek i godzinę, o której otrzymasz przypomnienie. Mniej rzeczy na Twojej głowie',
      image: require('../assets/s2.jpg'),
      imageStyle: stylesSlider.image,
      backgroundColor: '#007EFE',
    },
    {
      key: '4',
      title: 'Wszystko pod kontrolą',
      text: 'Wszystkie informacje zebrane w jednym miejscu i pokazane w przejrzysty sposób',
      image: require('../assets/s3.jpg'),
      imageStyle: stylesSlider.image,
      backgroundColor: '#02732A',
    },
    {
      key: '5',
      title: 'Bliscy bliżej',
      text: 'Dzięki łączeniu kont Ty i twoi bliscy będziecie zawsze w kontakcie, bliżej niż kiedykolwiek.',
      image: require('../assets/s4.jpg'),
      imageStyle: stylesSlider.image,
      backgroundColor: '#E52B50',
    },
  ];

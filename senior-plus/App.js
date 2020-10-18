import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreView
} from 'react-native';
import { Ionicons  } from '@expo/vector-icons'; // ikonkki
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // dolne menu nawigacja
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; // by nie ucinało

//import {slides,style} from './src/introSlider';
import AppIntroSlider from 'react-native-app-intro-slider'; // sliderek do tutorialu

import HomeScreen from './src/HomeScreen';
import MedicineScreen from './src/MedicineScreen';
import SettingsScreen from './src/SettingsScreen';
import ContactScreen from './src/ContactScreen';


const Tab = createBottomTabNavigator();

// zwraca nam dolną nawigację apliacji
function bottomNav() {
  return(<SafeAreaProvider ><NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Ionicons name={'ios-home'} size={size} color={color}/>
            );
          }else if (route.name === 'Kontakt') {
            return (
              <Ionicons name={'ios-text'} size={size} color={color}/>
            );
          } else if (route.name === 'Ustawienia') {
            return (
              <Ionicons name={'ios-settings'} size={size} color={color} />
            );
          } else if (route.name === 'Leki') {
            return (
              <Ionicons name={'ios-medkit'} size={size} color={color} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Leki" component={MedicineScreen} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 0 }} />
      <Tab.Screen name="Kontakt" component={ContactScreen} />
      <Tab.Screen name="Ustawienia" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer></SafeAreaProvider>
  );
}

export default function App() {
    const [showRealApp , setShowRealApp] = useState(false);


    const onSmth = () => {
      setShowRealApp(true);
    };

    // renderowanie karty do wstępu do apliakcji
    const renderItem = ({ item }) => {
      return (
        <SafeAreaProvider><View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 96,
          backgroundColor: item.backgroundColor,
          }}>
          <Text style={stylesSlider.title}>{item.title}</Text>
          <Image source={item.image} style={stylesSlider.image} />
          <Text style={stylesSlider.text}>{item.text}</Text>
        </View></SafeAreaProvider>
      );
    };


    return (
      <>
      {showRealApp ? (
        bottomNav()
      ) : (
        <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onSmth}
        activeDotStyle={{
          backgroundColor:"#21465b",
          width:30
        }}
      />
      )}
      </>
    );
}


const stylesSlider = StyleSheet.create({
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

const slides = [
    {
      key: '1',
      title: 'Witaj w Senior+',
      text: 'Description.\nSay something cool',
      image: require('./assets/s1.jpg'),
      imageStyle: stylesSlider.image,
      backgroundColor: '#007EFE',
    },
    {
      key: '2',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('./assets/s1.jpg'),
      imageStyle: stylesSlider.image,
      backgroundColor: '#febe29',
    },
    {
      key: '3',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('./assets/s1.jpg'),
      imageStyle: stylesSlider.image,
      backgroundColor: '#da4f4a',
    }
  ];

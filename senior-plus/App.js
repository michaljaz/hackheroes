import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreView,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // dolne menu nawigacja
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; // by nie ucinało
import AppIntroSlider from 'react-native-app-intro-slider'; // sliderek do tutorialu
import {slides,stylesSlider} from './src/introSlider';

import Panel from './src/Panel';

export default function App() {
    const [showRealApp , setShowRealApp] = useState(false);
    const onSmth = ({navigation}) => {
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

    if(showRealApp){
      return (
        Panel()
      )
    }else{
      return (
        <AppIntroSlider
          renderItem={renderItem}
          data={slides}
          onDone={onSmth}
          activeDotStyle={{
            backgroundColor:"#21465b",
            width:30
          }}
        />
      )
    }
}

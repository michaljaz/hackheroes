import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreView,
  Button
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // dolne menu nawigacja
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; // by nie ucinało
import AppIntroSlider from 'react-native-app-intro-slider'; // sliderek do tutorialu
import {slides,stylesSlider} from './src/introSlider';
import { Ionicons  } from '@expo/vector-icons'; // ikonkki

import LoginScreen from './src/LoginScreen'
import RegisterScreen from './src/RegisterScreen';
import DataScreen from './src/DataScreen';

const Stack = createStackNavigator();

import Panel from './src/Panel';
import PeopleScreen from './src/PeopleScreen';

export default function App() {
    const [showRealApp , setShowRealApp] = useState(false);

    // jak już skończysz
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
    // przycisk do przesunięcia dale
    const renderNextButton = () => {
      return (
        <View style={stylesSlider.buttonNext}>
          <Ionicons name={'ios-arrow-dropright-circle'} size={40} color="black" />
        </View>
      );
    };
    // przycisk do zatwierdzenie
    const renderDoneButton = () => {
      return (
        <View style={stylesSlider.buttonNext}>
          <Ionicons name={'ios-checkmark-circle'} size={40} color='black'/>
        </View>
      );
    };


    if(showRealApp){
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Logowanie" component={LoginScreen} />
            <Stack.Screen name="Rejestracja" component={RegisterScreen} />
            <Stack.Screen name="Panel" component={Panel} />
            <Stack.Screen name="Data" component={DataScreen} />
            <Stack.Screen name="Znajomi" component={PeopleScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }else{
      return (
        <AppIntroSlider
          renderItem={renderItem}
          data={slides}
          onDone={onSmth}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          activeDotStyle={{
            backgroundColor:"#21465b",
            width:30
          }}
        />
      )
    }
}

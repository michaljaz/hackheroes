import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreView,
  Button
} from 'react-native';

import { Ionicons  } from '@expo/vector-icons'; // ikonkki
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // dolne menu nawigacja
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; // by nie ucinało
import AppIntroSlider from 'react-native-app-intro-slider'; // sliderek do tutorialu
//import {slides,style} from './src/introSlider';

//Zakładki

import MedicineScreen from './MedicineScreen';
import SettingsScreen from './SettingsScreen';
import ContactScreen from './ContactScreen';
import PeopleScreen from './PeopleScreen';
import AddMedicineScreen from './AddMedicine';

const Tab = createBottomTabNavigator();


export default function Panel(){
  return(
    <Tab.Navigator
      initialRouteName="Dom"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Dom') {
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
          } else if (route.name === 'Rodzina') {
            return (
              <Ionicons name={'ios-contacts'} size={size} color={color} />
            );
          } else if (route.name === 'Nowy') {
            return (
              <Ionicons name={'ios-contacts'} size={size} color={color} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#DD0000',
        inactiveTintColor: '#333333',
      }}
    >
      <Tab.Screen name="Nowy" component={AddMedicineScreen} options={{ tabBarBadge: null }} />
      <Tab.Screen name="Leki" component={MedicineScreen} options={{ tabBarBadge: null }} />
      <Tab.Screen name="Rodzina" component={PeopleScreen} options={{ tabBarBadge: null }} />
      <Tab.Screen name="Kontakt" component={ContactScreen} options={{ tabBarBadge: null }} />
      <Tab.Screen name="Ustawienia" component={SettingsScreen} options={{ tabBarBadge: null }} />
    </Tab.Navigator>
  );
}

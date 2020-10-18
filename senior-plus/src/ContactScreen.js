import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';
const Stack = createStackNavigator();

export default function MedicineScreen() {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={content}
      options={{ title: 'Kontakt' }}
    />
  </Stack.Navigator>
  );
}


// zawartosc karty
function content() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
        // Background Linear Gradient
        colors={['red', 'green']}
        start={{x:0,y:0}}
        end={{x:1,y:0}}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}
      />
        <Text>Działa</Text>
    </View>
  );
}

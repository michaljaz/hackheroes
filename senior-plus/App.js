import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons  } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Przykładowy bottom-tab</Text>
    </View>
  );
}

function ContactScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Kkontakt!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MedicineScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={focused ? 'ios-home' : 'ios-home'}
                  size={size}
                  color={color}
                />
              );
            }else if (route.name === 'Kontakt') {
              return (
                <Ionicons
                  name={focused ? 'ios-text' : 'ios-text'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Ustawienia') {
              return (
                <Ionicons
                  name={focused ? 'ios-settings' : 'ios-settings'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Leki') {
              return (
                <Ionicons
                  name={focused ? 'ios-medkit' : 'ios-medkit'}
                  size={size}
                  color={color}
                />
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
    </NavigationContainer>
  );
}


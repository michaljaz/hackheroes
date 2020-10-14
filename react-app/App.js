import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Statystyki i wykresy</Text>
      <Button
        title="Pierwsza pomoc"
        onPress={() => navigation.navigate('PIERWSZA POMOC')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="ABC pierwszej pomocy" onPress={() => {}} />
      <Button title="Wypadek drogowy" onPress={() => {}} />
      <Button title="Zadławienie" onPress={() => {}} />
      <Button title="Drgawki" onPress={() => {}} />
      <Button title="Udar mózgu" onPress={() => {}} />
      <Button title="Utonięcie" onPress={() => {}} />
      <Button title="Zatrucie czadem" onPress={() => {}} />
      <Button title="Porażenie prądem" onPress={() => {}} />
      <Button title="Porażenie piorunem" onPress={() => {}} />
      <Button title="Hipotermia" onPress={() => {}} />
      <Button title="Udar cieplny" onPress={() => {}} />
      <Button title="Ukąszenie przez owady" onPress={() => {}} />
      <Button title="Cukrzyca" onPress={() => {}} />
      <Button title="Zatrucie alkoholem" onPress={() => {}} />
      <Button title="ABC pierwszej pomocy" onPress={() => {}} />
      <Button title="Złamania i inne urazy" onPress={() => {}} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="ZDROWIE" component={HomeScreen} />
        <Stack.Screen name="PIERWSZA POMOC" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

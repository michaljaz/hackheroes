import React from 'react';
import {View,Text,StyleSheet,FlatList,SafeAreaView, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { COLORS } from '../assets/colors';

const Stack = createStackNavigator();

export default function MedicineScreen() {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={content}
      options={{ title: 'Leki' }}
    />
  </Stack.Navigator>
  );
}




function editMed(data) {
  //panel do edycji leku i informacji o nim
  Alert.alert("work")
}


function Med(data) {
  return(
  <TouchableOpacity onPress={() => editMed(data)}>
  <View style={styles.medContainer} backgroundColor={ data.color}>
    <Text style={styles.title}> {data.name} </Text>
    <Text style={styles.when}> {data.when} </Text>
    <Text style={styles.koment}> {data.koment} </Text>
  </View></TouchableOpacity>
  );
}




// zawartosc karty
function content() {

  // zawiera zapis wszytskich dostępnych leków
  /*
    leki posortowane po czasie
    można zmienić sortowanie
    
    id - unikalne
    nazwa
    dawka
    kiedy(godzina)
    kolor(plakietki) 8 kolorów
    komentarz
  */
  const allMeds = [
    {key: '1', name: 'Ibuprom', when: '8.00', color:COLORS.fresh_water, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '2', name: 'Ibuprom cyjanowodór mmm', when: '8.00', color:COLORS.sand_yellow, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '3', name: 'Ibuprom', when: '8.00', color:COLORS.lavender, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '4', name: 'Ibuprom', when: '8.00', color:COLORS.pale_green, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '5', name: 'Ibuprom', when: '8.00', color:COLORS.peach, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '6', name: 'Ibuprom', when: '8.00', color:COLORS.hot_pink, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '7', name: 'Ibuprom', when: '8.00', color:COLORS.aquamarine, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '8', name: 'Ibuprom', when: '8.00', color:COLORS.yellow_nice, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '9', name: 'Ibuprom', when: '8.00', color:COLORS.amaranth, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '20', name: 'Ibuprom', when: '8.00', color:COLORS.amaranth, koment: 'lorem ipsum dolor sit amet sret hamlet'},
  ];


  return (
    <View style={styles.container} >
      <FlatList
        style={styles.container}
        data={ allMeds }
        renderItem={({item}) => Med( item ) }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    alignContent: "center",
  },
 medContainer:{
   left: '5%',
  width: '90%',
  backgroundColor:"#ffffff",
  borderRadius:25,
  borderColor: '#eeeeee',
  borderWidth: 1,
  marginTop: 20,
  marginBottom: 10,
  minHeight:55,
  justifyContent:"center",
  padding:20,

  shadowColor: "#000000",
  shadowOffset: {width: 0,height: 0},
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 10,
},
inputText:{
  height:50,
  fontWeight: 'bold',
  fontSize: 20,
  color: "#444444"
},
});


import React , {useState} from 'react';
import {View,Text,StyleSheet,FlatList,TextInput, Alert, AsyncStorage,Modal} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity, TouchableHighlight  } from 'react-native-gesture-handler';
import {COLORS} from '../assets/colors';

const Stack = createStackNavigator();

export default function MedicineScreen() {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={content}
      options={{ title: 'Szybkie akcje' }}
    />
  </Stack.Navigator>
  );
}


// zawartosc karty
const message = [
  {key: '1', name: 'Wyślij lokalizację' , kolor: COLORS.hot_pink},
  {key: '2', name: 'Wyślij lokalizację' , kolor: COLORS.hot_pink},
  {key: '3', name: 'Wyślij lokalizację' , kolor: COLORS.hot_pink},
  {key: '4', name: 'Wyślij lokalizację' , kolor: COLORS.hot_pink},
  {key: '6', name: 'Wyślij lokalizację' , kolor: COLORS.hot_pink},
  {key: '5', name: 'Wyślij lokalizację' , kolor: COLORS.hot_pink},
];



// karta leku - render
const contact = function(data) {
  return(
    <TouchableOpacity >
    <View style={styles.medContainer} backgroundColor={data.kolor} onPress >
      <Text style={styles.title}> {data.name}</Text>
    </View></TouchableOpacity>
  );
}



// zawartosc ekranu
function content() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ flexDirection: 'column', width: '100%',}}
        numColumns={2}
        style={styles.container}
        data={ message }
        renderItem={({item}) => contact( item ) }
        
      />
    </View>
  );
}




const styles = StyleSheet.create({

  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    alignContent: "center",
  },
 medContainer:{
  width: '70%',
  backgroundColor:"#ffffff",
  borderRadius:25,
  marginTop: 20,
  marginBottom: 10,
  minHeight: 55,
  justifyContent:"center",
  padding:20,

  shadowColor: "#000000",
  shadowOffset: {width: 0,height: 0},
  shadowOpacity: 0.3,
  shadowRadius: 8,
  elevation: 10,
},
inputText:{
  height:50,
  fontWeight: 'bold',
  fontSize: 20,
  color: "#444444"
},




Switch:{
  borderRadius:25,
  marginBottom: 30,
  justifyContent:"center",
  width: '80%',

  shadowColor: "#222222",
  shadowOffset: {width: 0,height: 0},
  shadowOpacity: 0.7,
  shadowRadius: 5,
  elevation: 10,
},
inputView:{
  width:"80%",
  backgroundColor:"#ffffff",
  borderRadius:25,
  marginBottom: 30,
  height:55,
  justifyContent:"center",
  padding:5,
  
  shadowColor: "#222222",
  shadowOffset: {width: 0,height: 0},
  shadowOpacity: 0.7,
  shadowRadius: 5,
  elevation: 10,
},
inputText:{
  height:50,
  fontWeight: 'bold',
  fontSize: 20,
  color: "#444444"
},




centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  
  shadowColor: "#000000",
  shadowOffset: {width: 0,height: 0},
  shadowOpacity: 0.3,
  shadowRadius: 8,
  elevation: 10,
},
openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
},




});

import React , {useState} from 'react';
import {View,Text,StyleSheet,FlatList,TextInput, Alert, AsyncStorage,Modal} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity, TouchableHighlight  } from 'react-native-gesture-handler';
import SwitchSelector from 'react-native-switch-selector';
import { COLORS } from '../assets/colors';

import { GetUserData, SetUserData} from './ServerConnector';


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



const Med = (data) => {
  const modalVisible = false;

  modalOn = () => { modalVisible=true};
  modalOff = () => {modalVisible=false}

  return(<TouchableOpacity onPress={()=>{modalOn}}>
  <View style={styles.medContainer} >
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{console.log("cloe")}}
      > 
        <Text> Czy na pewno chcesz usunac lek?</Text>
      </Modal>
    <Text style={styles.title}> {data.name} </Text>
    <Text style={styles.when}> {data.when} </Text>
    <Text style={styles.koment}> {data.koment} </Text>
  </View></TouchableOpacity>
  );
};




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
    {key: '1', name: 'Ibuprom', when: '8.00', color:COLORS.vivid_blue, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '2', name: 'Ibuprom cyjanowodór mmm', when: '8.00', color:COLORS.yellow_nice, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '3', name: 'Ibuprom', when: '8.00', color:COLORS.vivid_green, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '4', name: 'Ibuprom', when: '8.00', color:COLORS.pale_green, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '5', name: 'Ibuprom', when: '8.00', color:COLORS.vivid_orange, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '6', name: 'Ibuprom', when: '8.00', color:COLORS.hot_pink, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '7', name: 'Ibuprom', when: '8.00', color:COLORS.aquamarine, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '8', name: 'Ibuprom', when: '8.00', color:COLORS.vivid_pink, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '9', name: 'Ibuprom', when: '8.00', color:COLORS.vivid_violet, koment: 'lorem ipsum dolor sit amet sret hamlet'},
    {key: '20', name: 'Ibuprom', when: '8.00', color:COLORS.amaranth, koment: 'lorem ipsum dolor sit amet sret hamlet'},
  ];


  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={()=>console.log("test")} style={styles.medContainer}>
        <Text style={styles.inputText}>Proba 1234</Text>
      </TouchableOpacity>
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
  marginTop: 20,
  marginBottom: 10,
  minHeight:55,
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


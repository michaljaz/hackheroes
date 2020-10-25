import React , {useState} from 'react';
import {View,Text,StyleSheet,FlatList,TextInput, Alert, AsyncStorage,Modal} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity, TouchableHighlight  } from 'react-native-gesture-handler';
import SwitchSelector from 'react-native-switch-selector';
import { COLORS } from '../assets/colors';
import { Ionicons  } from '@expo/vector-icons'; // ikonkki

import { GetUserData, SetUserData} from './ServerConnector';
import { add } from 'react-native-reanimated';
import { Button } from 'react-native-paper';


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


const allMeds = [
  {key: '1', name: 'Witamina C', when: '8.00', color:COLORS.vivid_blue, koment: '2 tabletki, popić wodą'},
  {key: '2', name: 'Acerola', when: '8.15', color:COLORS.amaranth, koment: 'popić wodą, ważne'},
  {key: '3', name: 'Artresan 1', when: '10.00', color:COLORS.vivid_green, koment: 'Kolana, powoli smarować'},
  {key: '4', name: 'Apetizer', when: '14.00', color:COLORS.pale_green, koment: 'Przed obiadem'},
  {key: '5', name: 'Nurofen 2', when: '17.00', color:COLORS.vivid_orange, koment: 'lorem ipsum dolor sit amet sret hamlet'},
  {key: '6', name: 'Witamina C,D', when: '20.00', color:COLORS.material_blue, koment: 'Przed snem, popić wodą'},
];



// karta leku - render
const Med = function(data) {
  return(
    <TouchableOpacity onPress={ ()=>{
      Alert.alert( data.name,'Czy na pewno chcesz usunąć ten lek? Jest to nieodwracalne! ',
        [
          {text: 'anuluj'},
          {text: 'usuń',onPress: () => console.log('Cancel Pressed'), style: 'destructive'},
        ],
        { cancelable: false }
      )
      }} >
    <View style={styles.medContainer} backgroundColor={data.color} onPress >
        
        
      <Text style={styles.title}> {data.name}</Text>
      <Text style={{ margin: 10, textAlign: 'center',fontSize: 22}}> Przyjmowany o {data.when} </Text>
      <Text style={{fontWeight: 'normal',top: 5,}}> {data.koment} </Text>
    </View></TouchableOpacity>
  );
}


// funkcja do usunięcia leku o danym id z konta.
function delMed(data) {
  return( <View></View>);
}


// zawartosc ekranu
function content() {
  return (
    <View style={styles.container}>
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
    fontSize: 28,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
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


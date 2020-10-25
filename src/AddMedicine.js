import React, { useState,Alert } from 'react';
import {StyleSheet,Text,TextInput,TouchableOpacity,View,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import SwitchSelector from 'react-native-switch-selector';
import { AsyncStorage } from 'react-native';

import {COLORS} from '../assets/colors';
import TimePicker from 'react-native-simple-time-picker';
import { Button } from 'react-native-paper';

const Stack = createStackNavigator();


var lek={
  key: "",
  name: "",
  when: "",
  color: "",
  koment: "",
}

function sendData(){
  // tymczasowo zmiana ekranu, bo coś nie działa
  console.log("to be added...")
  alert("Lek dodano pomyślnie!")
  // wysyłasz tak
  // nazwe, kiedy, koment
  // random generate kolor & key
}
export default function AddMedicineScreen(nav) {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={content}
      options={{ title: 'Dodaj Lek' }}
    />
  </Stack.Navigator>
  );
}

function content({navigation}){
  const [hour,setHour] = useState(7);
  const [minute,setMinute] = useState(45);
 
  const kolors = Object.values(COLORS);

  const onChange = (hours,minutes) => {
    setHour(hours);
    setMinute(minutes);
    lek.when = hours+"."+minutes;
    console.log(lek.when);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Nazwa"
          placeholderTextColor="#444444"
          onChangeText={text => {lek.name=text}}/>
      </View>

      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Opis"
          placeholderTextColor="#444444"
          onChangeText={text => {lek.koment=text}}
          />
      </View>
      <Text style={styles.whenLek}>Przypomnienie o godzinie  {hour}:{minute}</Text>
      <TimePicker
          selectedHours={hour}
          selectedMinutes={minute}
          onChange={(hours, minutes) => onChange(hours,minutes)}
        />

      <TouchableOpacity style={styles.loginBtnD} onPress={()=>{sendData({navigation})}}>
        <Text style={styles.loginTextD} >Dodaj</Text>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',

    },
    inputView:{
      width:"80%",
      backgroundColor:"#ffffff",
      borderBottomColor: '#444444',
      borderBottomWidth: 5,
      marginBottom: 30,
      height:55,
      justifyContent:"center",
      padding:10,

      
      
    },
    inputText:{
      height:50,
      fontWeight: 'bold',
      fontSize: 20,
      color: "#000000"
    },
    
    loginBtn:{
      width:"60%",
      backgroundColor:"#399fff",
      borderRadius:25,
      height:60,
      alignItems:"center",
      justifyContent:"center",
      marginBottom: 20,
    },
    loginBtnD:{
      width:"60%",
      backgroundColor:"#ff5959",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginBottom: '14%',
    },
    loginTextD:{
      fontWeight: 'bold',
      color:"#444444",
      fontSize: 24,
    },
    whenLek: {
      fontSize: 20,
    }
  });

import React, { useState,Alert } from 'react';
import {StyleSheet,Text,TextInput,TouchableOpacity,View,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import SwitchSelector from 'react-native-switch-selector';
import { AsyncStorage } from 'react-native';

const Stack = createStackNavigator();

export default function AddMedicineScreen() {
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
  return (
    <View style={styles.container}>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Imię..."
          placeholderTextColor="#444444"
          onChangeText={text => {state.name=text}}/>
      </View>

      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Nazwisko..."
          placeholderTextColor="#444444"
          onChangeText={text => {state.surname=text}}
          />
      </View>

      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Wiek..."
          placeholderTextColor="#444444"
          onChangeText={text => {state.age=text}}
          />
      </View>
      <SwitchSelector
        style={styles.Switch}
        initial={0}
        borderColor={'#eeeeee'}
        selectedColor={'#ffffff'}
        buttonColor={'#2A2D40'}
        animationDuration={200}
        onPress={value => {state.type=value}}
        options={[
          { label: "Senior", value: "senior" },
          { label: "Junior", value: "junior" }
        ]}
      />
      <TouchableOpacity style={styles.loginBtnD} onPress={()=>{sendData({navigation})}}>
        <Text style={styles.loginTextD}>Dalej</Text>
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
    logo:{
        flex: 1,
        top: '5%',
        color: '#444444',
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
      padding:20,
      
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
    forgot:{
      color:"#444444",
      fontSize: 15,
      marginTop: -15,
      marginBottom: '8%',
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
    loginText:{
      fontWeight: 'bold',
      color:"#444444",
      fontSize: 24,
    },
    loginTextD:{
      fontWeight: 'bold',
      color:"#444444",
      fontSize: 18,
    },
    block:{
        fontSize:50,
    }
  });

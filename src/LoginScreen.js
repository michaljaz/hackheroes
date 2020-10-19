import React, { useState } from 'react';
import {StyleSheet,Text,TextInput,TouchableOpacity,View,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

const Stack = createStackNavigator();

var state={
  password:"",
  email:""
}
function zaloguj(navigation){
  fetch(`http://192.168.1.101:3000/login/?password=${state.password}&email=${state.email}`)
      .then((response) => response.json())
      .then((json) => {
        if(json.resp=="ok"){
          alert("Zalogowano")
          navigation.replace("Panel")
        }else{
          alert("Złe hasło")
        }
      })
}


export default function LoginScreen({navigation}){
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
            source={require('../assets/seniorPlus.png')}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#444444"
          onChangeText={text => {state.email=text}}/>
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Hasło..."
          placeholderTextColor="#444444"
          onChangeText={text => {
            state.password=text;
          }}/>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Zapomniałeś hasła?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={()=>{zaloguj(navigation)}}>
        <Text style={styles.loginText}>Zaloguj</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtnD} onPress={()=>{navigation.replace("Rejestracja")}}>
        <Text style={styles.loginTextD}>Nie mam jeszcze konta</Text>
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
    inputView:{
      width:"80%",
      backgroundColor:"#ffffff",
      borderRadius:25,
      borderColor: '#eeeeee',
      borderWidth: 1,
      marginBottom: 30,
      height:60,
      justifyContent:"center",
      padding:20,

      shadowColor: "#000000",
      shadowOffset: {width: 0,height: 0},
      shadowOpacity: 0.3,
      shadowRadius: 7,
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

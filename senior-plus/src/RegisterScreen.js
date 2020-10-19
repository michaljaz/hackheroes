import React, { useState } from 'react';
import {StyleSheet,Text,TextInput,TouchableOpacity,View,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

var state={
  password:"",
  email:""
}
function rejestracja(){
  fetch(`http://192.168.1.101:3000/register/?password=${state.password}&email=${state.email}`)
      .then((response) => response.json())
      .then((json) => {
        if(json.resp=="ok"){
          alert("Zarejestrowano")
        }else{
          alert("Użytkownik już istnieje")
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
          placeholderTextColor="#003f5c"
          onChangeText={text => {state.email=text}}/>
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Hasło..."
          placeholderTextColor="#003f5c"
          onChangeText={text => {
            state.password=text;
          }}/>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={rejestracja}>
        <Text style={styles.loginText}>Dalej</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.replace("Logowanie")}}>
        <Text style={styles.loginText}>Zaloguj się{`\n\n\n`}</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4aafcd',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
        flex: 1
    },
    inputView:{
      width:"80%",
      backgroundColor:"#007EFE",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#DD0000",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    },
    block:{
        fontSize:50
    }
  });

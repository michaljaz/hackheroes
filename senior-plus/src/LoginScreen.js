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
      <LinearGradient
      colors={['#ff8ef7', '#ff7171']}
      start={{x:0,y:0}}
      end={{x:1,y:1}}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      }}
      />
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
      <TouchableOpacity>
        <Text style={styles.forgot}>Zapomniałeś hasła?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={()=>{zaloguj(navigation)}}>
        <Text style={styles.loginText}>Zaloguj</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.replace("Rejestracja")}}>
        <Text style={styles.loginText}>Nie mam jeszcze konta{`\n\n\n`}</Text>
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
        top: '5%'
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
      fontWeight: 'bold',
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
      fontWeight: 'bold',
      color:"white"
    },
    block:{
        fontSize:50
    }
  });

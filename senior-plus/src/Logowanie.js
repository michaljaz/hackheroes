import React, { useState } from 'react';
import {StyleSheet,Text,TextInput,TouchableOpacity,View,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

var state={
  password:"",
  email:""
}
export default function Logowanie({navigation}){
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
      <TouchableOpacity>
        <Text style={styles.forgot}>Zapomniałeś hasła?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={()=>{navigation.replace("Panel")}}>
        <Text style={styles.loginText}>Zaloguj się</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Zarejestruj się{`\n\n\n`}</Text>
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
        flex: 1,
        width:"70%",
        height:"30%"
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

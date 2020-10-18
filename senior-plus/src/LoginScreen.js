import React, { useState } from 'react';
import {StyleSheet,Text,TextInput,TouchableOpacity,View,Image} from 'react-native';

class LoginScreen extends React.Component{
    state={
        email:"",
        password:""
    }
    render(){
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
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Password..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({password:text})}/>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
        <Text style={styles.loginText}>Signup{`\n\n\n`}</Text>
            </TouchableOpacity>
    
          </View>
        )
    }
    
}
export default LoginScreen;
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
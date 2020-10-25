import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import {View, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function PeopleScreen() {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={content}
      options={{ title: 'Znajomi' }}
    />
  </Stack.Navigator>
  );
}




function inUser(data) {
  //opcje danego urzytkownika
  Alert.alert("work")
}


function GenerateUser(data) {
    if(data.type =="senior"){
      return(
        <TouchableOpacity onPress={() => inUser(data)}>
        <View style={styles.personContainer} backgroundColor='#85dc0b'>
          <Text style={styles.name}> {data.name}{" "}{data.surname} </Text>
          <Text style={styles.age}> {data.age} </Text>
          <Text style={styles.type}> {data.type} </Text>
        </View></TouchableOpacity>
        );
    } else{
      return(
        <TouchableOpacity onPress={() => inUser(data)}>
        <View style={styles.personContainer} backgroundColor='#fdee73'>
          <Text style={styles.name}> {data.name}{" "}{data.surname} </Text>
          <Text style={styles.age}> {data.age} </Text>
          <Text style={styles.type}> {data.type} </Text>
        </View></TouchableOpacity>
        );
    }
}

function content() {

  // ramki o znajomych
  const allPeople = [
    { name:"IM_01", surname:"NAZ_01", age:"69", type:"senior", id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba", },
    { name:"IM_02", surname:"NAZ_02", age:"20", type:"junior", id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63", },
    { name:"IM_03", surname:"NAZ_03", age:"72", type:"senior", id: "58694a0f-3da1-471f-bd96-145571e26d72", },
    { name:"IM_04", surname:"NAZ_04", age:"80", type:"senior", id: "58694a0f-3da1-471f-bd96-145571e34d72", },
    { name:"IM_05", surname:"NAZ_05", age:"93", type:"senior", id: "58694a0f-3da1-471f-bd96-145571e39d72", },
    { name:"IM_06", surname:"NAZ_06", age:"30", type:"junior", id: "58694a0f-3da1-471f-bd96-145571e29d72", },
    { name:"IM_07", surname:"NAZ_07", age:"25", type:"junior", id: "58694a0f-3da1-471f-bd96-145571e69d72", },
    { name:"IM_08", surname:"NAZ_08", age:"92", type:"senior", id: "58694a0f-3da1-471f-bd96-145571e27d72", },
    { name:"IM_09", surname:"NAZ_09", age:"18", type:"junior", id: "58694a0f-3da1-471f-bd96-145574e29d72", },
  ];


  return (
    <View style={styles.container} >
      <FlatList
        style={styles.container}
        data={ allPeople }
        renderItem={({item}) => GenerateUser( item ) }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    alignContent: "center",
  },
 personContainer:{
   left: '5%',
  width: '90%',
  backgroundColor:"#ffffff",
  borderRadius:25,
  borderColor: '#eeeeee',
  borderWidth: 1,
  marginTop: 20,
  marginBottom: 10,
  minHeight:55,
  justifyContent:"center",
  padding:20,

  shadowColor: "#000000",
  shadowOffset: {width: 0,height: 0},
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 10,
},
});
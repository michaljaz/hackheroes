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
  Alert.alert( data.name+' '+data.surname,'Czy na pewno chcesz usunąć tą osobę?\n Jest to nieodwracalne! ',
        [
          {text: 'anuluj'},
          {text: 'usuń',onPress: () => console.log('Cancel Pressed'), style: 'destructive'},
        ],
        { cancelable: false }
      )
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
    { name:"Jan", surname:"Kowalski", age:"70", type:"senior", id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba", },
    { name:"Filip", surname:"Kowalski", age:"45", type:"junior", id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63", },
    { name:"Anna", surname:"Kowalska", age:"39", type:"junior", id: "58694a0f-3da1-471f-bd96-145571e26552", },
    { name:"Karol", surname:"Kowalski", age:"23", type:"junior", id: "58694a0f-3da1-471f-bd96-145571h26d72", },
    { name:"Michalina", surname:"Szczerba", age:"21", type:"junior", id: "58694a0f-3da1-471f-bd96-945571e26d72", },
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
type: {
  fontSize: 20,
  top: 5,
}
});
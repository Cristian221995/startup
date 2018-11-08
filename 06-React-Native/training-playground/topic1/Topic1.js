import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class Topic1 extends React.Component {

    render(){
        return(
            <View style={styles.container}>
            <ScrollView style={{height:'100%',width:'100%', backgroundColor:'black'}}>
            <Text style={{color: 'green'}}>My React Native App!
                <Text style={styles.text1}>
                    Something..
                </Text>
                <Text style={styles.text2}>
                    Something Something..
                    <Text style={styles.text3}>
                        Something x3...
                    </Text>
                </Text>

            </Text>

                <View style={{width:'50%',height:150,backgroundColor:'red'}}/>
                <View style={{width:'60%',height:200,backgroundColor:'blue'}}/>
                <View style={{width:'40%',height:70,backgroundColor:'green'}}/>
                <View style={{width:'70%',height:90,backgroundColor:'grey'}}/>
                <View style={{width:'65%',height:130,backgroundColor:'pink'}}/>
                <View style={{width:'30%',height:60,backgroundColor:'lightblue'}}/>
            </ScrollView> 
            </View>

        );
    }
     
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',  
      color: '#008080',
      marginTop: 30,   
    },
    text1:{
        fontSize: 30,
        fontFamily: 'Roboto',
        color:'red',
    },
    text2:{
        fontSize: 60,
        color:'blue',
    },
    text3:{
        fontSize:90,
        fontFamily:'monospace',
        color:'pink',
    }
  
  });
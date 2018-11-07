import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TestView extends React.Component {

    render(){
        return(

           <View style={styles.container}>
               <Text>Component view</Text>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex:0.7,
      width:'50%',
      backgroundColor: '#008080',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
  
import React from 'react';
import { View } from 'react-native';
import myStyles from './myStyle.js';

export default class Topic1 extends React.Component {

    render(){
        return(
            <View styles={myStyles.container}>
                <View style={[myStyles.box1, myStyles.radius]}/>
                <View style={[myStyles.box2, myStyles.radius]}/>
                <View style={[myStyles.box3, myStyles.radius]}/>

            </View>
        );

    }

}
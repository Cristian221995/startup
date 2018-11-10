import { StyleSheet } from 'react-native';

const myStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#2b7ad6',
      alignItems:'flex-start',
      justifyContent:'flex-start',
    },
    box1:{
        margin:10,
        marginTop:30,
        width:130,
        height:130,
        backgroundColor:'red',
    },
    box2:{
        margin:10,
        width:200,
        height:200,
        backgroundColor:'#9013fe',
    },
    box3:{
        margin:10,
        width:270,
        height:270,
        backgroundColor:'white',
    },
    radius:{
        borderRadius:10,
    }
  
  });

  export default myStyles;
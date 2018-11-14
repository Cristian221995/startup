import { StyleSheet } from 'react-native';

const myStyles = StyleSheet.create({
    motherBox: {
      flex: 1,
      backgroundColor:'#2b7ad6',
      alignItems:'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
        alignContent: 'center',
        padding: 20
    },
    box1:{
        margin: '5%',
        width: '30%',
        height: '20%',
        backgroundColor:'red',
    },
    box2:{
        margin: '5%',
        width: '30%',
        height: '20%',
        backgroundColor:'#9013fe',
    },
    box3:{
        margin: '5%',
        width: '30%',
        height: '20%',
        backgroundColor:'white',
    },
    radius:{
        borderRadius:10,
        margin:10,
        marginTop:30,

    }
  
  });

  export default myStyles;
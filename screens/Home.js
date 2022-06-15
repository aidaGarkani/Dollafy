import { Image, StyleSheet, Text, View, Button ,TouchableOpacity} from 'react-native';
import * as React from 'react';
// import { firebase } from '../config'


// function Home ({ route, navigation }) {
function Home ({ navigation }) {
  

//   const user = firebase.auth().currentUser.email;
//   const {name} = route.params;

    return(   
      <View style={styles.container}>
      {/* <Text style={styles.welcometxt}>Welcome {name}</Text> */}
      <Text style={styles.welcometxt}>Home</Text>
      </View>
    );
    
  }

export default Home;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9E07F',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcometxt:{
      fontSize:20,
      position: 'absolute',
      left: 5,
      top: 30,
      paddingLeft:30,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    }
});
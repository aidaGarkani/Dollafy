import { Image, StyleSheet, Text, View, Button ,TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import Settingbtn from '../components/SettingBtn';
import { firebase } from '../config'


// function Home ({ route, navigation }) {
function Settings ({ navigation }) {
  

  const [userInfo, setUserInfo] = useState([]);

  const getUserData = async() =>{
    firebase.firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((documentSnapshot) => {
      if (documentSnapshot.exists){
        setUserInfo(documentSnapshot.data());
        console.log(userInfo)
      } 
      else{
       console.log('Error')
      } 
      })
    }

    useEffect(() => {
      getUserData()
    }, [])
  

    return(   
      <View style={styles.container}>
      {/* <Text style={styles.welcometxt}>Welcome {name}</Text> */}
      <Text style={styles.welcometxt}>Settings</Text>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{marginLeft: 20}}>
            <Text style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{userInfo.name}</Text>
            <Text style={styles.caption}>{userInfo.email}</Text>
          </View>
        </View>
      </View>

      <Settingbtn
      onPress={()=> navigation.navigate('Profile')}
      buttonTitle = "Edit Profile" />
      
      <Settingbtn 
      onPress={()=> navigation.navigate('Login')}
      buttonTitle = "Logout"/>

      </View>
      
      
    );
    
  }

export default Settings;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
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
    },
    userInfoSection: {
      paddingHorizontal: 30,
      position: 'absolute',
      left: 2,
      top: 60,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
});
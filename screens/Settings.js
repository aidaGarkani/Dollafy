import { Image, StyleSheet, View, Button ,TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { firebase } from '../config'
import {
  Text,
  TouchableRipple,
} from 'react-native-paper';


// function Home ({ route, navigation }) {
function Settings ({ navigation }) {
  

  const [userInfo, setUserInfo] = useState([]);

  const logout = async () => {
    navigation.navigate('Login')
    firebase.auth().signOut
  }

  const navToProf = async () => {
    navigation.navigate('Profile')
  }

  const navToFeed = async () => {
    navigation.navigate('Feedback')
  }

  const navToPass = async () => {
    navigation.navigate('ChangePass')
  }


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

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={navToProf}>
          <View style={styles.menuItem}>
            <Icon name="account" color="#43978D" size={25}/>
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={navToFeed}>
          <View style={styles.menuItem}>
            <Icon name="cellphone" color="#43978D" size={25}/>
            <Text style={styles.menuItemText}>Feedback</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={navToPass}>
          <View style={styles.menuItem}>
            <Icon name="onepassword" color="#43978D" size={25}/>
            <Text style={styles.menuItemText}>Change Password</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={logout}>
          <View style={styles.menuItem}>
            <Icon name="logout" color="#43978D" size={25}/>
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableRipple>
      </View>
     

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
    menuWrapper: {
      marginTop: 200,
      marginBottom:50,
      width: '100%'
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 40,
    },
    menuItemText: {
      color: '#333',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
});
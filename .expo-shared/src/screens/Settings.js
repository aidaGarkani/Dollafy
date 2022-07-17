import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import Settingbtn from '../components/UI/SettingBtn';
import { firebase } from '../../../config'
import NavigationTop from '../components/UI/NavigationTop';


function Settings({ navigation }) {


  const [userInfo, setUserInfo] = useState([]);

  const getUserData = async () => {
    firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          setUserInfo(documentSnapshot.data());
          console.log(userInfo)
        }
        else {
          console.log('Error')
        }
      })
  }

  useEffect(() => {
    getUserData()
  }, [])


  return (
    <>
      <NavigationTop name={'Setting'} />
      <View style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <View style={{ marginLeft: 20 }}>
              <Text style={[styles.title, {
                marginTop: 15,
                marginBottom: 5,
              }]}>{userInfo.name}</Text>
              <Text style={styles.caption}>{userInfo.email}</Text>
            </View>
          </View>
        </View>

        <Settingbtn
          onPress={() => navigation.navigate('Profile')}
          buttonTitle="Edit Profile" />

        <Settingbtn
          onPress={() => navigation.navigate('Login')}
          buttonTitle="Logout" />

      </View>
    </>



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
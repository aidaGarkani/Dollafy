import { Image, StyleSheet, View, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { firebase } from '../../../config';
import {
  Text,
  TouchableRipple,
  Divider
} from 'react-native-paper';

function Settings({ navigation }) {


  const [userInfo, setUserInfo] = useState([]);

  const logout = async () => {
    alert('Are you sure ?')
    navigation.navigate('Login')

    firebase.auth().signOut().then(function () {
      console.log('Signed Out');
    }, function (error) {
      console.error('Sign Out Error', error);
    });
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


  const getUserData = async () => {
    firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          setUserInfo(documentSnapshot.data());
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
      <View>
        <View style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginLeft: 20 }}>
                <Text style={[styles.title, {
                  marginTop: 15,
                  marginBottom: 5,
                }]}>{userInfo.name}</Text>
                <Text style={styles.caption}>{userInfo.email}</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={navToProf}>
              <View style={styles.menuItem}>
                <Icon name="account" color="#43978D" size={25} />
                <Text style={styles.menuItemText}>Edit Profile</Text>
              </View>
            </TouchableRipple>
            <Divider />

            <TouchableRipple onPress={navToFeed}>
              <View style={styles.menuItem}>
                <Icon name="cellphone" color="#43978D" size={25} />
                <Text style={styles.menuItemText}>Feedback</Text>
              </View>
            </TouchableRipple>
            <Divider />

            <TouchableRipple onPress={navToPass}>
              <View style={styles.menuItem}>
                <Icon name="onepassword" color="#43978D" size={25} />
                <Text style={styles.menuItemText}>Change Password</Text>
              </View>
            </TouchableRipple>
            <Divider />
            <TouchableRipple onPress={logout}>
              <View style={styles.menuItem}>
                <Icon name="logout" color="#43978D" size={25} />
                <Text style={styles.menuItemText}>Logout</Text>
              </View>
            </TouchableRipple>
            <Divider />
          </View>
        </View>
      </View>
    </>
  );

}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'block',
    marginBottom: 50
  },
  welcometxt: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuWrapper: {
    width: '100%'
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  menuItemText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 26,
  },
});
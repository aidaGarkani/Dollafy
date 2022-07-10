import { Image, StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
// import Toast from 'react-native-simple-toast';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { firebase } from '../config'

export default function Profile({ navigation }) {

  const [email, setEmail] = useState();
  const [userInfo, setUserInfo] = useState([]);

  const UpdateInfo = async () => {

    firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({
        name: userInfo.name,
        email: userInfo.email,
        contact: userInfo.contact,
        address: userInfo.address,
      })
      .then(() => {
        console.log('Updated User')
        Alert.alert('Updated Profile', 'Your Profile is Updated!')
        navigation.navigate('Tabs')
      })
  }

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
    <View style={styles.container}>

      <Text style={styles.welcometxt}>Profile</Text>

      <FormInput
        labelValue={userInfo ? userInfo.name : ''}
        onChangeText={(txt) => setUserInfo({ ...userInfo, name: txt })}
        iconType="user"
        autoCapitalize="words"
        autoCorrect={false}
      />

      <FormInput
        labelValue={userInfo ? userInfo.email : ''}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        editable={false}
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={userInfo ? userInfo.address : ''}
        onChangeText={txt => setUserInfo({ ...userInfo, address: txt })}
        placeholderText="Address"
        iconType="user"
      />

      <FormInput
        labelValue={userInfo ? userInfo.contact : ''}
        onChangeText={txt => setUserInfo({ ...userInfo, contact: txt })}
        keyboardType='number-pad'
        placeholderText="Contact Number"
        iconType="phone"
      />

      <FormButton
        buttonTitle="Save"
        onPress={() => UpdateInfo()}

      />

      <FormButton
        buttonTitle="Back"
        onPress={() => navigation.navigate('Tabs')}
      />

    </View>


  );

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 90,
  },
  welcometxt: {
    fontSize: 20,
    position: 'absolute',
    left: 5,
    top: 30,
    paddingLeft: 30,
    paddingBottom: 40,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Roboto',
  },
});

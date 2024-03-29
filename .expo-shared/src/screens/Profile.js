import { Image, StyleSheet, View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import FormInput from '../components/UI/FormInput';
import FormButton from '../components/UI/FormButton';
import { firebase } from '../../../config'
import ImageProfile from '../../../assets/images/undraw_personal_information_re_vw8a.png';

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
        }
        else {
          throw new Error(error);
        }
      })
  }

  useEffect(() => {
    getUserData()
  }, [])


  return (

    <>
      <View style={styles.imageContainer}>
        <Image source={ImageProfile} style={styles.image} />
      </View>
      <View style={styles.container}>
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
          iconType="home"
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


      </View>

    </>
  );

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 20,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Roboto',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    margin: 10
  },
  image: {
    width: 300,
    height: 200,
    alignItems: 'center',
  }
});

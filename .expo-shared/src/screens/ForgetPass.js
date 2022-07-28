import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import FormInput from '../components/UI/FormInput';
import FormButton from '../components/UI/FormButton';
import { firebase } from '../../../config'

export default function ForgotPass({navigation}) {

  const [email, setEmail] = useState();
  

  function forgotPassword (emailadd) {
    var emailadd = email
    if(email === ''){
    Alert.alert('Oops', 'Your Email is Empty')
    return
    
    }
       firebase.auth().sendPasswordResetEmail(emailadd)
      .then(function (user) {
        console.log(emailadd)
        alert('Please check your email...')
      }).catch(function (e) {
        console.log(e)
      })
  }

    return(
    <View style={styles.container}>
    
    <Text style={styles.headertxt}>Forget Password</Text>
    <Text style={styles.subtxt}>Note that only real emails will receive change password emails</Text>

      <FormInput
      value={email}
      onChangeText={userEmail => setEmail(userEmail)}
      placeholderText="Email"
      iconType="user"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      />

      <FormButton 
        buttonTitle = 'Send'
        onPress={() => forgotPassword()}
      />
      <FormButton 
        buttonTitle = 'Cancel'
        onPress={() => {navigation.navigate('Login')}}
      />

      </View>
  
    );
  }

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
    width: '100%',
    height: '100%',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  headertxt:{
    fontSize:20,
    position: 'absolute',
    left: 5,
    top: 30,
    paddingLeft:30,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  subtxt:{
    fontSize:10,
    position: 'absolute',
    color: '#FF0000',
    left: 5,
    top: 60,
    paddingLeft:30,
    fontFamily: 'Roboto',
  }
});

import { Image, StyleSheet, Text, View, Button ,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Toast from 'react-native-simple-toast';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { firebase } from '../config'

export default function SignUp({navigation}) {

  const [name, setname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  
  const onRegisterPress = async () => {

    if (password !== confirmpassword) {
        alert("Passwords don't match.")
        return
    }
    else if(password.length <= 5){
      alert("Passwords must be 6 characters and above.")
      return
    }
    else if(password.length == 0){
      alert("Password Empty. Please Insert Password")
      return
    }
    else if(email.length == 0){
      alert("Email Empty. Please Insert Email")
      return
    }
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
                name
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                  Toast.show('Registered with : ' + email);
                    navigation.navigate('Tabs', {screen: 'Home', params:{name:name}})
                })
                .catch((error) => {
                    alert(error)
                });
        })
        .catch((error) => {
            alert(error)
    });
}


    return(
    <View style={styles.container}>
    <Image 
      source={require('../assets/images/logo.png')} 
      style={styles.logo}/>  

    <FormInput
      labelValue={name}
      onChangeText={userName => setname(userName)}
      placeholderText="Name"
      iconType="user"
      autoCapitalize="none"
      autoCorrect={false}
      />

      <FormInput
      labelValue={email}
      onChangeText={userEmail => setEmail(userEmail)}
      placeholderText="Email"
      iconType="user"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      />

      <FormInput
      labelValue={password}
      onChangeText={userPassword => setPassword(userPassword)}
      placeholderText="New Password"
      iconType="lock"
      secureTextEntry={true}
      />

      <FormInput
      labelValue={confirmpassword}
      onChangeText={userConfirmPassword => setConfirmPassword(userConfirmPassword)}
      placeholderText="Confirm Password"
      iconType="lock"
      secureTextEntry={true}
      />

      <FormButton
        buttonTitle = "Sign Up"
        onPress={() => onRegisterPress()}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have An Account? Sign In Here!</Text>
      </TouchableOpacity>
    
    
      </View>

      
    );
    
  }

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
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

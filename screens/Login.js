import { Image, StyleSheet, Text, View, Button ,TouchableOpacity} from 'react-native';
import React, {useState, navigation} from 'react';
//import Toast from 'react-native-simple-toast';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
// import { firebase } from '../config'
// import Home from '../screens/Home'

function Login({navigation}) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

//   const onLoginPress = async () => {

//     await firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         .then((response) => {
//             const uid = response.user.uid
//             const usersRef = firebase.firestore().collection('users')
//             usersRef
//                 .doc(uid)
//                 .get()
//                 .then(firestoreDocument => {
//                     if (!firestoreDocument.exists) {
//                         alert("User does not exist anymore.")
//                         return;
//                     }
//                     const userprofile = firestoreDocument.data()
//                     Toast.show('Logged In with : ' + email);
//                     navigation.navigate('Tabs' , {screen: 'Home', params:{name:userprofile.name}})
//                 })
//                 .catch(error => {
//                     alert(error)
//                 });
//         })
//         .catch(error => {
//             alert(error)
//         })
// }


    return(
      <View style={styles.container}>
      <Image 
      source={require('../assets/images/logo.png')} 
      style={styles.logo}/>  
      {/* <Text style={styles.text}>Taskcape</Text> */}
      
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
      placeholderText="Password"
      iconType="lock"
      secureTextEntry={true}
      />

      <FormButton
        buttonTitle = "Sign In"
        onPress={() => navigation.navigate('Tabs')}/>
        {/* onPress={() => onLoginPress()}/> */}

      <TouchableOpacity style={styles.forgotButton} onPress={() => alert('Forgot')}>
        <Text style={styles.navButtonText}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.navButtonText}>Don't Have An Account? Create Here!</Text>
      </TouchableOpacity>
    
      </View>
    );
    
  }

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 28,
    padding: 10,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 10,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Roboto',
  },
});

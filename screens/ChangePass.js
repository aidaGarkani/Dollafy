import { Image, StyleSheet, Text, View, Button ,TouchableOpacity, Alert} from 'react-native';
import {useState} from 'react';
import PasswordInput from '../components/PasswordInput';
import FormButton from '../components/FormButton';
import { firebase } from '../config'

function ChangePass ({ navigation, route }) {
  
    const [curpassword, setCurPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const user = firebase.auth().currentUser;

  const updatePassword = async () =>{

    if (password !== confirmpassword) {
        alert("Passwords don't match.")
        return
    }else if(password?.length < 5){
        alert("Passwords must be longer than 6 characters.")
        return
    }else if(password?.length == 0){
        alert("Passwords Empty.")
        return 
    }
        user.updatePassword(password).then(() => {
        Alert.alert("Password", "Password Changed")
        alert('Password Changed')
        navigation.navigate('Tabs')
         }).
        catch((error) => {
        Alert.alert('Unable to Change Password')
        alert('Unable to Change Password')
        });
}

    return(   
      <View style={styles.container}>
      <Text style={styles.welcometxt}>ChangePass</Text>

      <PasswordInput
      labelValue={password}
      onChangeText={userPassword => setPassword(userPassword)}
      placeholderText="New Password"
      iconType="lock"
      />

      <PasswordInput
      labelValue={confirmpassword}
      onChangeText={userConfirmPassword => setConfirmPassword(userConfirmPassword)}
      placeholderText="Confirm Password"
      iconType="lock"
      />  


      <FormButton
        buttonTitle = "Edit"
        onPress={() => updatePassword()}
      />

      <FormButton
        buttonTitle = "Back"
        onPress={() => navigation.navigate('Tabs')}
      />
      </View>
    );
    
  }

export default ChangePass;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:20,
      marginRight:20,
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
import { Image, StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import PasswordInput from '../components/UI/PasswordInput';
import FormButton from '../components/UI/FormButton';
import { firebase } from '../../../config'
import NavigationTop from '../components/UI/NavigationTop';

function ChangePass({ navigation, route }) {

  const [curpassword, setCurPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const user = firebase.auth().currentUser;

  const updatePassword = async () => {

    if (password !== confirmpassword) {
      alert("Passwords don't match.")
      return
    } else if (password?.length < 5) {
      alert("Passwords must be longer than 6 characters.")
      return
    } else if (password?.length == 0) {
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

  return (
    <>
      <NavigationTop name={'Change Password'} />
      <View style={styles.container}>

        <View>
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
        </View>



        <FormButton
          buttonTitle="Edit"
          onPress={() => updatePassword()}
        />

        <FormButton
          buttonTitle="Cancel"
          onPress={() => navigation.navigate('Tabs')}
        />
      </View>
    </>

  );

}

export default ChangePass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
  }
});
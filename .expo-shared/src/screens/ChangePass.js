import { Image, StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import PasswordInput from '../components/UI/PasswordInput';
import FormButton from '../components/UI/FormButton';
import { firebase } from '../../../config'
import ImagePassword from '../../../assets/images/undraw_security_re_a2rk.svg';

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
      <View style={styles.imageContainer}>
        <Image source={ImagePassword} style={styles.image} />
      </View>
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
      </View>
    </>

  );

}

export default ChangePass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 120,
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: 250,
    height: 170,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: '20%',

  },
});
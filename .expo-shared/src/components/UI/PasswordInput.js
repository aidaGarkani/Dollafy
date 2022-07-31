import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { windowHeight, windowWidth } from '../../utils/Dimentions';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PasswordInput = ({ labelValue, placeholderText, iconType, ...rest }) => {

  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        {...rest}
        secureTextEntry={passwordVisible}
        right={<TextInput.Icon name={passwordVisible ? "eye-off" : "eye"} onPress={() => setPasswordVisible(!passwordVisible)} />}
      />
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 14,
    borderColor: '#ccc',
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: .1
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    flex: 1,
    height: windowHeight / 15,
    fontSize: 16,
    fontFamily: 'Roboto',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 20
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 5,
    height: windowHeight / 10,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
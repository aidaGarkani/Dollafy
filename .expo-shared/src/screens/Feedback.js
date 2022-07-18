import { Image, StyleSheet, Text, View, Button ,TouchableOpacity} from 'react-native';
import {useState} from 'react';
import FormInput from '../components/UI/FormInput';
import FormButton from '../components/UI/FormButton';
// import { firebase } from '../config'

function Feedback ({ navigation, route }) {

    const navToTab = () => {
        navigation.navigate('Tabs')
    }

    const [title, setTitle] = useState();
    const [feedback, setFeedback] = useState();
  
    return(   
      <View style={styles.container}>
      <Text style={styles.welcometxt}>Feedback</Text>
      
      <FormInput
      labelValue={title}
      onChangeText={feedTitle => setTitle(feedTitle)}
      placeholderText="Feedback Title"
      iconType="user"
      autoCapitalize="none"
      autoCorrect={false}
      />

      <FormInput
      labelValue={feedback}
      onChangeText={feedbackItem => setFeedback(feedbackItem)}
      placeholderText="Feedback"
      iconType="lock"
      />

      <FormButton
        buttonTitle = "Submit"
        onPress={()=>{}}/>

    <FormButton
        buttonTitle = "Back"
        onPress={navToTab}/>


    
      </View>
    );
    
  }

export default Feedback;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 20,
      marginLeft: 20,
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
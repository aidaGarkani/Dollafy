import { StyleSheet, View, Image } from 'react-native';
import { useState } from 'react';
import FormInput from '../components/UI/FormInput';
import FormButton from '../components/UI/FormButton';
import ImageFeedback from '../../../assets/images/undraw_reviews_lp8w.png';

function Feedback({ navigation, route }) {

  const navToTab = () => {
    navigation.navigate('Tabs')
  }

  const [title, setTitle] = useState();
  const [feedback, setFeedback] = useState();

  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={ImageFeedback} style={styles.image} />
      </View>
      <View style={styles.container}>
        <FormInput
          labelValue={title}
          onChangeText={feedTitle => setTitle(feedTitle)}
          placeholderText="Feedback Title"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={feedback}
          onChangeText={feedbackItem => setFeedback(feedbackItem)}
          placeholderText="Feedback"
        />

        <FormButton
          buttonTitle="Submit"
          onPress={() => { }} />

      </View>
    </>
  );

}

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20
  },
  welcometxt: {
    fontSize: 20,
    position: 'absolute',
    left: 5,
    top: 30,
    paddingLeft: 30,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  },
  image: {
    width: 300,
    height: 210,
  }
});
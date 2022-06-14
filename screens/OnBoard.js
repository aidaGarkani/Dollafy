import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';

const OnBoard = ({navigation}) => {
    return (
          <Onboarding
          onSkip={() => navigation.replace("Login")}
          onDone={() => navigation.replace("Login")}
          pages={[
          {
            backgroundColor: '#94B49F',
            image: <Image style={styles.picSize} source={require('../assets/images/ob1.png')}/>,
            title: 'Organizing your work',
            subtitle: 'Organize your work to suit your everyday needs'
          },
          {
            backgroundColor: '#789395',
            image: <Image style={styles.picSize} source={require('../assets/images/ob3.png')}/>,
            title: 'Meetings',
            subtitle: 'Get into meetings fast'
          },
          {
            backgroundColor: '#B4CFB0',
            image: <Image style={styles.picSize} source={require('../assets/images/ob2.png')}/>,
            title: 'Note Taking',
            subtitle: 'Take notes fast and tidy'
          }
        ]}
      />
    );
  }

export default OnBoard;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,
    },
    picSize:{
    width: 400,
    height: 400,
    }
});



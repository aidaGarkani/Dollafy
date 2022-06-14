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
            backgroundColor: '#4FD6B5',
            image: <Image style={styles.picSize} source={require('../assets/images/ob1.png')}/>,
            title: 'Keeping Track',
            subtitle: 'Keeping all your finances in check'
          },
          {
            backgroundColor: '#4FD6B5',
            image: <Image style={styles.picSize} source={require('../assets/images/ob3.png')}/>,
            title: 'Transactions',
            subtitle: 'Keeping records of transactions'
          },
          {
            backgroundColor: '#4FD6B5',
            image: <Image style={styles.picSize} source={require('../assets/images/ob2.png')}/>,
            title: 'Account Management',
            subtitle: 'Manage your finances perfectly'
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



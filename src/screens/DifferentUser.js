import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
  } from 'react-native';

const DifferentUser = (props) => {
    return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/default_pfp.png')}            
            style={styles.image}   
          />
        <Text style={styles.text}>Name: </Text>
        <Text style={styles.text}>University: </Text>
        <Text style={styles.text}>Major: </Text>
    </View>
    <ScrollView style={styles.textFieldContainer}>
        <Text style={styles.text}>Recent activity: </Text>
        <Image
          source={require('../../assets/ben-lerner.png')}
          style={styles.image}
        />
        <Image
          source={require('../../assets/ben-lerner.png')}
          style={styles.image}
        />
    </ScrollView>
    </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FDF4EE',
      ...StyleSheet.absoluteFillObject,
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 200,
    },
    altPages: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20,
    },
    logo: {
      height: 30,
      width: 30,
    },
    image: {
      flex: 1,
      flexDirection: 'column',
      width: 340,
      borderRadius: 0,
    },
    textFieldContainer: {
      height: 200,
      marginLeft: 10,
    },
    textField: {
      fontSize: 15,
      marginLeft: 10,
    },
    input: {
      margin: 15,
      borderColor: 'black',
      borderWidth: 1,
      padding: 5,
      borderRadius: 5,
    },
    button: {
      backgroundColor: '#FDF4EE',
      borderRadius: 30,
      padding: 10,
      marginBottom: 0,
      flex: 1,
      flexDirection: 'row',
    },
    space: {
      width: 55,
      height: 20,
    },
});

export default DifferentUser;

   
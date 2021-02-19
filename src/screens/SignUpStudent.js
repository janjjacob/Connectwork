import React from 'react';
import { 
  Text, 
  StyleSheet, 
  View, Image, 
  TextInput, 
  ScrollView, } from 'react-native';
const SignUpStudent = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
        source={require('../../assets/default_pfp.png')}
        style={styles.image}
        />
        {/*<Image
        source={require('../../assets/active-status.png')}
        style={{
          width:20,
          height: 20, 
          borderRadius: 20/2
        }}
        />
      */}
      </View>
    <ScrollView style={styles.textFieldContainer}>
      <Text style={styles.textField}>First name, Last Name:</Text>
      <TextInput
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false}
    />
      <Text style={styles.textField}>Username:</Text>
      <TextInput
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false}
    />
    <Text style={styles.textField}>Password:</Text>
      <TextInput
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false}
    />
    <Text style={styles.textField}>Univeristy:</Text>
      <TextInput
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false}
    />
    <Text style={styles.textField}>Year of Graduation:</Text>
      <TextInput
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false}
    />
    <Text style={styles.textField}>Email:</Text>
      <TextInput
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false}
    />
    <Text style={styles.textField}>Phone Number:</Text>
      <TextInput
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false}
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
  image: {
    height: 100, 
    width: 100, 
    borderRadius: 50.
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
  activeStatus: {
    width: 0, 
    height: 0, 
    left: 500, 
  },

});

export default SignUpStudent;

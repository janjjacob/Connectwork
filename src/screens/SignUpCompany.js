import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';

const SignUpCompany = (props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/default_pfp.png')}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.textFieldContainer}>
        <Text style={styles.text}>Company Name:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
        />
        
        <Text style={styles.text}>Password:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          value={password}
          onChangeText={(newValue) => setPassword(newValue)}
        />
        {password.length < 8 ? (
          <Text style={styles.passwordWarning}>
            Password must be at least 8 characters
          </Text>
        ) : null}

        <Text style={styles.text}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          value = {confirmPassword}
          onChangeText={(newValue) => setConfirmPassword(newValue)}
        />
        {password.localeCompare(confirmPassword) ? (
          <Text style={styles.passwordWarning}>
            This must match the password given
          </Text>
        ) : null}

        <Text style={styles.text}>Location:</Text>
        <TextInput
          style={styles.input}
          autoCorrect={true}
        />

        <Text style={styles.text}>Email/Contact Information:</Text>
        <TextInput
          style={styles.input}
          autoCorrect={false}
        />

        <Text style={styles.text}>Description:</Text>
        <TextInput
          style={styles.inputLarge}
          multiline={true}
          autoCorrect={true}
        />
      
      <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => props.navigation.navigate('Login')}
          >
            <Text style={styles.button}>Sign Up</Text>
          </TouchableOpacity>
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
    borderRadius: 50,
  },
  text: {
    fontSize: 15,
    marginLeft: 15,
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  inputLarge: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    height: 100,
  },
  passwordWarning: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
    paddingBottom: 10,
  },
  buttonContainer: {
    marginBottom: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A6C83',
    borderRadius: 20,
    padding: 5,
    width: '60%',
  },
  button: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  logo: {
    height: 30,
    width: 30,
  },
});
export default SignUpCompany;

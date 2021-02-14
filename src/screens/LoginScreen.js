import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const LoginScreen = (props) => {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/placeholder-logo.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textFieldContainer}>
        <Text style={styles.text}>Username:</Text>
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
        <TouchableOpacity
        //onPress={() => props.navigation.navigate('Home')}
        >
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => props.navigation.navigate('Home')}
        >
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignUpStudent')}
        >
          <Text style={styles.signup}>Sign up as a student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignUpCompany')}
        >
          <Text style={styles.signup}>Sign up as an employer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Palette: https://www.color-hex.com/color-palette/5085
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(242,229,150)',
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
  textFieldContainer: {
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  passwordWarning: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize: 13,
    color: 'blue',
    textDecorationLine: 'underline',
    marginRight: 15,
    marginTop: -18,
  },
  buttonContainer: {
    marginBottom: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(146,88,0)',
    borderRadius: 20,
    padding: 5,
    width: '60%',
  },
  button: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  signupContainer: {
    fontSize: 15,
    marginTop: 30,
    alignItems: 'center',
  },
  signup: {
    margin: 5,
    fontSize: 13,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;

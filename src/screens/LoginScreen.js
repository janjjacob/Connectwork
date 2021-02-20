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
          value={password}
          onChangeText={(newValue) => setPassword(newValue)}
          secureTextEntry={true}
        />
        {password.length < 8 ? (
          <Text style={styles.passwordWarning}>
            Password must be at least 8 characters
          </Text>
        ) : null}
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => props.navigation.navigate('Home')}
        >
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.altLoginContainer}>
        <Image
          source={require('../../assets/google-logo.png')}
          style={styles.logo}
        />
        <Image
          source={require('../../assets/linkedin-logo.png')}
          style={styles.logo}
        />
        <Image
          source={require('../../assets/github-logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.forgotContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ForgotUsername')}
        >
          <Text style={styles.forgotPassword}>Forgot username?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.forgotPassword}>Forgot password?</Text>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDF4EE',
    ...StyleSheet.absoluteFillObject,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  textFieldContainer: {
    height: 200,
    marginBottom: 10,
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
  passwordWarning: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
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
  altLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 20,
  },
  logo: {
    height: 30,
    width: 30,
  },
  forgotContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize: 13,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  signupContainer: {
    fontSize: 15,
    marginTop: 20,
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

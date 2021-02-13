import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require('../../assets/placeholder-logo.png')}
          style={styles.image}
        />
      </View>
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
      />
      <Button
        //onPress={() => props.navigation.navigate('Login')}
        title='Login'
      />
      <View style={styles.signup}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => props.navigation.navigate('SignUpStudent')}
        >
          <Text>Go to student sign up page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => props.navigation.navigate('SignUpCompany')}
        >
          <Text>Go to company sign up page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  touchable: {
    margin: 15,
    fontSize: 20,
  },
  signup: {
    marginTop: 30,
    fontSize: 15,
    alignItems: 'center',
  },
});

export default HomeScreen;

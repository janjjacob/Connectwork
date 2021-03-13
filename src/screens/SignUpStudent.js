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
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';

import firebase from 'firebase';

<<<<<<< HEAD
const SignUpStudent = ({ navigation }) => {
=======
const SignUpStudent = (props) => {
>>>>>>> 48fa43df3fb56cd10790e1afde38a6c9b082b8bc
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [year, setYear] = useState(2020);
  const [school, setSchool] = useState('nu');

  const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Signed up successfully!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      400
    );
  };

  const signup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
<<<<<<< HEAD
        firebase
          .firestore()
          .collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
            year,
            school,
          });
        //console.log(result);
=======
        console.log(result);
>>>>>>> 48fa43df3fb56cd10790e1afde38a6c9b082b8bc
      })
      .catch((error) => {
        console.log(error);
      });
    showToast();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/default_pfp.png')}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.textFieldContainer}>
        <Text style={styles.textField}>First name, Last Name:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          value={name}
          onChangeText={(newValue) => setName(newValue)}
        />
        <Text style={styles.textField}>Email:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          value={email}
          onChangeText={(newValue) => setEmail(newValue)}
        />
        <Text style={styles.textField}>Password:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          value={password}
          onChangeText={(newValue) => setPassword(newValue)}
          secureTextEntry
        />
        <Text style={styles.textField}>Univeristy:</Text>
        <DropDownPicker
          items={[
            {
              label: 'Northeastern University',
              value: 'nu',
              icon: () => <Icon name='school' size={18} color='#900' />,
            },
            {
              label: 'Boston University',
              value: 'bu',
              icon: () => <Icon name='school' size={18} color='#900' />,
            },
          ]}
          style={styles.dropdown}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          defaultValue={'nu'}
          dropDownStyle={styles.dropdownMenu}
          onChangeItem={(item) => {
            setSchool(item.value);
          }}
        />
        <Text style={styles.textField}>Year of Graduation:</Text>
        <DropDownPicker
          items={[
            {
              label: '2019',
              value: 2019,
              icon: () => <Icon name='graduation-cap' size={18} color='#900' />,
            },
            {
              label: '2020',
              value: 2020,
              icon: () => <Icon name='graduation-cap' size={18} color='#900' />,
            },
            {
              label: '2021',
              value: 2021,
              icon: () => <Icon name='graduation-cap' size={18} color='#900' />,
            },
            {
              label: '2022',
              value: 2022,
              icon: () => <Icon name='graduation-cap' size={18} color='#900' />,
            },
            {
              label: '2023',
              value: 2023,
              icon: () => <Icon name='graduation-cap' size={18} color='#900' />,
            },
            {
              label: '2024',
              value: 2024,
              icon: () => <Icon name='graduation-cap' size={18} color='#900' />,
            },
          ]}
          style={styles.dropdown}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          defaultValue={2020}
          dropDownStyle={styles.dropdownMenu}
          onChangeItem={(item) => {
            setYear(item.value);
          }}
        />
        <Text style={styles.textField}>Email:</Text>
        <TextInput
          style={styles.input}
          type='email'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Text style={styles.textField}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            signup();
            console.log(name);
          }}
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
  textFieldContainer: {
    height: 200,
    marginLeft: 10,
  },
  textField: {
    fontSize: 15,
    marginLeft: 10,
  },
  dropdown: {
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#fafafa',
  },
  dropdownMenu: {
    marginLeft: 15,
    marginTop: 10,
    paddingRight: 20,
    backgroundColor: '#fafafa',
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
});

export default SignUpStudent;

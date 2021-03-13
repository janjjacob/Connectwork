import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';

import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../redux/actions/index';

const HomeScreen = ({ navigation }) => {
  const fetchUser = (dispatch) => {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch({ type: 'USER_STATE_CHANGE', currentUser: snapshot.data() });
        } else {
          console.log('does not exist');
        }
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Button
          title='Go to Settings page'
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title='Logout'
          onPress={() => {
            firebase.auth().signOut();
            this.props.navigation.navigate('Login');
          }}
        />
      </View>
      <ScrollView style={styles.textFieldContainer}>
        <Text style={styles.textField}>Search: </Text>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Image
          source={require('../../assets/ben-lerner.png')}
          style={styles.image}
        />
        <Image
          source={require('../../assets/ben-lerner.png')}
          style={styles.image}
        />
      </ScrollView>

      <View style={styles.altPages}>
        <TouchableOpacity
          style={styles.altPages}
          onPress={() => {
            alert('next page');
          }}
        >
          <Image
            source={require('../../assets/chat.png')}
            style={styles.logo}
          />
          <View style={styles.space} />
          <Image
            source={require('../../assets/make-group.png')}
            style={styles.logo}
          />
          <View style={styles.space} />
          <Image
            source={require('../../assets/add-post.png')}
            style={styles.logo}
          />
          <View style={styles.space} />
          <Image
            source={require('../../assets/default_pfp.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// export class HomeScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       name: '',
//       school: '',
//       year: '',
//     };
//   }
//   componentDidMount() {
//     this.props.fetchUser();
//   }

//   render() {}
// }

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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchUser }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(HomeScreen);

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DarkModeToggle from '../components/DarkModeToggle';

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings screen</Text>
      <DarkModeToggle />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import Colors from '../ui/constants/colors.js';

const AppScreen = props => {
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar barStyle="light-content" />
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
});

export default AppScreen;

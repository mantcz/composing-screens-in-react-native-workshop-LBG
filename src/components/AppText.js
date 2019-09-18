import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Colors from './../ui/constants/colors';
import Size from './../ui/constants/sizes';

const AppText = props => {
  if (props.type === 'h1') {
    return <Text style={[s.h1, props.style]}>{props.children}</Text>;
  } else if (props.type === 'h2') {
    return <Text style={[s.h2, props.style]}>{props.children}</Text>;
  } else if (props.type === 'small') {
    return <Text style={[s.small, props.style]}>{props.children}</Text>;
  } else {
    return <Text style={[s.text, props.style]}>{props.children}</Text>;
  }
};

const s = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: Size.regular,
  },
  small: {
    color: Colors.white,
    fontSize: Size.small,
  },
  h1: {
    color: Colors.white,
    fontSize: Size.h1,
  },
  h2: {
    color: Colors.white,
    fontSize: Size.h2,
  },
});

export default AppText;

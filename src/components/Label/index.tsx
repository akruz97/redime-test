import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Label = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '800',
  },
});

export default Label;

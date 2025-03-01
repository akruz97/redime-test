import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Label from '../Label';

const Header = ({ title, onBack, showBackButton = false }) => {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text>{'Back'}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.containerTitle}>
        <Label>{title}</Label>
      </View>
    </View>
  );
};

export default Header;

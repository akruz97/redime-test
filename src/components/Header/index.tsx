import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Label from '../Label';
import imageBackButton from './../../assets/img/back.png';

const Header = ({ title, onBack, showBackButton = false }) => {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Image source={imageBackButton} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      )}

      <View style={styles.containerTitle}>
        <Label>{title}</Label>
      </View>
    </View>
  );
};

export default Header;

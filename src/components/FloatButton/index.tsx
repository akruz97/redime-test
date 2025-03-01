import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import imgPlus from './../../assets/img/plus.png';

interface IFloatButtonPosition {
  position: {
    right: number;
    bottom: number;
  };
  onPress: () => void;
}

const FloatButton = ({ position, onPress }: IFloatButtonPosition) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          right: position.right,
          bottom: position.bottom,
        },
      ]}
    >
      <Image source={imgPlus} style={{ width: 25, height: 25 }} />
    </TouchableOpacity>
  );
};

export default FloatButton;

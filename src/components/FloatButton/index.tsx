import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface IFloatButtonPosition {
  position: {
    right: number;
    bottom: number;
  };
}

const FloatButton = ({ position }: IFloatButtonPosition) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          right: position.right,
          bottom: position.bottom,
        },
      ]}
    >
      <Text>{'+'}</Text>
    </TouchableOpacity>
  );
};

export default FloatButton;

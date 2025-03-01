import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface IButtonProps {
  title: string;
  onPress: () => void;
}

const ButtonCustom = ({ title = '', onPress }: IButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={{ color: '#fff' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

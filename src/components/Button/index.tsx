import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface IButtonProps {
  title: string;
  onPress: () => void;
  loading: boolean;
}

const ButtonCustom = ({ title = '', onPress, loading = false }: IButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={22} color={'#fff'} />
      ) : (
        <Text style={{ color: '#fff' }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonCustom;

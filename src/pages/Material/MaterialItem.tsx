import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { IMaterialItem } from '../../interfaces';
import { styles } from './styles';

const MaterialItem = (item: IMaterialItem) => {
  return (
    <TouchableOpacity style={styles.containerItem}>
      <Text>{item.nombre}</Text>
      <Text>{item.descripcion}</Text>
      <Text>{item.category.nombre}</Text>
    </TouchableOpacity>
  );
};

export default MaterialItem;

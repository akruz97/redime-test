import React from 'react';
import { View, Text } from 'react-native';
import { IMaterialItem } from '../../interfaces';
import { styles } from './styles';

const MaterialItem = (item: IMaterialItem) => {
  return (
    <View style={styles.containerItem}>
      <Text>{item.nombre}</Text>
      <Text>{item.descripcion}</Text>
      <Text>{item.category.nombre}</Text>
    </View>
  );
};

export default MaterialItem;

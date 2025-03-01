import React from 'react';
import { Text, View } from 'react-native';
import MaterialList from './MaterialList';
import FloatButton from '../../components/FloatButton';

const MaterialScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>{'Materiales'}</Text>
      <MaterialList />
      <FloatButton
        position={{
          right: 12,
          bottom: 12,
        }}
      />
    </View>
  );
};

export default MaterialScreen;

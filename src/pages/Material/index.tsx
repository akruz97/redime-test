import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import MaterialList from './MaterialList';

import FloatButton from '../../components/FloatButton';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

const MaterialScreen = () => {
  const navigation = useNavigation();
  const onPressAddItem = () => {
    navigation.navigate('MaterialEditScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <Header title={'Materiales'} onBack={() => navigation.goBack()} /> */}

      <MaterialList />
      <FloatButton
        position={{
          right: 12,
          bottom: 12,
        }}
        onPress={onPressAddItem}
      />
    </View>
  );
};

export default MaterialScreen;

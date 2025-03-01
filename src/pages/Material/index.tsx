import React from 'react';
import { View } from 'react-native';
import MaterialList from './MaterialList';

import FloatButton from '../../components/FloatButton';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';

import { getCategorylListAction } from '../../store/actions/categoryActions';

const MaterialScreen = () => {
  const navigation = useNavigation();
  const dispatch: any = useDispatch();
  const onPressAddItem = () => {
    navigation.navigate('MaterialEditScreen');
  };

  React.useCallback(() => {
    dispatch(getCategorylListAction());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MaterialList />
      <FloatButton
        position={{
          right: 15,
          bottom: 15,
        }}
        onPress={onPressAddItem}
      />
    </View>
  );
};

export default MaterialScreen;

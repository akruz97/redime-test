import React from 'react';
import { FlatList, View } from 'react-native';
import MaterialItem from './MaterialItem';
import { IMaterialItem } from '../../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getMaterialListAction } from '../../store/actions/materialActions';
import { useFocusEffect } from '@react-navigation/native';

const MaterialList = () => {
  const dispatch: any = useDispatch();
  const { materialList = [] } = useSelector((state: RootState) => state.material);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getMaterialListAction());
    }, [])
  );

  const _renderItem = ({ item, index }: { item: IMaterialItem; index: number }) => (
    <MaterialItem {...item} key={index} />
  );

  return (
    <FlatList
      data={materialList}
      renderItem={_renderItem}
      ListFooterComponent={<View style={{ height: 100 }} />}
    />
  );
};
export default MaterialList;

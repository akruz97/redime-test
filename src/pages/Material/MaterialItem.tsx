import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { IMaterialItem } from '../../interfaces';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getCategorylListAction } from '../../store/actions/categoryActions';
import { deleteMaterialAction } from '../../store/actions/materialActions';

const MaterialItem = (item: IMaterialItem) => {
  const navigation = useNavigation();
  const dispatch: any = useDispatch();

  const [categoryName, setCategoryName] = useState<string>('');

  const { categoryList = [] } = useSelector((state: RootState) => state.category);

  useEffect(() => {
    dispatch(getCategorylListAction());
  }, [dispatch]);

  useEffect(() => {
    getCategoryNameById(item.categoria_id);
  }, [categoryList]);

  const getCategoryNameById = (id: number) => {
    const findCategory = categoryList.find((x) => x.id === id);

    if (findCategory) {
      setCategoryName(findCategory.value);
    }
  };

  const onPressItem = () => {
    Alert.alert('Elija una acción', '', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Editar',
        onPress: () => {
          navigation.navigate('MaterialEditScreen', {
            isEdit: true,
            item: item,
          });
        },
      },
      {
        text: 'Eliminar',
        onPress: () => {
          dispatch(deleteMaterialAction(item.id));
        },
      },
    ]);
  };

  return (
    <TouchableOpacity style={styles.containerItem} onPress={onPressItem}>
      <Text style={styles.itemName}>{item.nombre}</Text>
      <Text style={styles.itemDescription}>Descripción: {item.descripcion}</Text>
      <View style={styles.containerBadge}>
        <Text style={styles.bagde}>{categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MaterialItem;

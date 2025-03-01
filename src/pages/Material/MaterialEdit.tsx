import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import Label from '../../components/Label';
import { useForm } from '../../hooks/useForm';
import { styles } from './styles';
import ButtonCustom from '../../components/Button';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import KeyboardAwareScroll from '../../components/KeyboardAwareScroll';

const MaterialEditScreen = () => {
  const navigation = useNavigation();

  const { form, onChange } = useForm({
    name: '',
    description: '',
    stock: 0,
    categoryId: 0,
  });

  const onChangeName = (text: string) => onChange(text, 'name');

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Header title={'Crear / Editar Material'} onBack={() => navigation.goBack()} showBackButton />
      <KeyboardAwareScroll>
        <>
          <Label>{'Nombre'}</Label>
          <TextInput style={styles.inputStyle} onChangeText={onChangeName} />
          <Label>{'Descripción'}</Label>
          <TextInput
            style={[styles.inputStyle, { minHeight: 100 }]}
            onChangeText={onChangeName}
            multiline
            numberOfLines={5}
            textAlignVertical="top"
          />
          <Label>{'Stock Mínimo'}</Label>
          <TextInput style={styles.inputStyle} onChangeText={onChangeName} />
          <Label>{'Categoría'}</Label>
        </>
      </KeyboardAwareScroll>
      <ButtonCustom title="Guardar" onPress={() => {}} />
    </View>
  );
};

export default MaterialEditScreen;

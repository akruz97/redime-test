import React, { useEffect, useState } from 'react';
import { Alert, TextInput, View } from 'react-native';
import Label from '../../components/Label';
import { useForm } from '../../hooks/useForm';
import { styles } from './styles';
import ButtonCustom from '../../components/Button';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import KeyboardAwareScroll from '../../components/KeyboardAwareScroll';
import { Dropdown } from 'react-native-element-dropdown';
import appStyles from '../../assets/styles/appStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorylListAction } from '../../store/actions/categoryActions';
import { RootState } from '../../store';
import { createMaterialAction, editMaterialAction } from '../../store/actions/materialActions';
import { resetFlagsMaterial } from '../../store/reducers/materialReducer';
import { StatusList } from '../../constants';

const MaterialEditScreen = ({ route }) => {
  const isEdit = route.params?.isEdit || false;

  const navigation = useNavigation();
  const dispatch: any = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [selectedStatus, setSelectedStatus] = useState<any>(null);
  const { form, onChange, setFormValue } = useForm({
    id: 0,
    name: '',
    description: '',
    stock: 0,
    categoryId: 0,
  });

  const { categoryList = [] } = useSelector((state: RootState) => state.category);
  const { loading, successCreated, errorCreated, errorEdit, successEdit } = useSelector(
    (state: RootState) => state.material
  );

  useEffect(() => {
    dispatch(getCategorylListAction());
  }, []);

  useEffect(() => {
    if (errorCreated || errorCreated?.length) {
      return Alert.alert('Error', 'No se pudo crear el material', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(resetFlagsMaterial());
          },
        },
      ]);
    }

    if (successCreated || successCreated?.length) {
      return Alert.alert('', 'Material registrado!', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(resetFlagsMaterial());
            navigation.goBack();
          },
        },
      ]);
    }
  }, [errorCreated, successCreated]);

  useEffect(() => {
    if (errorEdit || errorEdit?.length) {
      return Alert.alert('Error', 'No se pudo actualizar el material', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(resetFlagsMaterial());
          },
        },
      ]);
    }

    if (successEdit || successEdit?.length) {
      return Alert.alert('', 'Material actualizado!', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(resetFlagsMaterial());
            navigation.goBack();
          },
        },
      ]);
    }
  }, [errorEdit, successEdit]);

  useEffect(() => {
    if (isEdit) {
      const materialEdit = route.params?.item || {};
      setFormValue({
        id: materialEdit.id,
        name: materialEdit.nombre,
        description: materialEdit.descripcion,
        stock: materialEdit.stock_minimo,
        categoryId: materialEdit.categoria_id,
      });

      const findCategory = categoryList.find((x) => x.key === materialEdit.categoria_id);
      if (findCategory) {
        setSelectedCategory(findCategory);
      }

      const findStatus = StatusList.find((x) => x.value === materialEdit.estado);
      if (findStatus) {
        setSelectedStatus(findStatus);
      }
      return;
    }
  }, [isEdit]);

  const onChangeName = (text: string) => onChange(text, 'name');

  const onChangeCategory = (item: any) => {
    setSelectedCategory(item);
  };

  const onChangeStatus = (item: any) => {
    setSelectedStatus(item);
  };

  const onChangeStock = (val: string) => {
    const parseVal = parseFloat(val);

    onChange(parseVal, 'stock');
  };

  const onChangeDescription = (val: string) => onChange(val, 'description');

  const onSave = () => {
    if (
      form.name == '' ||
      form.description == '' ||
      form.stock == 0 ||
      selectedCategory === null ||
      selectedStatus === null
    ) {
      return Alert.alert('', 'Todos los campos son requeridos');
    }

    const data = {
      id: form.id,
      nombre: form.name,
      descripcion: form.description,
      stock_minimo: parseInt(form.stock),
      categoria_id: selectedCategory.key,
    };

    if (isEdit) {
      dispatch(editMaterialAction(data));
      return;
    }
    dispatch(createMaterialAction(data));
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Header title={'Crear / Editar Material'} onBack={() => navigation.goBack()} showBackButton />
      <KeyboardAwareScroll>
        <View style={{ flex: 1 }}>
          <View style={appStyles.mt20}>
            <Label>{'Nombre'}</Label>
          </View>
          <TextInput style={styles.inputStyle} onChangeText={onChangeName} value={form.name} />
          <View style={appStyles.mt10}>
            <Label>{'Descripción'}</Label>
          </View>
          <TextInput
            style={[styles.inputStyle, { minHeight: 100 }]}
            onChangeText={onChangeDescription}
            value={form.description}
            multiline
            numberOfLines={5}
            textAlignVertical="top"
          />
          <View style={appStyles.mt10}>
            <Label>{'Stock Mínimo'}</Label>
          </View>
          <TextInput
            style={styles.inputStyle}
            onChangeText={onChangeStock}
            value={form.stock}
            keyboardType="number-pad"
          />
          <View style={appStyles.mt10}>
            <Label>{'Categoría'}</Label>
          </View>
          <Dropdown
            style={[styles.dropdownBoxStyles]}
            placeholderStyle={styles.dropdownTextStyles}
            selectedTextStyle={styles.dropdownTextStyles}
            inputSearchStyle={styles.dropdownInputStyles}
            itemTextStyle={styles.dropdownTextStyles}
            data={categoryList}
            maxHeight={300}
            labelField="value"
            valueField="key"
            placeholder={'Seleccione una opción'}
            searchPlaceholder="Search..."
            value={selectedCategory}
            onChange={onChangeCategory}
          />
          <View style={appStyles.mt10}>
            <Label>{'Estado'}</Label>
          </View>
          <Dropdown
            style={[styles.dropdownBoxStyles]}
            placeholderStyle={styles.dropdownTextStyles}
            selectedTextStyle={styles.dropdownTextStyles}
            inputSearchStyle={styles.dropdownInputStyles}
            itemTextStyle={styles.dropdownTextStyles}
            data={StatusList}
            maxHeight={300}
            labelField="value"
            valueField="key"
            placeholder={'Seleccione una estado'}
            searchPlaceholder="Search..."
            value={selectedStatus}
            onChange={onChangeStatus}
          />
        </View>
      </KeyboardAwareScroll>
      <ButtonCustom
        title={isEdit ? 'Guardar Cambios' : 'Guardar'}
        onPress={onSave}
        loading={loading}
      />
    </View>
  );
};

export default MaterialEditScreen;

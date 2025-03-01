import React from 'react';
import { FlatList } from 'react-native';
import MaterialItem from './MaterialItem';
import { IMaterialItem } from '../../interfaces';

const data: IMaterialItem[] = [
  {
    id: 1,
    nombre: 'Hola este es un item',
    descripcion: 'Esta es una descripcion de este item',
    estado: 'ACTIVO',
    stock_minimo: 100,
    categoria_id: 1,
    actualizado_a: '10-10-2024',
    creado_a: '10-10-2024',
    category: {
      id: 100,
      nombre: 'Categoria 1',
      estado: 'ACTIVO',
    },
  },
  {
    id: 2,
    nombre: 'Hola este es un item',
    descripcion: 'Esta es una descripcion de este item',
    estado: 'ACTIVO',
    stock_minimo: 100,
    categoria_id: 1,
    actualizado_a: '10-10-2024',
    creado_a: '10-10-2024',
    category: {
      id: 100,
      nombre: 'Categoria 1',
      estado: 'ACTIVO',
    },
  },
  {
    id: 3,
    nombre: 'Hola este es un item',
    descripcion: 'Esta es una descripcion de este item',
    estado: 'ACTIVO',
    stock_minimo: 100,
    categoria_id: 1,
    actualizado_a: '10-10-2024',
    creado_a: '10-10-2024',
    category: {
      id: 100,
      nombre: 'Categoria 1',
      estado: 'ACTIVO',
    },
  },
];

const MaterialList = () => {
  const _renderItem = ({ item, index }: { item: IMaterialItem; index: number }) => (
    <MaterialItem {...item} key={index} />
  );

  return <FlatList data={data} renderItem={_renderItem} />;
};
export default MaterialList;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMaterialList, postMaterial } from '../../services';
import { IMaterialItem } from '../../interfaces';

export const getMaterialListAction = createAsyncThunk(
  'getMaterialListAction',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getMaterialList();

      if (response.data.status) {
        const data: IMaterialItem[] = [
          {
            id: 12,
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
            id: 10,
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
        return data;
      }

      return rejectWithValue({
        errorMessage: response.data?.msj || 'No se pudo calificar a este proveedor',
      });
    } catch (error) {
      return rejectWithValue({
        errorMessage: 'No se pudo calificar a este proveedor',
      });
    }
  }
);

export const createMaterialAction = createAsyncThunk(
  'createMaterialAction',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await postMaterial(data);

      if (response.data.status) {
        const data = response.data.data;
        return {
          successMessage: 'Material creado con éxito',
        };
      }

      return rejectWithValue({
        errorMessage: response.data?.msj || 'No se pudo crear el registro',
      });
    } catch (error) {
      return rejectWithValue({
        errorMessage: 'No se pudo crear el registro',
      });
    }
  }
);

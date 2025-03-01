import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMaterialList, postMaterial } from '../../services';

export const geCategorylListAction = createAsyncThunk(
  'geCategorylListAction',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getMaterialList();

      if (response.data.status) {
        const data = [];
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

export const createCategoryAction = createAsyncThunk(
  'createCategoryAction',
  async (data, { rejectWithValue }) => {
    try {
      const response = await postMaterial(data);

      if (response.data.status) {
        const dataResponse = response.data.data;
        return {
          successMessage: 'Categoría creada con éxito',
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

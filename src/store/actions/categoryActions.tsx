import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoryList, postMaterial } from '../../services';

export const getCategorylListAction = createAsyncThunk(
  'geCategorylListAction',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCategoryList();

      if (response.data.status) {
        const data = response.data.data;
        const mapped = [...data].map((x) => ({ key: x.id, value: x.nombre, ...x }));

        return {
          data: mapped,
        };
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

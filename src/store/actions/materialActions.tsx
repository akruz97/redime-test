import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteMaterial, getMaterialList, postMaterial, putMaterial } from '../../services';

export const getMaterialListAction = createAsyncThunk(
  'getMaterialListAction',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getMaterialList();

      if (response.data.status) {
        const data = response.data.data;
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
        const materialCreated = response.data.data;
        return {
          data: materialCreated,
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

export const editMaterialAction = createAsyncThunk(
  'editMaterialAction',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await putMaterial(data);
      if (response.data.status) {
        return {
          data: data,
          successMessage: 'Material actualizado con éxito',
        };
      }

      return rejectWithValue({
        errorMessage: response.data?.msj || 'No se pudo actualizar el registro',
      });
    } catch (error) {
      return rejectWithValue({
        errorMessage: 'No se pudo actualiza el registro',
      });
    }
  }
);

export const deleteMaterialAction = createAsyncThunk(
  'deleteMaterialAction',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await deleteMaterial(id);
      if (response.data.status) {
        return {
          id: id,
          successMessage: 'Material eliminado con éxito',
        };
      }

      return rejectWithValue({
        errorMessage: response.data?.msj || 'No se pudo eliminar el registro',
      });
    } catch (error) {
      return rejectWithValue({
        errorMessage: 'No se pudo eliminar el registro',
      });
    }
  }
);

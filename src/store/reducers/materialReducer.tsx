import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createMaterialAction,
  deleteMaterialAction,
  editMaterialAction,
  getMaterialListAction,
} from '../actions/materialActions';

interface MaterialState {
  loading: boolean;
  successCreated: string | null;
  errorCreated: string | null;
  successEdit: string | null;
  errorEdit: string | null;
  successDelete: string | null;
  materialList: [];
}

const initialState: MaterialState = {
  loading: false,
  errorCreated: null,
  successCreated: null,
  materialList: [],
  successEdit: null,
  errorEdit: null,
  successDelete: null,
};

const materialSlice = createSlice({
  name: 'materials',
  initialState: initialState,
  reducers: {
    resetFlagsMaterial(state) {
      state.loading = false;
      state.errorCreated = null;
      state.successCreated = null;
      state.successEdit = null;
      state.errorEdit = null;
      state.successDelete = null;
    },
  },
  extraReducers(builder) {
    //Customer Rating
    builder.addCase(createMaterialAction.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(
        createMaterialAction.fulfilled,
        (state: MaterialState, action: PayloadAction<any>) => {
          state.loading = false;
          state.successCreated = action.payload.successMessage;
          state.errorCreated = null;
          state.materialList = [action.payload.data, ...state.materialList];
        }
      ),
      builder.addCase(
        createMaterialAction.rejected,
        (state: MaterialState, action: PayloadAction<any>) => {
          state.loading = false;
          state.successCreated = null;
          state.errorCreated = action.payload.errorMessage;
        }
      ),
      builder.addCase(getMaterialListAction.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(
        getMaterialListAction.fulfilled,
        (state: MaterialState, action: PayloadAction<any>) => {
          state.loading = false;
          state.materialList = action.payload;
          // state.successCreated = action.payload.successMessage;
          // state.errorCreated = null;
        }
      ),
      builder.addCase(
        getMaterialListAction.rejected,
        (state: MaterialState, action: PayloadAction<any>) => {
          state.loading = false;
          state.materialList = [];
        }
      ),
      builder.addCase(editMaterialAction.pending, (state, action) => {
        // state.loading = true;
      }),
      builder.addCase(
        editMaterialAction.fulfilled,
        (state: MaterialState, action: PayloadAction<any>) => {
          // state.loading = false;
          state.successEdit = action.payload.successMessage;
          state.errorEdit = null;
          state.materialList = [...state.materialList];
        }
      ),
      builder.addCase(
        editMaterialAction.rejected,
        (state: MaterialState, action: PayloadAction<any>) => {
          // state.loading = false;
          state.successEdit = null;
          state.errorEdit = action.payload.errorMessage;
        }
      );

    builder.addCase(deleteMaterialAction.pending, (state, action) => {
      // state.loading = true;
    }),
      builder.addCase(
        deleteMaterialAction.fulfilled,
        (state: MaterialState, action: PayloadAction<any>) => {
          // state.loading = false;
          state.successDelete = action.payload.successMessage;
          state.materialList = [...state.materialList].filter((x) => x.id !== action.payload.id);
        }
      ),
      builder.addCase(
        deleteMaterialAction.rejected,
        (state: MaterialState, action: PayloadAction<any>) => {
          // state.loading = false;
          state.successDelete = null;
        }
      );
  },
});

export const { resetFlagsMaterial } = materialSlice.actions;

export default materialSlice.reducer;

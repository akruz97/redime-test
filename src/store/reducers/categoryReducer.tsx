import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createMaterialAction } from '../actions/materialActions';

interface CategoryState {
  loading: boolean;
  successCreated: string | null;
  errorCreated: string | null;
  categoryList: [];
}

const initialState: CategoryState = {
  loading: false,
  errorCreated: null,
  successCreated: null,
  categoryList: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    resetFlagsRating(state) {
      state.loading = false;
      state.errorCreated = null;
      state.successCreated = null;
    },
  },
  extraReducers(builder) {
    //Customer Rating
    builder.addCase(createMaterialAction.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(
        createMaterialAction.fulfilled,
        (state: CategoryState, action: PayloadAction<any>) => {
          state.loading = false;
          state.successCreated = action.payload.successMessage;
          state.errorCreated = null;
        }
      ),
      builder.addCase(
        createMaterialAction.rejected,
        (state: CategoryState, action: PayloadAction<any>) => {
          state.loading = false;
          state.successCreated = null;
          state.errorCreated = action.payload.errorMessage;
        }
      ),
  }
});

export const { resetFlagsRating } = materialSlice.actions;

export default materialSlice.reducer;

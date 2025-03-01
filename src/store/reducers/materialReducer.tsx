import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createMaterialAction } from '../actions/materialActions';

interface MaterialState {
  loading: boolean;
  successCreated: string | null;
  errorCreated: string | null;
  materialList: [];
}

const initialState: MaterialState = {
  loading: false,
  errorCreated: null,
  successCreated: null,
  materialList: [],
};

const materialSlice = createSlice({
  name: 'materials',
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
        (state: MaterialState, action: PayloadAction<any>) => {
          state.loading = false;
          state.successCreated = action.payload.successMessage;
          state.errorCreated = null;
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
  }
});

export const { resetFlagsRating } = materialSlice.actions;

export default materialSlice.reducer;

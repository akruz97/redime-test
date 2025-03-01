import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategorylListAction } from '../actions/categoryActions';

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
    builder.addCase(getCategorylListAction.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(
        getCategorylListAction.fulfilled,
        (state: CategoryState, action: PayloadAction) => {
          state.loading = false;
          state.categoryList = action.payload.data;
        }
      ),
      builder.addCase(
        getCategorylListAction.rejected,
        (state: CategoryState, action: PayloadAction<any>) => {
          state.loading = false;
          state.categoryList = [];
        }
      );
  },
});

export const { resetFlagsRating } = categorySlice.actions;

export default categorySlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

//

interface AppState {
  sideBar: {
    open: boolean;
    selectedNavItem?: string;
  }
  controlBox: {
    open: boolean;
  }
  status?: string;
}

const initialState: AppState = {
  sideBar: {
    open: false,
    selectedNavItem: undefined,
  },
  controlBox: {
    open: false,
  },
  // Status can be Loading, Success or Failed
  status: undefined,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.sideBar.open = true;
    },
    closeSideBar: (state) => {
      state.sideBar.open = false;
    },
    openControlBox: (state) => {
      state.controlBox.open = true;
    },
    closeControlBox: (state) => {
      state.controlBox.open = false;
    },
    updateSelectedNavItem: (state, action: PayloadAction<string>) => {
      state.sideBar.selectedNavItem = action.payload;
    },
  },
  // Below you could have Async Thunks
});

export const {
  openSideBar,
  closeSideBar,
  openControlBox,
  closeControlBox,
  updateSelectedNavItem,
} = appSlice.actions;

// Other code such as selectors can use the imported RootState type
export const selectCount = (state: RootState): AppState => state.app;

export default appSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from 'services/animeApi';

interface SearchState {
  inputValue: string;
  valueToSearch: string;
  characterInfo: null | ICharacter;
}

const initialState: SearchState = {
  inputValue: '',
  valueToSearch: '',
  characterInfo: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setValueToSearch: (state) => {
      state.valueToSearch = state.inputValue;
    },
    setCharacterInfo: (state, action: PayloadAction<null | ICharacter>) => {
      state.characterInfo = action.payload;
    },
  },
});

export const { setInputValue, setValueToSearch, setCharacterInfo } = searchSlice.actions;

export default searchSlice.reducer;

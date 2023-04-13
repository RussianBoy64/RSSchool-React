import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IDeliveryCard {
  name: string;
  date: string;
  packaging: string;
  pay: string;
  photo: string;
  agreement: string;
}

interface FormState {
  isFormSubmited: boolean;
  deliveryCards: IDeliveryCard[];
}

const initialState: FormState = {
  isFormSubmited: false,
  deliveryCards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setIsFormSubmited: (state, action: PayloadAction<boolean>) => {
      state.isFormSubmited = action.payload;
    },
    addDeliveryCard: (state, action: PayloadAction<IDeliveryCard>) => {
      state.deliveryCards = [...state.deliveryCards, action.payload];
    },
  },
});

export const { setIsFormSubmited, addDeliveryCard } = formSlice.actions;

export default formSlice.reducer;

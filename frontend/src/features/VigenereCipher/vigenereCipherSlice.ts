import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { decodeTheMessage, encodeTheMessage } from './vigenereCipherThunk.ts';

interface IInitial {
  messageToEncode: string;
  messageToDecode: string;
  loading: boolean;
  error: boolean;
}

const initialState: IInitial = {
  messageToEncode: '',
  messageToDecode: '',
  loading: false,
  error: false,
};

export const messageToEncodeSlice = (state: RootState) => state.vigenereCipher.messageToEncode;
export const messageToDecodeSlice = (state: RootState) => state.vigenereCipher.messageToDecode;
export const loadingSlice = (state: RootState) => state.vigenereCipher.loading;

const vigenereCipherSlice = createSlice({
  name: 'VigenereCipher',
  initialState,
  reducers: {
    getMessageToEncode: (state, action: PayloadAction<string>) => {
      state.messageToEncode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(encodeTheMessage.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(encodeTheMessage.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = false;
        state.messageToEncode = action.payload;
      })
      .addCase(encodeTheMessage.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(decodeTheMessage.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(decodeTheMessage.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = false;
        state.messageToDecode = action.payload;
      })
      .addCase(decodeTheMessage.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export const vigenereCipherReducer = vigenereCipherSlice.reducer;
export const {getMessageToEncode} = vigenereCipherSlice.actions;

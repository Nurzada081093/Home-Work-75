import { createSlice } from '@reduxjs/toolkit';

interface IInitial {
  message: string;
  password: string;
  messageToEncode: string;
  messageToDecode: string;
  loading: boolean;
  error: boolean;
}

const initialState: IInitial = {
  message: '',
  password: '',
  messageToEncode: '',
  messageToDecode: '',
  loading: false,
  error: false,
};

const vigenereCipherSlice = createSlice({
  name: 'VigenereCipher',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
});

export const vigenereCipherReducer = vigenereCipherSlice.reducer;


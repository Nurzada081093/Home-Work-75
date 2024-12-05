import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosRequest from '../../axiosRequest.ts';
import { IMessage } from '../../types';

export const encodeTheMessage = createAsyncThunk<string, IMessage>(
  'VigenereCipher/encodeTheMessage',
  async (cipherMessage) => {
    const message = await axiosRequest.post('/encode', cipherMessage);
    return message.data.encode;
  }
);

export const decodeTheMessage = createAsyncThunk<string, IMessage>(
  'VigenereCipher/decodeTheMessage',
  async (cipherMessage) => {
    const message = await axiosRequest.post('/decode', cipherMessage);
    return message.data.decode;
  }
);
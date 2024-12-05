import { Box, Button, Container, TextField } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../app/hooks.ts';
import {
  getMessageToEncode,
  messageToDecodeSlice,
  messageToEncodeSlice,
} from '../vigenereCipherSlice.ts';
import { ChangeEvent, useState } from 'react';
import { decodeTheMessage, encodeTheMessage } from '../vigenereCipherThunk.ts';

const VigenereCipher = () => {
  const [message, setMessage] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const messageToEncode = useAppSelector(messageToEncodeSlice);
  const messageToDecode = useAppSelector(messageToDecodeSlice);
  // const loading = useAppSelector(loadingSlice);
  const dispatch = useAppDispatch();

  const messageToGet = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMessage(value);
  };

  const passwordToGet = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const encodeToGet = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(getMessageToEncode(value));
  };

  const sendEncodeMessage = async () => {
    const userMessage = {
      password,
      message,
    };

    await dispatch(encodeTheMessage(userMessage));
    setMessage('');
    setPassword('');
  };

  const sendDecodeMessage = async () => {
    const userMessage = {
      password,
      message: messageToEncode,
    };
    await dispatch(decodeTheMessage(userMessage));
  };

  return (
    <Container>
      <Box sx={{margin: '20px 0'}}>
        <TextField
          fullWidth
          id="Decoded message"
          name="Decoded message"
          label="Decoded message"
          variant="outlined"
          value={message.trim().length === 0 ? messageToDecode : message}
          onChange={messageToGet}
        />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '50%', margin: '20px 0'}}>
        <TextField
          type="password"
          id="password"
          name="password"
          label="Password"
          value={password}
          onChange={passwordToGet}
        />
        <Button type="button" onClick={sendEncodeMessage}><ArrowDownward/></Button>
        <Button type="button" onClick={sendDecodeMessage}><ArrowUpward/></Button>
      </Box>
      <Box sx={{margin: '20px 0'}}>
        <TextField
          fullWidth
          id="Encode message"
          name="Encode message"
          label="Encode message"
          variant="outlined"
          value={messageToEncode}
          onChange={encodeToGet}
        />
      </Box>
    </Container>
  );
};

export default VigenereCipher;



import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../app/hooks.ts';
import { loadingSlice, messageToDecodeSlice, messageToEncodeSlice, } from '../vigenereCipherSlice.ts';
import { ChangeEvent, useState } from 'react';
import { decodeTheMessage, encodeTheMessage } from '../vigenereCipherThunk.ts';
import { toast } from 'react-toastify';
import Loader from '../../../components/UI/Loader/Loader.tsx';

const VigenereCipher = () => {
  const [message, setMessage] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const messageToEncode = useAppSelector(messageToEncodeSlice);
  const messageToDecode = useAppSelector(messageToDecodeSlice);
  const loading = useAppSelector(loadingSlice);
  const dispatch = useAppDispatch();

  const messageToGet = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMessage(value);
  };

  const passwordToGet = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const sendEncodeMessage = async () => {
    if (password.trim().length === 0 || message.trim().length === 0) {
      toast.error('Enter the message end the password!');
    } else {
      const userMessage = {
        password,
        message,
      };

      await dispatch(encodeTheMessage(userMessage));
      setMessage('');
      setPassword('');
    }
  };

  const sendDecodeMessage = async () => {
    if (password.trim().length === 0) {
      toast.error('Enter the password!');
    } else {
      const userMessage = {
        password,
        message: messageToEncode,
      };
      await dispatch(decodeTheMessage(userMessage));
    }
  };

  return (
    <>
      {loading ? <Loader/> :
        <Container>
          <Box sx={{margin: '8% 20%', backgroundColor: 'rgba(234,237,234,0.89)', padding: '30px 50px', borderRadius: '10px'}}>
            <Typography variant="h3" sx={{textAlign: 'center'}}>Chiffre de Vigenère</Typography>
            <Box sx={{margin: '30px 0'}}>
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
            <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',  margin: '30px 0'}}>
              <TextField
                sx={{width: '70%'}}
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
            <Box sx={{margin: '30px 0'}}>
              <TextField
                fullWidth
                id="Encode message"
                name="Encode message"
                label="Encode message"
                variant="outlined"
                value={messageToEncode}
                onChange={messageToGet}
              />
            </Box>
          </Box>
        </Container>
      }
    </>
  );
};

export default VigenereCipher;



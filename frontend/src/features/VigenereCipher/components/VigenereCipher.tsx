import { Box, Button, Container, TextField } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const VigenereCipher = () => {


  return (
    <Container>
      <Box sx={{margin: '20px 0'}}>
        <TextField
          fullWidth
          id="Decoded message"
          name="Decoded message"
          label="Decoded message"
          variant="outlined"
          // value={userMessage.message}
          // onChange={onChange}
        />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '50%', margin: '20px 0'}}>
        <TextField
          type="password"
          id="password"
          name="password"
          label="Password"
          // value={userMessage.password}
          // onChange={onChange}
        />
        <Button type="button"><ArrowDownward/></Button>
        <Button type="button"><ArrowUpward/></Button>
      </Box>

      <Box sx={{margin: '20px 0'}}>
        <TextField
          fullWidth
          id="Encode message"
          name="Encode message"
          label="Encode message"
          variant="outlined"
          // value={form.title}
          // onChange={onChange}
        />
      </Box>
    </Container>
  );
};

export default VigenereCipher;
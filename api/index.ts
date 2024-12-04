import express from "express";
import cors from "cors";
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const password = 'success';
const Vigenere = require('caesar-salad').Vigenere;

app.post('/encode', (req, res) => {
    res.send({ encode: Vigenere.Cipher(password).crypt(req.body.message)});
});

app.post('/decode', (req, res) => {
    res.send({ decode: Vigenere.Decipher(password).crypt(req.body.message)});
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
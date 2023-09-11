const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 8001;
const secretKey = 'yourSecretKey';

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const fs = require('fs');

function getUsers() {
    const rawData = fs.readFileSync('users.json');
    return JSON.parse(rawData);
}  

app.post('/register', (req, res) => {
    const { username, name, email, password, confirmPassword } = req.body;

    // Verificando se o usuário já existe no arquivo JSON usando o email ou o username
    const usersData = getUsers().users;
    const existingUserByEmail = usersData.find(user => user.email === email);
    const existingUserByUsername = usersData.find(user => user.username === username);

    if (existingUserByEmail || existingUserByUsername) {
        return res.status(400).json({ error: 'O usuário com o mesmo email ou username já existe.' });
    }

    // Verificando se a senha e a confirmação de senha são iguais
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'A senha e a confirmação de senha não coincidem.' });
    }

    // Crie um novo usuário e adicione-o ao arquivo JSON
    const newUser = { username, name, email, password };
    usersData.push(newUser);

    // Salve os dados atualizados de volta no arquivo JSON
    fs.writeFileSync('users.json', JSON.stringify({ users: usersData }, null, 2));

    return res.status(201).json({ message: 'Usuário registrado com sucesso!'});
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
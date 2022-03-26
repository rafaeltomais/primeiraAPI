const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

//Criação da rota enviar pelo método POST
app.post('/enviar', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    return res.send(`Dados inseridos com sucesso!!</br>Nome: ${name}</br>E-mail: ${email}`);
  });
//Criação da rota obter pelo método GET  
app.get('/obter', (req, res) => {

    return res.send('Resposta da aquisição');
  });

app.listen(port, () => console.log(`Servidor aberto na porta: ${port}!`));
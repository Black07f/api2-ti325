require('dotenv').config(); // Carrega as variáveis do arquivo .env para o process.env
const express = require('express');
const app = express();

app.use(express.json());
// rota ou endpoint
                 // request, response   
app.get('/ping', (req, res) => {
    return res.json({message:'ping pong'});
})

app.post('/usuario', (req, res) =>{
   const { nome, idade } =  req.body;

   // Transfprmações
   // 1. Converte o nome para MAIUSCULAS
   // 2. Calcula o ano aproximado de nascimento
   // 3. Adiciona um status personalizado
   const nomeFormatado = nome ? nome. toUpperCase() : 'NÃO INFORMADO';
   const anoNascimento = new Date().getFullYear() - idade;

   return res.json({
        mensagem: 'Dados recebidos e processados com sucesso',
        dadosOriginais: {nome, idade},
        dadosProcessados:{
            nomeFormatado,
            idade,
            anoNascimentoAproximado: anoNascimento,
            perfil: idade >= 18 ? 'Adulto' : 'Adolescente'
        }
   })
})








const PORT = process.env.PORT;
app.listen(PORT, () => {
//  console.log('Servidor rodando... em http://localhost:3500')
    console.log(`Servidor rodando... em http://localhost:${PORT}`)
})

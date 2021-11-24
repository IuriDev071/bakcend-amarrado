const express = require('express')

const PORT = process.env.PORT || 3005

var http = require('http')

const app = express()

app.use(express.json())

// URL default
app.get('/', (req, res) => {
    res.json('Backend Rodando').status(200)
})

// Read for User
app.get('/users/', async (req, res) => {
    const users = await [
        {
            id: 1,
            nome: 'Cardoso',
            email: 'amon.ra@gmail.com',
            senha: 'oby123456'
        },
        {
            id: 2,
            nome: 'Matiello',
            email: 'iuri@gmail.com',
            senha: 'oby654321'
        },
        {
            id: 3,
            nome: 'Antonio',
            email: 'tony@gmail.com',
            senha: '123123'
        }
    ]

    res.json(users).status(200)
})

// Read for Services
app.get('/services/', async (req, res) => {
    const services = await [
        {
            id_servico: 1,
            data_entrada: '2021-07-20',
            data_saida: '2021-07-29',
            produto: 'MacBook',
            descricao: 'Problema no SSD',
            preco_mobra: '0,00',
            preco_peca: '129,00'
        },
        {
            id_servico: 2,
            data_entrada: '2021-09-23',
            data_saida: '2021-09-30',
            produto: 'Mac M1',
            descricao: 'Não liga',
            preco_mobra: '200,00',
            preco_peca: '223,00'
        },
        {
            id_servico: 3,
            data_entrada: '2021-09-31',
            data_saida: '2021-10-02',
            produto: 'iMac',
            descricao: 'Fica reiniciando ao ligar',
            preco_mobra: '200,00',
            preco_peca: '399,80'
        }
    ]

    res.json(services).status(200)
})

app.get('/duda/', async (req, res) => {
    const teste = await [
        {
            Nome: 'Tunico',
            Funcao: 'Só dorme',
            Sentimento: 'Dormir mais'
        },
        {
            Nome: 'Duda',
            Funcao: 'Ser linda',
            Namorado: 'Amon Lindo',
            Sentimento: 'Amon te ama'
        }
    ]

    res.json(teste).status(200)
})

// Create User
// app.post('/usuarios/', async (req, res) => {

//     await database.sync();

//     let novoUsuario = await Usuario.create({
//         nome: 'Tony',
//         email: 'abertolim@gmail.com',
//         senha: '656565',
//     })

//     res.json(novoUsuario).status(201, 'Created')

//     // Validando cadastro do Usuario
//     // if (novoUsuario == usuarioCadastrado) {
//     //     return res.json('Usuário já existe').status(400)
//     // } else {
//     //     return await novoUsuario
//     // }
// })

// Create a Service
// app.post('/servicos/', async (req, res) => {

//     await database.sync()

//     const novoUsuario = req.body

//     res.json(
//         // Dados enraizados
//         await Servico.create({
//             produto: 'Macbook Pro',
//             data_entrada: '2021-07-29',
//             data_saida: '2021/07/31',
//             descricao: 'Problema no SSD',
//             preco_mobra: '780',
//             preco_peca: '230',
//             id: novoUsuario.id
//         })
//     )
//     res.status(200, 'Created')
// })

var server = http.createServer(app)
server.listen(PORT)
console.log("Rodando na porta: " + PORT)
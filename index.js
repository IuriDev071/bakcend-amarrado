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
            email: 'abertolim@gmail.com',
            senha: '123123'
        },
        {
            id: 4,
            nome: 'Tonhão do Uber',
            email: 'tony@gmail.com',
            senha: '123123456'
        },
        {
            id: 5,
            nome: 'José',
            email: 'josé@gmail.com',
            senha: '678901'
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
            preco_peca: '129,00',
            valor_total: '129,00'
        },
        {
            id_servico: 2,
            data_entrada: '2021-09-23',
            data_saida: '2021-09-30',
            produto: 'Mac M1',
            descricao: 'Não liga',
            preco_mobra: '200,00',
            preco_peca: '223,00',
            valor_total: '423,00'
        },
        {
            id_servico: 3,
            data_entrada: '2021-10-22',
            data_saida: '2021-10-31',
            produto: 'M1 Pro',
            descricao: 'Tela preta',
            preco_mobra: '200,00',
            preco_peca: '400,80',
            valor_total: '600,80'
        },
        {
            id_servico: 4,
            data_entrada: '2021-09-31',
            data_saida: '2021-10-02',
            produto: 'MacBook Pro',
            descricao: 'Fica reiniciando ao ligar',
            preco_mobra: '200,00',
            preco_peca: '330,60',
            valor_total: '530,60'
        },
        {
            id_servico: 5,
            data_entrada: '2021-09-30',
            data_saida: '2021-10-05',
            produto: 'iMac 2019',
            descricao: 'Fica reiniciando',
            preco_mobra: '300,00',
            preco_peca: '389,80',
            valor_total: '689,80'
        }
    ]

    res.json(services).status(200)
})

// Read for Services
app.get('/notifications/', async (req, res) => {
    const notifications = await [
        {
            Titulo: 'Você tem um serviço pronto !',
            Desc: 'Confira mais clicando aqui',
            Page: 'Ods'
        },
        {
            Titulo: 'Você sabia de nossa história?',
            Desc: 'Saiba mais clicando aqui',
            Page: 'Ods'
        },
        {
            Titulo: 'Seja bem vindo a BSD Tecnologia !',
            Desc: 'É um prazer ter você em nossa plataforma',
            Page: 'Ods'
        }
    ]

    res.json(notifications).status(200)
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
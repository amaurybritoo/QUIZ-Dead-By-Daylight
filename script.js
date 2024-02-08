const perguntas = [
    {
        pergunta: 'Qual é o nome do mapa mais antigo de Dead by Daylight?',
        respostas: ['MacMillan Estate', 'Autohaven Wreckers', 'Coldwind Farm', 'Haddonfield', 'Red Forest'],
        correta: 0
    },
    {
        pergunta: 'Qual é o nome do assassino que usa um gancho como arma?',
        respostas: ['The Cannibal', 'The Hillbilly', 'The Wraith', 'The Trapper', 'The Nurse'],
        correta: 2
    },
    {
        pergunta: 'Quem é responsável pela criação do Dead by Daylight?',
        respostas: ['Behaviour Interactive', 'Bethesda Game Studios', 'Ubisoft', 'Capcom', 'Valve Corporation'],
        correta: 0
    },
    {
        pergunta: 'Quantos metros um sobrevivente precisa estar do assassino para ouvir a música de terror?',
        respostas: ['20 metros', '32 metros', '36 metros', '24 metros', '28 metros'],
        correta: 1
    },
    {
        pergunta: 'Qual é o nome do item que permite aos sobreviventes curar uns aos outros mais rapidamente?',
        respostas: ['Kit Médico', 'Kit de Primeiros Socorros', 'Kit de Sobrevivência', 'Kit de Resgate', 'Kit de Cura'],
        correta: 1
    },
    {
        pergunta: 'Qual é o nome da entidade misteriosa que controla o universo de Dead by Daylight?',
        respostas: ['The Entity', 'The Overseer', 'The Guardian', 'The Presence', 'The Essence'],
        correta: 0
    },
    {
        pergunta: 'Qual é a habilidade única do assassino "The Hag"?',
        respostas: ['Teletransporte', 'Camuflagem', 'Visão ampliada', 'Vôo', 'Invocar clones'],
        correta: 0
    },
    {
        pergunta: 'Quantos sobreviventes podem escapar usando a porta de saída?',
        respostas: ['2', '3', '4', '5', 'Todos'],
        correta: 4
    },
    {
        pergunta: 'Quais são os três estatutos principais que os sobreviventes podem ganhar após uma partida?',
        respostas: ['Altruístico, Evasivo, de Sobrevivência', 'Brutal, de Sobrevivência, de Caza', 'Sangrento, Cauteloso, de Sobrevivência', 'Impiedoso, Desrespeitoso, de Sobrevivência', 'Honroso, Silencioso, de Sobrevivência'],
        correta: 0
    },
    {
        pergunta: 'Qual é a quantidade máxima de pontos que um sobrevivente pode obter em uma categoria após uma partida?',
        respostas: ['8000', '9000', '10000', '11000', '12000'],
        correta: 4
    }
];

const certas = new Set()
const totalPerguntas = perguntas.length
const totalAcertos = document.querySelector('#acertos span')


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template') //selecionou o template do html e trouxe para o js, armazenando na constante 'template'


for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true) //clonou o conteudo do template e armazenou na constante 'quizItem', cloneNode(true) clona todos os nodes/filhos
    quizItem.querySelector('h3').textContent = item.pergunta //selecionou o "h3" e substituiu os valores por item.pergunta que no caso são as perguntas

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta - ' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {        //função criada para verificar se houve interação no input
            const estaCorreta = event.target.value == item.correta
            if (estaCorreta == true) {
                certas.add(item)
            }
            totalAcertos.textContent = certas.size + ' de ' + totalPerguntas
            //alert(certas.size)
        }


        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()



    quiz.appendChild(quizItem) // Coloca a pergunta na tela
}
const chatbotSteps = [
    {
        id: "1",
        message: "Olá! 😊\nComo posso tornar seu dia melhor hoje? Por favor, escolha uma opção:",
        trigger: "2"
    },
    {
        id: "2",
        options: [
            { value: 'marcar', label: 'Marcar uma consulta psicológica', trigger: '3' },
            //ajeitar
            { value: 'desmarcar', label: 'Desmarcar uma consulta psicológica', trigger: '3' }
            // trigger: "5" }
        ]
    },
    {
        id: "3",
        message: "Ótima escolha! Você está buscando agendar uma consulta psicológica ou tem outra dúvida?",
        trigger: "4",
    },
    {
        id: "4",
        options: [
            { value: 1, label: "Sim, quero marcar uma consulta psicológica", trigger: "5" },
            //ajeitar
            { value: 2, label: "Não, tenho outra dúvida", end: true }
                // trigger: "11"
        ],
    },
    {
        id: "5",
        message: "Antes de continuarmos, preciso fazer o seu cadastro. Pode me fornecer o seu nome completo, por favor?", trigger: "name"
    },
    {
        id: "name",
        user: true,
        trigger: "6"
    },
    {
        id: "6",
        message: ({previousValue}) => `Ótimo, ${previousValue}! Estamos quase lá. Agora, para escolher o melhor horário, me diga, em qual período do dia você costuma estar mais disponível?`,
        trigger: "7"
    },
    {
        id: "7",
        options: [
            {
                value: 1, label: "Manhã",
            },
            {
                value: 2, label: "Tarde"
            },
            {
                value: 3, label: "Noite"
            }
        ]
    }
];

export default chatbotSteps;
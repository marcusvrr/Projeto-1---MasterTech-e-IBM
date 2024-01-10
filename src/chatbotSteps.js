const chatbotSteps = (updateValues) => {    
    const steps = [
        {
            id: '1',
            message: 'Olá! Como posso tornar seu dia melhor hoje? Por favor, escolha uma opção:',
            trigger: '2'
        },
        {
            id: '2',
            options: [
                { value: 1, label: '1. Marcar uma consulta psicológica', trigger: '3' },
                { value: 2, label: '2. Desmarcar uma consulta psicológica', trigger: 'uncheckAppointment' }
            ]
        },
        {
            id: 'uncheckAppointment',
            message: 'Para desmarcar a consulta, precisamos garantir que estamos atualizados. Poderia informar seu nome completo, por favor?',
            trigger: 'nameUncheckAppointment'

        },
        {
            id: '3',
            message: 'Você está buscando agendar uma consulta psicológica ou tem outra dúvida?',
            trigger: '4',
        },
        {
            id: '4',
            options: [
                { value: 1, label: '1. Sim, quero marcar uma consulta psicológica', trigger: '5' },
                { value: 2, label: '2. Não, tenho outra dúvida', trigger: 'information' }
            ],
        },
        {
            id: '5',
            message: 'Antes de continuarmos, preciso fazer o seu cadastro. Pode me fornecer o seu nome completo, por favor?', 
            trigger: 'name'
        },
        {
            id: 'name',
            user: true,
            trigger: (value) => {
                updateValues.setName(value.value)
                return '6'
            },
        },
        {
            id: 'nameUncheckAppointment',
            user: true,
            trigger: (value) => {
                updateValues.setName(value.value)
                return 'processCompletion'
            },
        },
        {
            id: 'information',
            message: 'Legal! Se você tiver outras dúvidas ou quiser saber mais sobre a abordagem fenomenológica existencial, estou à disposição. Essa abordagem foca na compreensão profunda da sua experiência única. Quer saber mais, marcar uma consulta ou voltar ao menu inicial?',
            trigger: 'informationOptions'
        },
        {
            id: 'informationOptions',
            options: [
                { value: 1, label: '1. Marcar consulta', trigger: '5' },
                { value: 2, label: '2. Saber mais', trigger: 'about' },
                { value: 3, label: '3. Voltar ao menu inicial', trigger: '1' }
            ]
        },
        {
            id: 'about',
            message: 'Ficarei feliz em fornecer informações sobre o atendimento psicológico com a abordagem fenomenológica existencial. Essa abordagem foca na compreensão profunda da experiência humana, considerando o significado subjetivo da vivência de cada indivíduo. A terapia fenomenológica existencial busca explorar questões fundamentais, como liberdade, responsabilidade, e a busca por sentido na vida. Seu objetivo é compreender as perspectivas únicas de cada pessoa, promovendo um ambiente de reflexão e autoconhecimento. Se essa abordagem ressoa com você, ficarei feliz em agendar uma consulta para explorarmos mais profundamente as suas experiências. 😊',
            trigger: 'aboutOptions'
        },
        {
            id: 'aboutOptions',
            options: [
                { value: 1, label: '1. Marcar consulta', trigger: '5' },
                { value: 2, label: '2. Voltar ao menu inicial', trigger: 1 }
            ]
        },
        {
            id: '6',
            message: ({previousValue}) => `Ótimo, ${previousValue}! Estamos quase lá. Agora, para escolher o melhor horário, me diga, em qual período do dia você costuma estar mais disponível?`,
            trigger: 'timeOfDay'
        },
        {
            id: 'timeOfDay',
            options: [
                {
                    value: 1, label: '1. Manhã', trigger: () => {
                        updateValues.setTimeOfDay('manhã');
                        return '8';
                    }
                },
                {
                    value: 2, label: '2. Tarde', trigger: () => {
                        updateValues.setTimeOfDay('tarde');
                        return '8';
                    }
                },
                {
                    value: 3, label: '3. Noite', trigger: () => {
                        updateValues.setTimeOfDay('noite');
                        return '8';
                    }
                }
            ]
        },
        {
            id: '8',
            message: 'Entendi! Para ajustarmos à sua agenda, me diga, qual dia da semana seria o ideal para você?',
            trigger: 'dayOfWeek'
        },
        {
            id: 'dayOfWeek',
            options: [
                {
                    value: 1, label: '1. Segunda-feira', trigger: () => {
                        updateValues.setDayOfWeek('segunda-feira');
                        return 'end'
                    }
                },
                {
                    value: 2, label: '2. Quarta-feira', trigger: () => {
                        updateValues.setDayOfWeek('quarta-feira');
                        return 'end'
                    }
                },
                {
                    value: 3, label: '3. Sexta-feira', trigger: () => {
                        updateValues.setDayOfWeek('sexta-feira');
                        return 'end'
                    }
                }
            ]
        },
        {
            id: 'end',
            end: true,
            message: 'Aguarde uns segundos para confirmação'
        },
        {
            id: 'processCompletion',
            end: true,
            message: ({previousValue}) => `Entendi, ${previousValue}. Sua consulta foi desmarcada com sucesso. Se precisar reagendar ou tiver outras perguntas, estou à disposição. Cuide-se e até a próxima interação! 😊`
        }
    ];

    return steps
} 

export default chatbotSteps;
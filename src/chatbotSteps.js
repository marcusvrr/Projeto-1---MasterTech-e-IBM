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
                { value: 1, label: 'Marcar uma consulta psicológica', trigger: '5' },
                { value: 2, label: 'Desmarcar uma consulta psicológica', trigger: 'uncheckAppointment' },
                { value: 3, label: 'Tenho outra dúvida', trigger: 'information' }
            ]
        },
        {
            id: 'uncheckAppointment',
            message: 'Para desmarcar a consulta, precisamos garantir que estamos atualizados. Poderia informar seu nome completo, por favor?',
            trigger: 'nameUncheckAppointment'

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
            message: 'Legal! Se você quiser saber mais sobre a abordagem fenomenológica existencial, estou à disposição. Quer saber mais, marcar uma consulta ou voltar ao menu inicial?',
            trigger: 'informationOptions'
        },
        {
            id: 'informationOptions',
            options: [
                { value: 2, label: 'Saber mais', trigger: 'about' },
                { value: 1, label: 'Marcar consulta', trigger: '5' },
                { value: 3, label: 'Voltar ao menu inicial', trigger: '1' }
            ]
        },
        {
            id: 'about',
            message: 'Essa abordagem visa compreender profundamente a experiência humana, explorando questões como liberdade, responsabilidade e busca por sentido na vida. Se isso ressoar com você, ficarei feliz em agendar uma consulta para explorarmos suas experiências. 😊',
            trigger: 'aboutOptions'
        },
        {
            id: 'aboutOptions',
            options: [
                { value: 1, label: 'Marcar consulta', trigger: '5' },
                { value: 2, label: 'Voltar ao menu inicial', trigger: 1 }
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
                    value: 1, label: 'Manhã', trigger: () => {
                        updateValues.setTimeOfDay('manhã');
                        return '8';
                    }
                },
                {
                    value: 2, label: 'Tarde', trigger: () => {
                        updateValues.setTimeOfDay('tarde');
                        return '8';
                    }
                },
                {
                    value: 3, label: 'Noite', trigger: () => {
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
                    value: 1, label: 'Segunda-feira', trigger: () => {
                        updateValues.setDayOfWeek('segunda-feira');
                        return 'end'
                    }
                },
                {
                    value: 2, label: 'Quarta-feira', trigger: () => {
                        updateValues.setDayOfWeek('quarta-feira');
                        return 'end'
                    }
                },
                {
                    value: 3, label: 'Sexta-feira', trigger: () => {
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
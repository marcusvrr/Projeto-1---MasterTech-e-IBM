import ChatBot from 'react-simple-chatbot'
import chatbotSteps from './chatbotSteps'
import chatbot from './assets/chatbot.png'
import user from './assets/user.png'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

function App() {
    const [name, setName] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [timeOfDay, setTimeOfDay] = useState('');

    const updateValues = {
        setName,
        setDayOfWeek,
        setTimeOfDay,
    }

    const steps = chatbotSteps(updateValues)

    useEffect(() => {
        name && dayOfWeek && timeOfDay && (
            setTimeout(() => {
                Swal.fire({
                    title: "Sucesso!",
                    text: `Pronto, ${name}! Sua consulta está agendada para ${dayOfWeek} no horário da ${timeOfDay}. Mal posso esperar para ajudar você! Se precisar de mais alguma coisa, estou à disposição. Até lá! 😊`,
                    icon: "success"
                })
            }, 5000)
        )
    }, [name, dayOfWeek, timeOfDay])

    return (
        <>
            <ChatBot
                botAvatar={chatbot}
                steps={steps}
                userAvatar={user}
            />
        </>
    )
}

export default App

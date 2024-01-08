import ChatBot from 'react-simple-chatbot'
import chatbotSteps from './chatbotSteps'
import chatbot from './assets/chatbot.png'

function App() {

  return (
    <>
      <ChatBot
        botAvatar={chatbot}
        steps={chatbotSteps}
      />
    </>
  )
}

export default App

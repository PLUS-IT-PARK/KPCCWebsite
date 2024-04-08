import React from 'react'
import chatBotLogo from '../assets/img/chatBotLogo.png'
function ChatBot() {
  return (
    <div >
        <img className='w-100 img-fluid' style={{height:'40px',width:'40px'}} src={chatBotLogo} alt="" />
    </div>
  )
}

export default ChatBot
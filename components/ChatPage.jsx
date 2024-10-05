import React from 'react'
import { RagChat } from './RagChat';
import { Audit } from './Audit';

const ChatPage = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-2'>
      
      {/* AUDIT APPLICATION */}
      <Audit></Audit>


      {/* CHAT APPLICATION */}
      <RagChat></RagChat>

    </div>
  )
}

export {ChatPage};   
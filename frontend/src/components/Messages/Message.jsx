import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img className='bg-white' src="/public/8324223_ui_essential_app_avatar_profile_icon.png" alt="Tailwind css chat bubble component"  />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! What's uppp?</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:49</div>
    </div>

  )
}

export default Message
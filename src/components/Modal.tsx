import React from 'react'

interface ModalProps {
    children: React.ReactNode
    title?: string
    onClose?: () => void
}

export const Modal = ({children, title, onClose}: ModalProps ) => {
  return (
    <>
        <div 
            className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" onClick={onClose}
        />
        <div className='w-[500px] text-center rounded-md bg-white fixed top-[50%] py-3 px-3 left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h1 className='text-2xl pb-4 font-semibold'>{title}</h1>

            {children}
        </div>
    </>
  )
}

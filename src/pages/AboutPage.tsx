import React from 'react'

export const AboutPage = () => {
  return (
    <div className='text-4xl bg-gradient-to-t from-blue-300 to-red-300 h-screen w-screen text-center items-center flex text-purple-900'>
        <div className='flex my-0 mx-auto text-emerald-500 text-g-500 items-center hover:scale-105 hover:border-yellow-500 hover:shadow-xl p-6 bg-gradient-to-r from-blue-500 to-purple-500 font-bold rounded-lg transition-all duration-300 transform animate-pulse'>
            This project was built with React + TypeScript + Tailwind for self-education
        </div>    
    </div>
  )
}

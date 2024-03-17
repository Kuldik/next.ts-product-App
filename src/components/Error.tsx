import React from 'react'

interface ErrorProps {
    error: string
}

export const Error = ({error}: ErrorProps) => {
  return (
    <div><p className="text-center text-3xl bg-red-300 rounded-xl">{ error }</p></div>
  )
}

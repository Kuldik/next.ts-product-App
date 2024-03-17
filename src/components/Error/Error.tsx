import React from 'react'
import styles from './Error.module.css'

interface ErrorProps {
    error: string
}

export const Error = ({error}: ErrorProps) => {
  return (
    <div><p className={styles.heading}>{ error }</p></div>
  )
}

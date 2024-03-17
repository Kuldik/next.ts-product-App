import React from 'react'
import styles from './Modal.module.css'

interface ModalProps {
    children: React.ReactNode
    title?: string
    onClose?: () => void
}

export const Modal = ({children, title, onClose}: ModalProps ) => {
  return (
    <>
        <div 
            className={styles.overlay} onClick={onClose}
        />
        <div className={styles.popup}>
            <h1 className={styles.title}>{title}</h1>

            {children}
        </div>
    </>
  )
}

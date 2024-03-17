import { createContext } from "react";
import { useState } from "react";

interface IModalContext {
    modal: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const ModalContext = createContext<IModalContext>({
    modal: false,
    onOpen: () => {},
    onClose: () => {}
})

export const ModalState = ({children}: {children: React.ReactNode}) => {
    const [modal, setModal] = useState(false)
    const onOpen = () => setModal(true)
    const onClose = () => setModal(false)

    return (
        <ModalContext.Provider value={{modal, onOpen, onClose}}>
            {children}
        </ModalContext.Provider>
    )
}
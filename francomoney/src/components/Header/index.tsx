import logoImg from "../../assets/cifra.svg"
import { Container, ContainerTwo} from "./styles"
import { useState } from "react"
import Modal from 'react-modal'

interface HeaderProps{
    onOpenNewTransactionNewModal: () => void;
}

export function Header({onOpenNewTransactionNewModal}: HeaderProps){
    return(
        <Container>
                <ContainerTwo>
                        <div className="div-logo">
                            <img src={logoImg} alt="franco money" />
                            <strong>Franco<span>Money</span></strong>
                        </div>
                        <button type="button" onClick={onOpenNewTransactionNewModal}> 
                            <strong>Nova transação</strong> 
                        </button>
                </ContainerTwo>
        </Container>     
    )
}
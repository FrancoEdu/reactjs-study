import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/Modal";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }

    function handleCloneNewTransactionModel(){
        setIsNewTransactionModalOpen(false)
    }
    
  return (
    <>
      <Header onOpenNewTransactionNewModal={handleOpenNewTransactionModal}/>
      <GlobalStyle />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloneNewTransactionModel}
      />
    </>
  );
}
import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeBotao from '../../assets/botao-close.svg'
import entradaImg from '../../assets/entradas.svg'
import saidaImg from '../../assets/saida.svg'
import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';


interface NewTransactionModalProps{
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
    const { createTransaction } = useContext(TransactionsContext)
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [category,setCategory] = useState('')
    const [type,setType] = useState('deposit') 

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose();
    }

    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <Container> 
                <img src={closeBotao} alt="Fechar" className='react-modal-close' onClick={onRequestClose}/>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder='Título' value={title} onChange={event => setTitle(event.target.value)}/>
                <input type="number" placeholder='Valor' value={amount} onChange={event => setAmount(Number(event.target.value))}/>
                <TransactionTypeContainer>
                    <RadioBox 
                        type="button" 
                        onClick={() => {setType('deposit');}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <span>Entrada</span>
                        <img src={entradaImg} alt="Entrada de Renda" />
                    </RadioBox>
                    <RadioBox 
                        type="button" 
                        onClick={() => {setType('withdraw');}} 
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <span>Saída</span>
                        <img src={saidaImg} alt="Saida de Renda" />
                    </RadioBox>
                </TransactionTypeContainer>
                <input type="text" placeholder='Categoria' value={category} onChange={event => setCategory(event.target.value)}/>
                <button type="submit" onClick={handleCreateNewTransaction}>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}
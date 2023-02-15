import Modal from 'react-modal'
import { Container } from './styles';
import closeBotao from '../../assets/botao-close.svg'
interface NewTransactionModalProps{
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <Container>
                <form>
                    <img src={closeBotao} alt="Fechar" className='react-modal-close' onClick={onRequestClose}/>
                    <h2>Cadastrar Transação</h2>
                    <input type="text" placeholder='Título'/>
                    <input type="number" placeholder='Valor'/>
                    <input type="text" placeholder='Categoria'/>
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Container>
        </Modal>
    );
}
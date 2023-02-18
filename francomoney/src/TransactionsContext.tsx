import { type } from 'os';
import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api';

interface Transaction {
    id: number,
    title: string,
    amount: number,
    category: string,
    type: string,
    createdAt: string
}
// interface TransactionInput{
//     title: string,
//     amount: number,
//     category: string,
//     type: string,
// } abaixo é a mesma coisa
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; //Omitindo propriedades de dentro da interafce Transactions

interface TransactionsProviderProps{
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>; //função que recebe o transactiondo tipo TransactionInput e retorna void
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions').then(response =>setTransactions(response.data.transactions))
    },[]) //,[] se vazio sigmifica que executara uma unica vez até que se mude ao valor

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        const { transaction } = response.data

        setTransactions([
            ...transactions, //... inserção de tranmsações dentro do vetor, o ... indica cópia de tudo anterior ao novo dado, e em seguida inclui o novo dado
            transaction
        ]);
    }

    return(
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}
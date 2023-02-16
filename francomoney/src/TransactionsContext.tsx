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

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps{
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions').then(response =>setTransactions(response.data.transactions))
    },[]) //,[] se vazio sigmifica que executara uma unica vez até que se mude ao valor

    function createTransaction(transaction: TransactionInput){
        api.post('/transactions', transaction)
    }

    return(
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}
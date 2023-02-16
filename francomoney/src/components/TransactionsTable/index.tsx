import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

interface Transaction {
    id: number,
    title: string,
    amount: number,
    category: string,
    type: string,
    createdAt: string
}

export function TransactionsTable(){

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions').then(response =>setTransactions(response.data.transactions))
    },[]) //,[] se vazio sigmifica que executara uma unica vez até que se mude ao valor


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className="deposit">R$ {transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}
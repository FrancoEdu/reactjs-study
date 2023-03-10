import { Container } from "./styles";
import incomeImg from "../../assets/entradas.svg"
import saidasImg from "../../assets/saida.svg"
import totalImg from "../../assets/total.svg"
import { TransactionsContext } from "../../TransactionsContext";
import React,{useContext} from "react";

export function Summary(){
    const {transactions} = useContext(TransactionsContext)

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposit += transaction.amount
            acc.total += transaction.amount
        }else{
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    });

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposit)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="Saidas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: "BRL"
                    }).format(summary.withdraw)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: "BRL"
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}
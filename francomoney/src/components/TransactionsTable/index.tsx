import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable(){

    useEffect(() => {
        api.get('transactions').then(response => console.log(response.data))
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
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 1.000,00</td>
                        <td>Freelance</td>
                        <td>13/02/2023</td>
                    </tr>
                    <tr>
                        <td>Saúde</td>
                        <td className="withdraw">R$ 500,00</td>
                        <td>Hospital</td>
                        <td>13/02/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
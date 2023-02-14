import { Container } from "./styles";
import incomeImg from "../../assets/entradas.svg"
import saidasImg from "../../assets/saida.svg"
import totalImg from "../../assets/total.svg"


export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    R$ 1.000,00
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="Saidas" />
                </header>
                <strong>
                    R$ 500,00
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    R$ 500,00
                </strong>
            </div>
        </Container>
    );
}
import logoImg from "../../assets/logo.svg"
import { Container, ContainerTwo} from "./styles"
export function Header(){
    return(
        <Container>
                <ContainerTwo>
                        <img src={logoImg} alt="franco money" />
                        <button type="button">
                            Nova transação
                        </button>
                </ContainerTwo>
        </Container>     
    )
}
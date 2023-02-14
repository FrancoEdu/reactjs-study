import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); //quero 3 colunas de tamanhos iguais
    gap: 2rem;
    margin-top: -7rem;

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--titles)
    }
    
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 3rem;
    }

    .highlight-background{
        background-color: var(--green);
        color: white;
    }
`;
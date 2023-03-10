import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--blue);   
`;

export const ContainerTwo = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        padding: 0 2rem;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
    .div-logo{
        display: flex;
        align-items: center;
        gap: 1rem;
        color: white;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 2rem;

        span{
            color: var(--green);
        }
    }
`;
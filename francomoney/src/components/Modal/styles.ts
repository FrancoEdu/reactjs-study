import styled from "styled-components";

export const Container = styled.div`
    h2{
        color: var(--texts);
        font-size: 1.5rem;
        margin-bottom:2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--texts);
        }
        & + input{
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background-color: var(--green);
        color: white;
        font-size: 1rem;
        font-weight: 700;
        border: 0;
        margin-top: 1rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`

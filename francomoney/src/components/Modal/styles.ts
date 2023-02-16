import styled from "styled-components";
import {darken, transparentize} from "polished"

export const Container = styled.div`
    h2{
        color: var(--title);
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

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

interface RadioBoxProps{
    isActive: boolean;
    activeColor: "green" | "red";
}

const colors = {
    green: "#33cc95",
    red: "#E52E4D"

}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.5rem;
    background: ${(props) => props.isActive ? transparentize(0.9,colors[props.activeColor]) : `trasparent`};
    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover{
        border-color: ${darken(0.1, "#d7d7d7")};
    }

    img{
        width: 1.4rem;
        height: 1.4rem;
    }

    span{
        display: inline-block;
        margin-right: 1rem;
        color: var(--title);
        font-weight: 600;
        font-size: 1rem;
    }
`

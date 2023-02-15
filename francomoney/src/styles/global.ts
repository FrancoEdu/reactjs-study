import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #E62E4D;
        --green: #33CC95;
        --blue: #5429CC;
        --blue-light: #6933ff;
        --titles: #363F5F;
        --texts: #969CB3;
        --shape:  #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size=16px por default(ideal para desktop)
    //REM = 1rem = 16px

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
        @media(max-width: 720px){
            font-size: 87.05%; //14px
        }
    }

    body{
        background-color: var(--background);
        --webkit-font-smoothing: antialiased; /* fonst ficam mais detalhadas, nitidas */

    }

    body,input,text-area,button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disable]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top:1.5rem;
        border: 0;
        background: transparent;
        cursor: pointer;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        padding:0;
        margin:0;

    }
    *,*::after,*::before{
        box-sizing:inherit; 
        font-size:inherit;
    }
    html{
        box-sizing:border-box;
        font-size:62.5%;
    }
`;

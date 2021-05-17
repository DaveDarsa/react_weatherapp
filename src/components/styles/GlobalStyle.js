import { createGlobalStyle } from "styled-components";
import Munichbg from "../../images/Munich1.jpg";

export const GlobalStyle = createGlobalStyle`
    body{
        padding:0;
        margin:0;
       

    }
    *,*::after,*::before{
        box-sizing:inherit; 
        font-size:inherit;
        font-family:'Lato',sans-serif
    }
    html{
        box-sizing:border-box;
        font-size:62.5%;
    }
    .wrapper{
        min-height:100vh;
        padding:2rem 10rem;
        background:url(${Munichbg});
        background-size:cover;
        background-position:center top;
        background-repeat:no-repeat;
     
    }
    .forecast{
        padding:1.5rem;
        border-radius:1rem;
        border:1px solid rgb(10,10,10);
        background-color:rgba(255,255,255,.5);
        
 
    }
   
   .barchart{
    padding:.5rem 1rem;
    margin:2rem;
    
    canvas{
        margin:0 auto;
        width:70% !important;
        height:350px !important;
        
    }
   }
`;

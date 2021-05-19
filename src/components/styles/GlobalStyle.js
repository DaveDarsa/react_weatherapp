import { createGlobalStyle } from "styled-components";

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
    @media screen and (max-width:900px){
        html{
            font-size:50%;
            
        }
    }
    @media screen and (max-width:768px){
        html{
            font-size:45%;
            
        }
        .forecast{
            padding:1rem 0 !important;
        }
        .barchart{
            margin:2rem !important;
        }
        canvas{
            padding:0 !important;
            width:100% !important;
        
     
        }
    }
    @media screen and (max-width:450px){
        html{
            font-size:40%;
        }
       
    }

    .forecast{
        flex-basis:90%;
        padding:1.5rem;
        border-radius:1rem;
        border:1px solid rgb(10,10,10);
        background-color:rgba(255,255,255,.5);
    }
   
   .barchart{
    padding:.5rem 1rem;
    margin:5rem 0 0 0;
    
    canvas{
        margin:0 auto;
        width:70% !important;
        height:350px !important;
        
    }
   }
`;

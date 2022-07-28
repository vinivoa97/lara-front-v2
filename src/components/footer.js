import React from "react";
import styled from "styled-components"
import logoBranca from '../assets/logo-branca.png'; 


export default function Footer() {
 
  return(
    <Container>
        <footer>
            <img src={logoBranca} height="60" alt="LARA"/>
        </footer>
    </Container>
    
  );
}


const Container = styled.div`
text-align: center;
footer {
    height: 100px;
    background-color: #4285f4;
  }
  
  footer img {
    margin-top: 20px;
  }
`;
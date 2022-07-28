import React from 'react';
import {createGlobalStyle } from "styled-components"
import Layout from '../components/layout';
import '../styles/index.css';

function Index() {
  return (
    <>
    <GlobalStyle/>
    <Layout>
     <p>oiiiiiiiiiiiiii</p>
      </Layout>
    </>
    
  );
}

export default Index;


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
